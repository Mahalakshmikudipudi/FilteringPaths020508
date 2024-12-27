const express = require('express');

const router=express.Router();

router.get('/', (req, res, next) => {
    res.send(`<h1>Hello from express!</h1>`);//send allows us to attach a body which of type any
    
})

module.exports = router;