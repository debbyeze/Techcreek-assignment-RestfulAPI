const express = require('express');
const res = require('express/lib/response');
const { append } = require('express/lib/response');
const router = express.Router();
const post = require('../models/post');





// ROUTES
router.get('/', (req, res) => {
    res.send('welcome home');
});

router.post('/', (req,res) => {
    console.log(req.body);
});




module.exports = router;