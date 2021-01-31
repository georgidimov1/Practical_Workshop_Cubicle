const {Router} = require ('express');
const router = Router();
const fs = require('fs/promises');
const express = require ('express');
router.use(express.urlencoded());
router.use(express.json());

router.get('/', (req, res)=>{
    res.render('create',{title: 'Create'})
})
router.post('/', (req, res)=>{
  
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
router.get('/:productId', (req, res)=>{
    res.render('details',{title: 'Details'})
})

module.exports = router;