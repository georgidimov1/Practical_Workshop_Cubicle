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
        return fs.writeFile(__dirname +'/../config/db.json',JSON.stringify(products.concat([cube])), function(err) {
                if (err) reject(err);
                else resolve(data);
            });
         },
    finder: (i)=>{
           return products.find(el => el.id == i);
                 },

    getAll: ()=> {return products}
    
    
 }

module.exports = services;