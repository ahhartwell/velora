const express = require("express");
const router = express.Router();

const analyzeBusinessData = require("../services/aiAnalyzer");


router.post("/analyze", async (req, res) => {

    try {

        const { data } = req.body;


        if (!data) {

            return res.status(400).json({
                error: "Business data is required."
            });

        }


        const result = await analyzeBusinessData(data);


        res.json(result);


    } catch (error) {

        console.error(error);


        res.status(500).json({

            error: "Analysis failed."

        });

    }

});


module.exports = router;