const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const XLSX = require("xlsx");
const pdf = require("pdf-parse");
const mammoth = require("mammoth");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

if(!fs.existsSync("uploads")){
    fs.mkdirSync("uploads");
}


const storage = multer.diskStorage({

    destination:function(req,file,cb){

        cb(null,"uploads/");

    },

    filename:function(req,file,cb){

        cb(null,Date.now()+"-"+file.originalname);

    }

});


const upload = multer({
    storage:storage
});


app.use(express.static(__dirname));


async function analyzeFile(file){


    let result = {

        summary:"",
        problems:[],
        opportunities:[],
        rows:0

    };


    const name = file.originalname.toLowerCase();


    if(name.endsWith(".xlsx")){


        const workbook = XLSX.readFile(file.path);

        const sheet = workbook.Sheets[workbook.SheetNames[0]];

        const data = XLSX.utils.sheet_to_json(sheet);


        result.rows = data.length;

        result.summary =
        "Velora analyzed Excel business data successfully.";


    }


    else if(name.endsWith(".pdf")){


        const buffer = fs.readFileSync(file.path);

        const data = await pdf(buffer);


        result.summary =
        "Velora analyzed PDF business report successfully.";


        result.rows =
        data.text.length;


    }


    else if(name.endsWith(".docx")){


        const data = await mammoth.extractRawText({

            path:file.path

        });


        result.summary =
        "Velora analyzed Word document successfully.";


        result.rows =
        data.value.length;


    }


    else{


        result.summary =
        "File uploaded successfully. Format analysis coming soon.";


    }


    result.problems = [

        "Review business costs.",
        "Analyze sales performance.",
        "Improve decision making."

    ];


    result.opportunities = [

        "Increase profitable products.",
        "Improve customer growth.",
        "Optimize expenses."

    ];


    return result;

}



app.post("/upload",upload.single("file"),async(req,res)=>{


    if(!req.file){

        return res.status(400).json({

            success:false,
            message:"No file uploaded."

        });

    }


    const analysis =
    await analyzeFile(req.file);



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