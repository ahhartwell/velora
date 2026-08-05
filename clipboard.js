const Clipboard = {

    async copy(text) {

        try {

            await navigator.clipboard.writeText(text);

            return true;

        } catch (error) {

            console.error(error);

            return false;

        }

    },

    async paste() {

        try {

            return await navigator.clipboard.readText();

        } catch (error) {

            console.error(error);

            return "";

        }

    }

};

window.Clipboard = Clipboard;