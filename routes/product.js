const express = require('express');
const router = express.Router();
const productModule = require('../modules/productModule');


router.post('/create', productModule.createProduct);
router.get('/get', productModule.getProduct);
router.patch('/update/:id', productModule.updateProduct);
router.delete('/delete/:id', productModule.deleteProduct);

module.exports = router;