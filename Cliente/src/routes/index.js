const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index.html', { title: 'Primer Titulo'});
});

router.get('/segundo', (req,res) => {
    res.render('segundo.html');
});

module.exports = router;