const router = require('express').Router()
const { getProducts,filterProducts,findProducts,orderedProducts } = require('../controller/product.controller')

router.get('/',getProducts)
router.get('/order',orderedProducts)
router.get('/:categoryId',filterProducts)
router.post('/',findProducts)

module.exports = router