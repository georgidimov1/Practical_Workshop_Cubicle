const {Router, request} = require ('express');
const router = Router();
const services = require('../services/productService.js')

router.get('/', (req, res)=>{
    res.render('create',{title: 'Create'})
})
router.post('/', (req, res)=>{
// validate inputs
let cube = services.create(req.body)
.then(()=>{res.redirect('/')})
.catch(()=> res.status(500).end()) 
})

router.get('/:productId', (req, res)=>{
    console.log(req.params.productId)
    services.finder(req.params.productId)
      .then (det => {
           res.render('details',{title: 'Details', det})
        }) 
  })


module.exports = router;