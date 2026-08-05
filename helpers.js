const Helpers = {

    formatDate(date = new Date()) {

        return date.toLocaleString();

    },

    isEmpty(value) {

        return value === null ||
               value === undefined ||
               value === "";

    },

    download(filename, content) {

        const blob = new Blob([content], {
            type: "text/plain"
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = filename;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);

    }

};

window.Helpers = Helpers;