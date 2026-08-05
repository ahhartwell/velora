const Browser = {

    getName() {

        return navigator.userAgent;

    },

    getLanguage() {

        return navigator.language;

    },

    isOnline() {

        return navigator.onLine;

    },

    getPlatform() {

        return navigator.platform;

    }

};

window.Browser = Browser;