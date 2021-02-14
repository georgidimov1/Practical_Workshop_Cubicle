const {Router} = require ('express');
const services = require('../services/productService');
const Cube = require('../models/cube.js')
const url = require('url')
const router = Router();
    router.get('/', (req, res)=>{
    const queryObject = url.parse(req.url,true).query;
     services.getAll()
        .then(product => {
            let products = services.query(queryObject, product);
            res.render('home', {title:'Home', products});
                
        })
  })

module.exports = router;