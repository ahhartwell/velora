document.addEventListener("DOMContentLoaded", () => {

    const loadingText = document.getElementById("loadingText");

    const messages = [
        "Reading your business data...",
        "Finding key business insights...",
        "Detecting problems...",
        "Discovering opportunities...",
        "Preparing recommendations...",
        "Generating your AI report..."
    ];

    let index = 0;

    const timer = setInterval(() => {

        if (loadingText) {
            loadingText.textContent = messages[index];
        }

        index++;

        if (index >= messages.length) {
            clearInterval(timer);

            window.location.href = "result.html";
        }

    }, 1500);

});