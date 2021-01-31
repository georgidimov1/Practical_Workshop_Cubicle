const {Router} = require ('express');
const router = Router();
const Cube = require('../models/cube.js')
const uniqid = require('uniqid')
const fs = require('fs/promises');



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
        return fs.writeFile('./config/db.json',JSON.stringify(cube))
    }
 }

module.exports = services;
