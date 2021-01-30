const express = require ('express');
const config = require ('./config/config');
const setupExpress = require('./config/express');
const fs = require('fs/promises')
const app = express();
setupExpress(app);

app.use(express.urlencoded());
app.use(express.json());
var file = require('./config/db.json')
app.get('/', (req, res)=>{
    res.render('home', {layout:false});
     })
app.route('/create')
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
    fs.writeFile('./config/db.json',JSON.stringify(file.push(cube)))
      .then(res.redirect('/'))
}
)
app.get('/about', (req, res)=>{
    res.render('about',  {layout:false})
})
app.all
app.listen(config.PORT , ()=>{console.log(`Listening ...on port: ${config.PORT}`)})