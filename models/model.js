const fs = require('fs/promises');
const products = require ('../config/db.json')
class Model {

    save (){
        return fs.writeFile(__dirname +'/../config/db.json',JSON.stringify(products.concat([cube])), function(err) {
            if (err) reject(err);
            else resolve(data);
        });
    }
    static getAll(){return products}
    static finder(i){
        return products.find(el => el.id == i);
              }
}

module.exports = Model;