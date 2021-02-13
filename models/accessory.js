const fs = require('fs/promises');
const { Model } = require('mongoose');
const products = require ('../config/db.json')

class Accessory extends Model{
    
}

module.exports = Accessory;