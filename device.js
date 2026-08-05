const Device = {

    getScreenWidth() {

        return window.innerWidth;

    },

    getScreenHeight() {

        return window.innerHeight;

    },

    getPixelRatio() {

        return window.devicePixelRatio;

    },

    isMobile() {

        return window.innerWidth <= 768;

    }

};

window.Device = Device;