const Cache = {

    data: new Map(),

    set(key, value) {

        this.data.set(key, value);

    },

    get(key) {

        return this.data.get(key);

    },

    has(key) {

        return this.data.has(key);

    },

    remove(key) {

        this.data.delete(key);

    },

    clear() {

        this.data.clear();

    }

};

window.Cache = Cache;