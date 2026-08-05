const config = {

    appName: "Velora",

    version: "1.0.0",

    apiBase: "/api",

    endpoints: {

        analyze: "/analyze"

    },

    storage: {

        analysis: "velora-analysis"

    }

};


Object.freeze(config);

module.exports = config;