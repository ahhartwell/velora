const Loader = {

    show() {

        const element = document.getElementById("loader");

        if (element) {

            element.style.display = "block";

        }

    },

    hide() {

        const element = document.getElementById("loader");

        if (element) {

            element.style.display = "none";

        }

    },

    toggle() {

        const element = document.getElementById("loader");

        if (!element) {

            return;

        }

        element.style.display =
            element.style.display === "none"
                ? "block"
                : "none";

    }

};

window.Loader = Loader;