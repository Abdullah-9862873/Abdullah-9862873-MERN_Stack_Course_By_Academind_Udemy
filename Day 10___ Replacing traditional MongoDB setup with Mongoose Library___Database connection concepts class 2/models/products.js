const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model("Product", productSchema);

/* 
Here Product in mongoose.model denotes that a collection named "products" will be made after the execution
*/
