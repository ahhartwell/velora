function loadAnalysis() {

    const stored = localStorage.getItem("velora-analysis");

    if (!stored) {
        return;
    }

    const analysis = JSON.parse(stored);

    document.getElementById("summary").textContent =
        analysis.summary;

    document.getElementById("problems").innerHTML =
        analysis.problems
            .map(item => `<li>${item}</li>`)
            .join("");

    document.getElementById("opportunities").innerHTML =
        analysis.opportunities
            .map(item => `<li>${item}</li>`)
            .join("");

    document.getElementById("recommendations").innerHTML =
        analysis.recommendations
            .map(item => `<li>${item}</li>`)
            .join("");

}

window.onload = loadAnalysis;