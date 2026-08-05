const Router = {

    go(page) {

        window.location.href = page;

    },

    reload() {

        window.location.reload();

    },

    back() {

        window.history.back();

    },

    forward() {

        window.history.forward();

    },

    current() {

        return window.location.pathname;

    }

};

window.Router = Router;