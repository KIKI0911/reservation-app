const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    coverImage: String,
    name: { type: String, required: true, max: [60, '最大60文字までです'] },
    price: Number,
    description: String,
    heading1: String,
    heading2: String,
    heading3: String,
    headingtext1: String,
    headingtext2: String,
    headingtext3: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
