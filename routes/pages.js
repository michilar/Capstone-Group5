const express = require("express");

const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index');
});

router.get('/login', (req, res)=>{
    res.render('login');
});

router.get('/profile', (req, res)=>{
    res.render('profile');
});

router.get('/hw', (req, res)=>{
    res.render('hw');
});

router.get('/discussion', (req, res)=>{
    res.render('discussion');
});



module.exports = router;