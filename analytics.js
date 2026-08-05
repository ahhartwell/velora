const Analytics = {

    events: [],

    track(event, data = {}) {

        this.events.push({

            event,

            data,

            time: new Date().toISOString()

        });

    },

    getEvents() {

        return this.events;

    },

    clear() {

        this.events = [];

    }

};

window.Analytics = Analytics;