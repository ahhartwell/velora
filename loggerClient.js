const LoggerClient = {

    logs: [],

    info(message) {

        this.logs.push({
            level: "info",
            message,
            time: new Date().toISOString()
        });

        console.log(message);

    },

    warn(message) {

        this.logs.push({
            level: "warn",
            message,
            time: new Date().toISOString()
        });

        console.warn(message);

    },

    error(message) {

        this.logs.push({
            level: "error",
            message,
            time: new Date().toISOString()
        });

        console.error(message);

    },

    getLogs() {

        return this.logs;

    }

};

window.LoggerClient = LoggerClient;