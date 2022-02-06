const router = require('express').Router()
const { getCategories } = require('../controller/category.controller')

router.get('/',getCategories)

module.exports = router