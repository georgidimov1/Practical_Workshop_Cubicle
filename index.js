const express = require ('express');
const config = require ('./config/config');
const app = express();

app.get('/', (req, res)=>{
    res.send('hi')
     })
app.listen(config.PORT , ()=>{console.log(`Listening ...on port: ${config.PORT}`)})