const Time = {

    now() {

        return new Date();

    },

    timestamp() {

        return Date.now();

    },

    iso() {

        return new Date().toISOString();

    },

    locale() {

        return new Date().toLocaleString();

    }

};

window.Time = Time;