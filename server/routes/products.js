const express = require('express')
const router = express.Router()
const Product = require('../model/product')



router.get('', async (req, res) => {
    try {
        const foundProducts = await Product.find({});
        res.json(foundProducts);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const foundProducts = await Product.findById(productId);
        res.json(foundProducts);
    } catch (err) {
        res.status(422).send({errors:[{title: 'Product error', detail: 'Product not found'}]});
    }
});

module.exports = router