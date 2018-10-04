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
    getUserCart: ( req, res ) => {
        const db = req.app.get("db");
        db.get_user_cart(req.user.id).then( userCart => {
            res.status(200).send( userCart )
        })
    },
    getPrices: ( req, res ) => {
        const db = req.app.get("db");
        db.get_prices(req.user.id).then( prices => {
            res.status(200).send( prices )
        })
    },
    postToCart: ( req, res ) => {
        const db = req.app.get('db');
        db.post_cart([ req.user.id, req.body.productId ]).then( cart => {
            res.status(200).send(cart)
        })
    },
    editAmount: ( req, res ) => {
        const db = req.app.get("db");
        console.log(+req.params.id, req.body.amount, +req.user.id)
        db.edit_amount([ req.body.amount, +req.params.id, req.user.id ]).then( update => {
            console.log( update )
            res.status(200).send( update )
        })
    },
    deleteFromCart: ( req, res ) => {
        const db = req.app.get("db");
        db.delete_from_cart([+req.params.id, req.user.id]).then( updatedCart => {
            res.status(200).send(updatedCart)
        })
    },
    clearCart: ( req, res ) => {
        const db = req.app.get('db');
        db.delete_cart(req.user.id).then( cart => {
            res.status(200).send( cart )
        })
    }
} 