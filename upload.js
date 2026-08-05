function getBusinessData() {

    const input = document.getElementById("businessData");

    if (!input) {
        return "";
    }

    return input.value.trim();

}


async function analyzeBusiness() {

    const data = getBusinessData();

    if (!data) {

        alert("Please enter your business data.");

        return;

    }

    try {

        const response = await fetch("/api/analyze", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                data
            })

        });

        const result = await response.json();

        localStorage.setItem(
            "velora-analysis",
            JSON.stringify(result)
        );

        window.location.href = "result.html";

    } catch (error) {

        console.error(error);

        alert("Analysis failed.");

    }

}