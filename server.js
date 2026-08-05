const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const XLSX = require("xlsx");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
}

const storage = multer.diskStorage({

    destination: function(req, file, cb){

        cb(null, "uploads/");

    },

    filename: function(req, file, cb){

        cb(null, Date.now() + "-" + file.originalname);

    }

});

const upload = multer({
    storage: storage
});


app.use(express.static(__dirname));


app.post("/upload", upload.single("file"), (req,res)=>{

    if(!req.file){

        return res.status(400).json({

            success:false,
            message:"No file uploaded."

        });

    }


    let analysis = {

        summary:"Velora analyzed your business file.",

        problems:[
            "Review business costs.",
            "Analyze sales performance.",
            "Improve decision making."
        ],

        opportunities:[
            "Increase profitable products.",
            "Improve customer growth.",
            "Optimize expenses."
        ]

    };


    if(req.file.originalname.endsWith(".xlsx")){

        try{

            const workbook = XLSX.readFile(req.file.path);

            const sheet = workbook.Sheets[workbook.SheetNames[0]];

            const data = XLSX.utils.sheet_to_json(sheet);

            analysis.rows = data.length;

        }catch(error){

            analysis.rows = 0;

        }

    }


    res.json({

        success:true,

        fileName:req.file.originalname,

        size:req.file.size,

        analysis:analysis

    });


});


app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname,"index.html"));

});


const PORT = 3000;


app.listen(PORT,()=>{

    console.log("Velora server running on port 3000");

});