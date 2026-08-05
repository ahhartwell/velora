const Downloader = {

    download(filename, content, type = "text/plain") {

        const blob = new Blob([content], {
            type
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;

        link.download = filename;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);

    },

    downloadJSON(filename, data) {

        this.download(
            filename,
            JSON.stringify(data, null, 2),
            "application/json"
        );

    }

};

window.Downloader = Downloader;