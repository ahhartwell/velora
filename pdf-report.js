const fs = require("fs");
const PDFDocument = require("pdfkit");


function createPDF(report){

    const doc = new PDFDocument();


    const fileName =
    "Velora-Business-Report.pdf";


    doc.pipe(
        fs.createWriteStream(fileName)
    );


    doc.fontSize(22)
    .text("Velora AI Business Report");


    doc.moveDown();


    doc.fontSize(14)
    .text(
        "File: " + report.fileName
    );


    doc.moveDown();


    doc.text(
        "Summary:"
    );


    doc.text(
        report.analysis.summary
    );


    doc.moveDown();


    doc.text(
        "Problems:"
    );


    report.analysis.problems.forEach(item=>{

        doc.text("- " + item);

    });


    doc.moveDown();


    doc.text(
        "Opportunities:"
    );


    report.analysis.opportunities.forEach(item=>{

        doc.text("- " + item);

    });


    doc.end();


    return fileName;

}


module.exports = createPDF;