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

    getAll: ()=> {return products},

    query: (q, p)=>{
        let prod = {};
                if(Object.keys(q).length !==0){
                    prod = p.filter(el => el.name.toLowerCase().includes(q.search.toLowerCase()))
                } else{prod=p}
                
                return prod;
            }
            
 }

module.exports = services;