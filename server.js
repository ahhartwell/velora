const express = require("express");
const dotenv = require("dotenv");

const analyzeRoute = require("./routes/analyzeRoute");


dotenv.config();


const app = express();


app.use(express.json());


app.use("/api", analyzeRoute);



const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {

    console.log(`Velora server running on port ${PORT}`);

});