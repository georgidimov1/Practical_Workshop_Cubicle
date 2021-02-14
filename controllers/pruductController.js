const {Router, request} = require ('express');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const router = Router();
const services = require('../services/productService.js')

router.get('/', (req, res)=>{
    res.render('create',{title: 'Create'})
})
router.post('/', urlencodedParser, (req, res)=>{
// validate inputs
console.log(req.body)
services.create(req.body)
.then(()=>{res.redirect('/')})
.catch(()=> res.status(500).end()) 
})

router.get('/:productId', (req, res)=>{
    services.finder(req.params.productId)
      .then (det => {
           res.render('details',{title: 'Details', det})
        }) 
  })


module.exports = router;