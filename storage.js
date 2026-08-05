const Storage = {

    key: "velora-analysis",

    save(data) {

        localStorage.setItem(
            this.key,
            JSON.stringify(data)
        );

    },

    load() {

        const data = localStorage.getItem(this.key);

        if (!data) {
            return null;
        }

        return JSON.parse(data);

    },

    clear() {

        localStorage.removeItem(this.key);

    }

};

window.Storage = Storage;