const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/");
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.use(express.static(__dirname));

app.post("/upload", upload.single("file"), (req, res) => {

    if(!req.file){

        return res.status(400).json({
            success:false,
            message:"No file uploaded."
        });

    }

    res.json({
        success:true,
        file:req.file.filename,
        original:req.file.originalname,
        message:"File uploaded successfully."
    });

});

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`Velora server is running on http://localhost:${PORT}`);

});