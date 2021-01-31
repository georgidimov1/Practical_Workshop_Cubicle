const express = require ('express');
const config = require ('./config/config');
const setupExpress = require('./config/express');
const routes = require ('./routes.js')

const app = express();
setupExpress(app);

app.use(routes);

app.listen(config.PORT , ()=>{console.log(`Listening ...on port: ${config.PORT}`)})