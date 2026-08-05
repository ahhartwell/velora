const fileInput = document.getElementById("file");

function showName(){

    const file = fileInput.files[0];

    if(file){

        document.getElementById("fileName").textContent = file.name;

    }else{

        document.getElementById("fileName").textContent = "No file selected";

    }

}

async function analyze(){

    const file = fileInput.files[0];

    if(!file){

        alert("Please upload a file first");

        return;

    }

    const formData = new FormData();

    formData.append("file", file);

    localStorage.setItem("fileName", file.name);

    try{

        const response = await fetch("/upload",{

            method:"POST",

            body:formData

        });

        const data = await response.json();

        if(data.success){

            localStorage.setItem("uploadedFile", JSON.stringify(data));

            window.location.href = "loading.html";

        }else{

            alert(data.message);

        }

    }catch(error){

        alert("Unable to connect to the Velora server.");

    }

}