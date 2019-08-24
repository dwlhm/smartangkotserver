var express = require('express');
var firebase = require('firebase');
var router = express.Router();

router.get('/:id', function(req, res, next) {
    res.type('json');

    try {
        firebase.initializeApp({
			apiKey: "AIzaSyD0TP7PnIPGS12yE1_plnnsHT7-lNk2gjw",
			authDomain: "smartangkot.firebaseapp.com",
			databaseURL: "https://smartangkot.firebaseio.com",
			projectId: "smartangkot",
			storageBucket: "smartangkot.appspot.com",
			messagingSenderId: "1052207778717",
			appId: "1:1052207778717:web:553fafdd3044fe3f"
		});
	} catch (error) {
		console.log(error);
	}
    
    async function name() {
        let db = firebase.firestore();
        await db.collection("penumpang").doc(String(req.params.id))
            .update({ turun: true });

        res.json({ status: 'success' });
    }

    name();
});

module.exports = router;