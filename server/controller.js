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
    postToCart: ( req, res ) => {
        const db = req.app.get('db');
        console.log(req.body)
        db.post_cart([ req.user.id, req.body.productId ]).then( cart => {
            res.status(200).send(cart)
        })
    }
} 