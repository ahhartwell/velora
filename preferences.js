const Preferences = {

    set(key, value) {

        localStorage.setItem(
            `velora-${key}`,
            JSON.stringify(value)
        );

    },

    get(key, defaultValue = null) {

        const value = localStorage.getItem(`velora-${key}`);

        if (!value) {

            return defaultValue;

        }

        return JSON.parse(value);

    },

    remove(key) {

        localStorage.removeItem(`velora-${key}`);

    },

    clear() {

        Object.keys(localStorage)
            .filter(key => key.startsWith("velora-"))
            .forEach(key => localStorage.removeItem(key));

    }

};

window.Preferences = Preferences;