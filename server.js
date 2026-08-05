const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const XLSX = require("xlsx");
const pdf = require("pdf-parse");
const mammoth = require("mammoth");
const createPDF = require("./pdf-report");

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
        rows:0,
        columns:[],
        metrics:{}

    };


    const name = file.originalname.toLowerCase();



    if(name.endsWith(".xlsx")){


        const workbook = XLSX.readFile(file.path);

        const sheet =
        workbook.Sheets[workbook.SheetNames[0]];


        const data =
        XLSX.utils.sheet_to_json(sheet);


        result.rows = data.length;


        if(data.length){

            result.columns =
            Object.keys(data[0]);

        }


        let totalNumbers = 0;


        data.forEach(row=>{

            Object.values(row).forEach(value=>{

                if(typeof value === "number"){

                    totalNumbers += value;

                }

            });

        });


        result.metrics.totalNumbers =
        totalNumbers;


        result.summary =
        "Velora analyzed your Excel business data and generated insights.";

    }



    else if(name.endsWith(".pdf")){


        const buffer =
        fs.readFileSync(file.path);


        const data =
        await pdf(buffer);


        result.rows =
        data.text.length;


        result.summary =
        "Velora analyzed your PDF business report.";

    }



    else if(name.endsWith(".docx")){


        const data =
        await mammoth.extractRawText({

            path:file.path

        });


        result.rows =
        data.value.length;


        result.summary =
        "Velora analyzed your Word document.";

    }



    result.problems = [

        "Review business costs.",
        "Analyze performance.",
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



app.post("/create-pdf",(req,res)=>{


    try{


        const file =
        createPDF(req.body);


        res.json({

            success:true,

            file:"/"+file

        });


    }catch(error){


        res.json({

            success:false,

            message:"PDF generation failed"

        });


    }


});



app.use("/Velora-Business-Report.pdf",
express.static(__dirname));



app.get("/",(req,res)=>{

    res.sendFile(
        path.join(__dirname,"index.html")
    );

});



const PORT = 3000;


app.listen(PORT,()=>{

    console.log("--------------------------------");
    console.log("Velora AI Business Analyst");
    console.log("Server running:");
    console.log("http://localhost:3000");
    console.log("--------------------------------");

});