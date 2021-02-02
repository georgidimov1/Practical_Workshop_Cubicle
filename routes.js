const {Router} = require ('express')
const homeController = require('./controllers/homeController.js')
const pruductController = require('./controllers/pruductController.js')
const aboutController = require('./controllers/aboutController.js')
const router = Router();

router.use('/', homeController);
router.use('/create', pruductController);
router.use('/details' , pruductController);
router.use('/about', aboutController);
router.get('*', (req,res)=>{
    res.render('404')
})


module.exports = router;