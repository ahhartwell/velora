document.addEventListener("DOMContentLoaded", () => {

    const analysis = Storage.load();

    if (!analysis) {

        Notifications.warning("No analysis found.");

        Router.go("index.html");

        return;

    }

    document.getElementById("summary").textContent =
        analysis.summary || "";

    document.getElementById("problems").innerHTML =
        (analysis.problems || [])
            .map(item => `<li>${item}</li>`)
            .join("");

    document.getElementById("opportunities").innerHTML =
        (analysis.opportunities || [])
            .map(item => `<li>${item}</li>`)
            .join("");

    document.getElementById("recommendations").innerHTML =
        (analysis.recommendations || [])
            .map(item => `<li>${item}</li>`)
            .join("");

    Analytics.track("result_viewed");

});