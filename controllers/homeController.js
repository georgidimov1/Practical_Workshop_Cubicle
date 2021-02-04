const {Router} = require ('express');
const services = require('../services/productService');
const router = Router();
const url = require('url');

    router.get('/', (req, res)=>{
    const queryObject = url.parse(req.url,true).query;
    
    let product = services.getAll();
    console.log(queryObject.search)
    prod = product.find(el => el.name.toLowerCase().includes(queryObject.search.toLowerCase())
    )
   console.log(prod);
         res.render('home', {title:'Home', prod});
         })

module.exports = router;