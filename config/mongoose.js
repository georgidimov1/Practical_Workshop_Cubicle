const mongoose = require('mongoose')

module.exports = (app)=>{
    mongoose.connect('mongodb://localhost:27017/cubicle', {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.once('open', ()=>{console.log('db connected')})
}
