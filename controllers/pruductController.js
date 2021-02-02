const {Router, request} = require ('express');
const router = Router();
const express = require ('express');
router.use(express.urlencoded());
router.use(express.json());
const services = require('../services/productService.js')


router.get('/', (req, res)=>{
    res.render('create',{title: 'Create'})
})
router.post('/', (req, res)=>{
// validate inputs
let cube = services.create(req.body);
services.write(cube)
.then(res.redirect('/'))
})
router.get('/:productId', (req, res)=>{
    let det = services.finder(req.params.productId)
    res.render('details',{title: 'Details', det})
  })

module.exports = router;