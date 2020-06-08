const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index.html', { title: 'Don*Cosmic!'});
});

router.get('/contact', (req,res) => {
    res.render('contact.html', { title: 'Contacte'});
});

module.exports = router;