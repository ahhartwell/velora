const Theme = {

    current: "light",

    set(theme) {

        this.current = theme;

        document.body.setAttribute("data-theme", theme);

        localStorage.setItem("velora-theme", theme);

    },

    load() {

        const saved = localStorage.getItem("velora-theme");

        if (saved) {

            this.set(saved);

        }

    },

    toggle() {

        this.set(this.current === "light" ? "dark" : "light");

    }

};

window.Theme = Theme;

document.addEventListener("DOMContentLoaded", () => {

    Theme.load();

});