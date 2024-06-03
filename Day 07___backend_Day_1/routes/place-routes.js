const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        location: {
            lat: 40.7484474,
            lng: -73.9871516
        },
        address: '20 W 34th St, New York, NY 10001',
        creator: 'u1'
    }   
]

router.get("/:pid", (req,res,next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find((p) => {
        return p.id === placeId;
    })

    if(!place){
        // One way of doing it without using error handling api in app.js
        // return res.status(404).json({message: "Could not find a place with the provided id."});

        // other way
        const error = new Error("Could not find a place with the provided id");
        error.code = 404;
        return next(error);
    }
    res.json(place);
})

router.get("/user/:uid", (req,res,next) => {
    const userId = req.params.uid;
    const place = DUMMY_PLACES.find((p) => {
        return p.creator === userId;
    })

    if(!place){
        // One way to send the error
        // return res.status(404).json({message: "Could not find a place with the provided user id."});

        // If using error handling in app.js then we can use "next" or "throw"... "next" is used when some asynchronus properties are being used while "throw" is used when synchronusly things are working which is the current case... so we'll use both lets say
        const error = new Error("Could not find a place with the provided id");
        error.code = 404;
        throw error;
    }

    res.json(place);
})

module.exports = router;