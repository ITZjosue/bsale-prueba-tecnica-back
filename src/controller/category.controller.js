const mysql = require('../db')
const catArray = require('../rawData/category')



const getCategories = async (req,res)=>{    
    try{
        mysql.query("SELECT * FROM category",(error,result)=>{
            if(error){
                res.status(500).json(error)  
            }else{
                res.status(200).json(result)
            }
        })
        
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    getCategories
}