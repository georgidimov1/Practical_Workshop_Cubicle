const {Router} = require ('express');
const services = require('../services/productService');
const router = Router();

    router.get('/', (req, res)=>{
    let prod = services.getAll;
         res.render('home', {title:'Home', prod});
         })
module.exports = router;