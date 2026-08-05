const History = {

    items: [],

    add(record) {

        this.items.push({

            ...record,

            createdAt: new Date().toISOString()

        });

    },

    all() {

        return this.items;

    },

    latest() {

        return this.items[this.items.length - 1] || null;

    },

    clear() {

        this.items = [];

    }

};

window.History = History;