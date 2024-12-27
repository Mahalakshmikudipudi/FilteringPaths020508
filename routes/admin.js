const express=require('express');

const router=express.Router(); // create router by calling express.router and this is the function execute 
//  and  the router is mini express app plugable to our express app 


// /admin/add-product => GET
router.get('/add-product', (req, res, next) => { //why before because it doesn't 
// have next if we don't have next then it doesn't go to next function/middleware
    res.send(`<form action="/admin/add-product" method="POST">
                <label for="username">Username: </label>
                <input type="text" name="username" id="username">
                <label for="size">Size: </label>
                <input type="number" name="size" id="size">
                <button type="submit">Add Product</button>
                </form>`);//send allows us to attach a body which of type any
    
})

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    //console.log('Hello!');
    console.log(req.body);
    res.redirect('/');


})

module.exports = router;
