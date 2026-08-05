const Session = {

    startTime: Date.now(),

    getStartTime() {

        return this.startTime;

    },

    getDuration() {

        return Date.now() - this.startTime;

    },

    reset() {

        this.startTime = Date.now();

    }

};

window.Session = Session;