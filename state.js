const State = {

    data: {},

    set(key, value) {

        this.data[key] = value;

    },

    get(key) {

        return this.data[key];

    },

    has(key) {

        return Object.prototype.hasOwnProperty.call(
            this.data,
            key
        );

    },

    remove(key) {

        delete this.data[key];

    },

    clear() {

        this.data = {};

    }

};

window.State = State;