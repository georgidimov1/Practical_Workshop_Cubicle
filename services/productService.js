const {Router} = require ('express');
const router = Router();
const Cube = require('../models/cube.js')

let services = {
    create: (data)=>{
        cube = new Cube(data)
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
    },
    getAll: ()=>{
        return Cube.find({}).lean();
    },
    finder: (i)=>{
            return Cube.findById(i).lean()
              }        
 }

module.exports = services;