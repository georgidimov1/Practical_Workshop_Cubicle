const Accessory = require('../models/accessory.js')

let accessoryServices = {
    create: (data)=>{
        let accessory = new Accessory(data)
        console.log(accessory)
    return accessory.save();
     },


//      query: (q, p)=>{
//         let prod = p;
//                     if(q.search){
//                         prod = prod.filter(el => el.name.toLowerCase().includes(q.search.toLowerCase()))
//                         }
//                     if(q.from){
//                         prod = prod.filter(el => el.difficultyLevel>=q.from)
//                     }
//                     if(q.to){
//                         prod = prod.filter(el => el.difficultyLevel<=q.to)
//                     }                
                                    
                            
//                 return prod;
//     },
        getAll: ()=>{
                           return Accessory.find({}).lean();
        },
//     finder: (i)=>{
//             return Cube.findById(i).lean()
//               }        
}

module.exports = accessoryServices;