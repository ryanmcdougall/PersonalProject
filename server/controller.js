const axios = require('axios')

module.exports = {
    showPumps: ( req, res ) => {
        const db = req.app.get('db');
        db.show_pumps().then( pumps => {
            res.status(200).send(pumps)
        })
    },
    showHose: ( req, res ) => {
        const db = req.app.get('db');
        db.show_hose().then( hose => {
            res.status(200).send(hose)
        })
    },
    showAttachments: ( req, res ) => {
        const db = req.app.get('db');
        db.show_attachments().then( attachments => {
            res.status(200).send(attachments)
        })
    },
    getCartItems: ( req, res ) => {
        const db = req.app.get("db");
        db.show_cart().then( cart => {
            res.status(200).send(cart)
        })
    },
    getUserCart( req, res ){
        const db = req.app.get("db");
        console.log("working user:", req.user)
        db.get_user_cart( req.user.id ).then( userCart => {
            res.status(200).send( userCart )
        })
    },
    postToCart: ( req, res ) => {
        const db = req.app.get('db');
        console.log(req.body)
        db.post_cart([ req.user.id, req.body.productId ]).then( cart => {
            res.status(200).send(cart)
        })
    },
    deleteFromCart: ( req, res ) => {
        const db = req.app.get("db");
        console.log('req.query:', req.query)
        console.log("user in delete:", req.user)
        db.delete_from_cart([req.query.id, req.user.id]).then( updatedCart => {
            res.status(200).send(updatedCart)
        })
    }
} 