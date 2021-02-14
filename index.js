const express = require ('express');
const config = require ('./config/config');
const setupExpress = require('./config/express');
const routes = require ('./routes.js')
const mongoose = require ('./config/mongoose')

const app = express();
setupExpress(app);
mongoose(app);

app.use(routes);

app.listen(config.PORT , ()=>{console.log(`Listening ...on port: ${config.PORT}`)})