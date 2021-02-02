const {Router} = require ('express');
const router = Router();
const Cube = require('../models/cube.js')
const uniqid = require('uniqid')
const fs = require('fs/promises');
const products = require ('../config/db.json')

let services = {
    create: (data)=>{
        return cube = new Cube(
            uniqid(),
            data.name,
            data.description,
            data.imageUrl,
            data.difficultyLevel);
    },
    write: (cube)=>{
      return fs.writeFile(__dirname +'/../config/db.json',JSON.stringify(products.concat([cube])), (err)=>{console.log(err)});
    },
    finder: (id)=>{
        return products.find(element => element.id=id)
        },

    getAll: products
    
    
 }

module.exports = services;
