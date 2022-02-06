const router = require('express').Router()
const categoryRoute = require('./category')
const productRoute = require('./product')

router.use('/products',productRoute)
router.use('/categories',categoryRoute)


module.exports = router