const {Router} = require ('express');
const router = Router();
const Cube = require('../models/cube.js')
const uniqid = require('uniqid')

const products = require ('../config/db.json')

let services = {
    create: (data)=>{
        cube = new Cube(
            uniqid(),
            data.name,
            data.description,
            data.imageUrl,
            data.difficultyLevel);
    return cube.save();
    },


     query: (q, p)=>{
        let prod = p;
                    if(q.search){
                        prod = prod.filter(el => el.name.toLowerCase().includes(q.search.toLowerCase()))
                        }
                    if(q.from){
                        prod = prod.filter(el => el.difficultyLevel>=q.from)
                    }
                    if(q.to){
                        prod = prod.filter(el => el.difficultyLevel<=q.to)
                    }                
                                    
                            
                return prod;
    }        
 }

module.exports = services;