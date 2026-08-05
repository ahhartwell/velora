function escapeHTML(text) {

    if (text === null || text === undefined) {
        return "";
    }

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

}


function createList(items) {

    if (!Array.isArray(items)) {
        return "";
    }

    return items
        .map(item => `<li>${escapeHTML(item)}</li>`)
        .join("");

}


function saveAnalysis(data) {

    localStorage.setItem(
        "velora-analysis",
        JSON.stringify(data)
    );

}


function loadStoredAnalysis() {

    const stored = localStorage.getItem("velora-analysis");

    if (!stored) {
        return null;
    }

    return JSON.parse(stored);

}