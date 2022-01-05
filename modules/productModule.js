const Product = require('../models/Product');

exports.createProduct = async (req,res,next) => {
    
    const product = new Product({
        productName : req.body.productName,
        quantity : req.body.quantity,
        price : req.body.price,
        description : req.body.description,
        userQuantity : req.body.userQuantity
    })

    try{
        var response = await product.save();
        res.send(response);
    } catch (err) {
        res.status(500).send(err)
    }
}

exports.getProduct = async (req,res,next) => {
    try{
        var response = await Product.find();
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.updateProduct = async (req,res,next) => {

    try {
        const id = req.params.id;
        var response = await Product.findByIdAndUpdate(id, {
            userQuantity : req.body.userQuantity
        }, {new: true})
        res.send(response);
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.deleteProduct = async (req,res,next) => {

    try{
        const id = req.params.id;
        var response = await Product.findByIdAndRemove(id);
        res.send(response)
    } catch(err) {
        res.status(500).send(err)
    }
}