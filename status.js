const Status = {

    app: "Velora",

    version: "1.0.0",

    state: "active",

    getStatus() {

        return {

            app: this.app,

            version: this.version,

            status: this.state,

            time: new Date().toISOString()

        };

    }

};


window.Status = Status;