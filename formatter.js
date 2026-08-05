const Formatter = {

    capitalize(text) {

        if (!text) {
            return "";
        }

        return text.charAt(0).toUpperCase() + text.slice(1);

    },

    truncate(text, length = 100) {

        if (!text) {
            return "";
        }

        if (text.length <= length) {
            return text;
        }

        return text.substring(0, length) + "...";

    },

    upper(text) {

        return String(text).toUpperCase();

    },

    lower(text) {

        return String(text).toLowerCase();

    }

};

window.Formatter = Formatter;