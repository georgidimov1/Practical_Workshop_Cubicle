const express = require ('express');
const fs = require('fs/promises');
const {Router} = require ('express')
const router = Router()

router.use(express.urlencoded());
router.use(express.json());

router.get('/', (req, res)=>{
    res.render('home', {layout:false});
     })

router.route('/create')
.get( (req, res)=>{
    res.render('create', {layout:false})
})
.post( (req, res)=>{
  
    var cube = {
        'name': req.body.name,
        'description': req.body.description,
        'image': req.body.imageUrl,
        'difficultyLevel': req.body.difficultyLevel
    }
    fs.writeFile('./config/db.json',JSON.stringify(cube))
      .then(res.redirect('/'))
}
)
router.get('/about', (req, res)=>{
    res.render('about',  {layout:false})
})

module.exports = router;