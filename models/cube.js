const fs = require('fs/promises');
const { Model } = require('mongoose');
const products = require ('../config/db.json')

class Cube extends Model{
    constructor(id, name,description,imageUrl,difficultyLevel){
        this.id=id,
        this.name=name,
        this.description=description,
        this.imageUrl=imageUrl,
        this.difficultyLevel=difficultyLevel
    }
}

module.exports = Cube;