const express = require("express");

const router = express.Router();

router.get("/health", (req, res) => {

    res.json({

        status: "online",

        service: "Velora",

        version: "1.0.0",

        timestamp: new Date().toISOString()

    });

});

module.exports = router;