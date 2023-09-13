const productCotroller = require('../controllers/productController.js')

const router = require('express').Router()

router.post('/addProduct' , productCotroller.addProduct)

router.get('/allProducts' , productCotroller.getAllProducts)

router.get(':/id' , productCotroller.getOneProduct)

router.get('/published' , productCotroller.getPublishedProduct)

router.put('/:id' , productCotroller.updateProduct)

router.delete('/:id' , productCotroller.deleteProduct)

module.exports = router

