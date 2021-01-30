const express = require ('express');
const handlebars = require ('express-handlebars')
const config = require ('./config/config');
const app = express();

app.engine('hbs', handlebars({
    extname: 'hbs'
}));
app.set('view engine', 'hbs')
app.use(express.static('static') )
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res)=>{
    res.render('home', {layout:false});
     })
app.route('/create')
.get( (req, res)=>{
    res.render('create', {layout:false})
})
.post( (req, res)=>{
    res.send(req.body.name);
})

app.get('/about', (req, res)=>{
    res.render('about',  {layout:false})
})
app.all
app.listen(config.PORT , ()=>{console.log(`Listening ...on port: ${config.PORT}`)})