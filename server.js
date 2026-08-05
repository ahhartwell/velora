const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 20 * 1024 * 1024
    }
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/upload", upload.single("file"), (req, res) => {

    if (!req.file) {

        return res.status(400).json({
            success: false,
            message: "Please upload a file."
        });

    }

    res.json({
        success: true,
        fileName: req.file.originalname,
        savedAs: req.file.filename,
        size: req.file.size,
        message: "File uploaded successfully."
    });

});

app.get("/health", (req, res) => {

    res.json({
        success: true,
        status: "Velora Server Running"
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("================================");
    console.log("Velora AI Business Analyst");
    console.log("Server Started Successfully");
    console.log(`http://localhost:${PORT}`);
    console.log("================================");

});