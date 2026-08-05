function checkServerHealth() {

    return fetch("/api/health")
        .then(response => response.json())
        .then(data => {

            console.log("Velora Status:", data);

            return data;

        })
        .catch(error => {

            console.error("Health check failed:", error);

            return null;

        });

}

window.checkServerHealth = checkServerHealth;