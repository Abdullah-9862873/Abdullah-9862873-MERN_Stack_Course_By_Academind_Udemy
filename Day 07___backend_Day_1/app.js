const express = require("express");
const bodyParser = require("body-parser");

const placeRoutes = require("./routes/place-routes");

const app = express();

app.use('/api/places',placeRoutes);


// error handling
app.use((error, req, res, next) => {
    if(res.headerSend){
        return next(error); // if some response has been sent then we wont send our own response we just pass whats already been sent
    }
    res.status(error.code || 500);
    res.json({message: error.message || "An Unknown error occured"});
})

app.listen(5000);