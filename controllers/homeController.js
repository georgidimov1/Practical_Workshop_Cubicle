const {Router} = require ('express');
const services = require('../services/productService');
const Cube = require('../models/cube.js')
const router = Router();
const url = require('url');

    router.get('/', (req, res)=>{
    const queryObject = url.parse(req.url,true).query;
    let product = Cube.getAll();
    let newProduct =services.query(queryObject, product);
    res.render('home', {title:'Home', newProduct});
   })

module.exports = router;