const {Router} = require ('express');
const router = Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const accessoryServices = require('../services/accessoryService.js');

router.get('/', (req, res)=>{
    res.render('createAccessory', {title: 'Create Accessory'});
     })
router.post('/create',urlencodedParser, (req, res)=>{
    // validate inputs
    //console.log(req.body)
    accessoryServices.create(req.body)
    .then(()=>{res.redirect('/')})
    .catch(()=> res.status(500).end()) 
    })
module.exports = router;