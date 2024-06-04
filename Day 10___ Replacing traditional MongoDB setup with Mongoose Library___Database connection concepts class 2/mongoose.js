const mongoose = require("mongoose");
const Product = require("./models/products");

// Connection
mongoose.connect(
  "mongodb+srv://Abdullah:Sapphire%401@cluster0.bhhxoyj.mongodb.net/products"
).then(() => {
    console.log("Connected to database!");
}).catch(() => {
    console.log("Connection to database failed!");
});

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();
  res.json(result);
};

const getProduct = async (req,res,next) => {
    const result = await Product.find().exec(); // exec is used to convert this to a promise so that we can use await
    res.json(result);
}

module.exports.createProduct = createProduct;
module.exports.getProduct = getProduct;
