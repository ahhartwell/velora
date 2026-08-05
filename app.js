const formData = new FormData();

const fileInput = document.getElementById("file");

async function analyze(){

    const file = fileInput.files[0];

    if(!file){

        alert("Please upload a file first");

        return;

    }

    formData.append("file", file);

    localStorage.setItem("fileName", file.name);

    try{

        const response = await fetch("/upload",{

            method:"POST",

            body:formData

        });

        const data = await response.json();

        if(data.success){

            window.location.href="loading.html";

        }else{

            alert(data.message);

        }

    }catch(error){

        alert("Server connection failed.");

    }

}