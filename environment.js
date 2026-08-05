const Environment = {

    mode: "development",

    api: "/api",

    isDevelopment() {

        return this.mode === "development";

    },

    getAPI() {

        return this.api;

    }

};


window.Environment = Environment;