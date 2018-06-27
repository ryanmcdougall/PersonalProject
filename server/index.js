require('dotenv').config()
const ctrl = require('./controller')
const express = require("express"),
  session = require("express-session"),
  passport = require("passport"),
  Auth0Strategy = require("passport-auth0"),
  massive = require("massive"),
  stripe = require('stripe')(process.env.SECRET_KEY),
  bodyParser = require('body-parser');

  const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
  } = process.env;

  const app = express();
  app.use(bodyParser.json());

  massive(CONNECTION_STRING).then(db => {
      app.set("db", db);
  });

  app.use(session({
      secret: SESSION_SECRET,
      resave: false, 
      saveUninitialized: true
  })
);
app.use(passport.initialize())
app.use(passport.session());
passport.use(
    new Auth0Strategy(
        {
            domain: DOMAIN,
            clientID: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            callbackURL: CALLBACK_URL,
            scope: "openid profile"
        },
        (accessToken, refreshToken, extraParams, profile, done) => {
            const db = app.get("db");
            let { id, displayName } = profile;
            db.find_user([id]).then(user => {
                if (user[0]) {
                    done(null, user[0].id)
                } else {
                    db.create_user([displayName, id]).then( (createdUser) => {
                        done(null, createdUser[0].id);
                    })
                }
            });
        }

    )
);

passport.serializeUser((id, done) => {
    done(null, id);
});
passport.deserializeUser((id,done) => {
    app.get("db").find_session_user([id]).then(user => {
        done(null, user[0])
    })
});

app.get("/auth", passport.authenticate("auth0"));
app.get(
    "/auth/callback",
    passport.authenticate("auth0", {
        successRedirect: "http://localhost:3000/#/"
    })
)
app.get('/auth/logout', (req,res) => {
    req.logOut();
    res.redirect('http://localhost:3000')
  })
app.get('/auth/user', (req,res) => {
    if(req.user){
      res.status(200).send(req.user)
    } else {
      res.status(401).send('Nice try')
    }
  })

app.post('/api/payment', function(req, res, next){
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
      if(amountArray[i] === ".") {
        if (typeof amountArray[i + 1] === "string") {
          pennies.push(amountArray[i + 1]);
        } else {
          pennies.push("0");
        }
        if (typeof amountArray[i + 2] === "string") {
          pennies.push(amountArray[i + 2]);
        } else {
          pennies.push("0");
        }
          break;
      } else {
          pennies.push(amountArray[i])
      }
    }
    const convertedAmt = parseInt(pennies.join(''));
    console.log(convertedAmt)
    const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
  }, function(err, charge) {
      console.log(err)
      if (err) return res.sendStatus(500) 
      app.delete('/product/purchased/:id', )
      return res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
  });
  });

app.get('/product/pumps', ctrl.showPumps)
app.get('/product/hose', ctrl.showHose)
app.get('/product/attachments', ctrl.showAttachments)
app.get('/product/cart', ctrl.getCartItems)
app.get('/product/userCart', ctrl.getUserCart)
app.get('/product/prices', ctrl.getPrices)
app.post('/product/cart', ctrl.postToCart)
app.put('/product/cart/:id', ctrl.editAmount)
app.delete('/product/cart/:id', ctrl.deleteFromCart)

app.listen(SERVER_PORT, () => { 
    console.log(`Listening on port: `, SERVER_PORT);
  });