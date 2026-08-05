const express = require("express");

const router = express.Router();

const aiAnalyzer = require("./aiAnalyzer");

router.post("/analyze", async (req, res) => {

    try {

        const { data } = req.body;

        if (!data) {

            return res.status(400).json({

                error: "Business data is required."

            });

        }

        const analysis = await aiAnalyzer(data);

        res.json(analysis);

    } catch (error) {

        console.error(error);

        res.status(500).json({

            error: "Analysis failed."

        });

    }

});

module.exports = router;