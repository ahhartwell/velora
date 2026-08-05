const API = {

    baseURL: "/api",

    async analyze(data) {

        const response = await fetch(`${this.baseURL}/analyze`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                data
            })

        });

        if (!response.ok) {

            throw new Error("Analysis request failed.");

        }

        return await response.json();

    },

    async health() {

        const response = await fetch(`${this.baseURL}/health`);

        if (!response.ok) {

            throw new Error("Health check failed.");

        }

        return await response.json();

    }

};

window.API = API;