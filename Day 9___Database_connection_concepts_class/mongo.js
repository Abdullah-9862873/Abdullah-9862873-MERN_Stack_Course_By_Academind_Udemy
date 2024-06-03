const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://Abdullah:Sapphire%401@cluster0.bhhxoyj.mongodb.net/products";

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    }
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("MongoDB successfully connected");
        const db = client.db("products"); // Specify the database name
        const result = await db.collection("products").insertOne(newProduct);
        console.log("Product inserted:", result);
        res.json(newProduct);
    } catch (error) {
        console.error("Error inserting product:", error);
        return res.json({ message: "Could not store data" });
    } finally {
        client.close();
    }
}

const getProduct = async (req, res, next) => {
    const client = new MongoClient(url);
    let products;
    try {
        await client.connect();
        const db = client.db("products"); 
        products = await db.collection("products").find().toArray();
    } catch (error) {
        console.error("Error getting products:", error);
        return res.json({ message: "Could not get any product" });
    } finally {
        client.close();
    }
    res.json(products);
}

exports.createProduct = createProduct;
exports.getProduct = getProduct;
