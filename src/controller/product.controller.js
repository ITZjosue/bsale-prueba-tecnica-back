const mysql = require('../db')

const getProducts = (req,res)=>{
    
    mysql.query('SELECT product.id,product.name,product.url_image,product.price,product.discount, category.name as category_name FROM `product` INNER JOIN category ON product.category = category.id ORDER BY category.id',(error,result)=>{
        if(error){
            res.status(500).json(error)
        }else{
            res.status(200).json(result)
        }
    })
}

const filterProducts = (req,res)=>{
    
    const { categoryId } = req.params
    
    mysql.query(`SELECT product.id,product.name,product.url_image,product.price,product.discount,category.name as category_name FROM product INNER JOIN category ON product.category = category.id WHERE product.category = ${categoryId}`,(error,result)=>{
        if(error){
            res.status(500).json(error)
        }else{
            res.status(200).json(result)
        }
    })    
}

const findProducts =(req,res)=>{
    const { productName } = req.body
    mysql.query(`SELECT product.id,product.name,product.url_image,product.price,product.discount,category.name as category_name FROM product INNER JOIN category ON product.category = category.id WHERE product.name LIKE '%${productName}%'`,(error,result)=>{
        if(error){
            res.status(500).json(error)
        }else{
            if(result.length < 1){
                res.status(404).json({msg:"No data found"})
            }else{
                res.status(200).json(result)
            }
        }

    })
}

const orderedProducts = (req,res)=>{
    const { dir } = req.query
    if(dir == 'ASC'){
        mysql.query("SELECT product.id,product.name,product.url_image,product.price,product.discount, category.name as category_name FROM `product` INNER JOIN category ON product.category = category.id ORDER BY product.name ASC",(error,result)=>{
            if(error){
                res.status(500).json(error)
            }else{
                res.status(200).json(result)
            }
        })
    }
    else if(dir == 'DESC'){
        mysql.query("SELECT product.id,product.name,product.url_image,product.price,product.discount, category.name as category_name FROM `product` INNER JOIN category ON product.category = category.id ORDER BY product.name DESC",(error,result)=>{
            if(error){
                res.status(500).json(error)
            }else{
                res.status(200).json(result)
            }
        })
    }else{
        res.status(500).json({msg:"Internal Problem"})
    }
}

module.exports = {
    getProducts,
    filterProducts,
    findProducts,
    orderedProducts
}