const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const analyzeRoute = require("./analyzeRoute");
const healthRoute = require("./healthRoute");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));

app.use("/api", analyzeRoute);
app.use("/api", healthRoute);

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "index.html"));

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("");
    console.log("====================================");
    console.log("Velora AI Business Analyst Started");
    console.log(`Server: http://localhost:${PORT}`);
    console.log("====================================");
    console.log("");

});