const Network = {

    isOnline() {

        return navigator.onLine;

    },

    getConnection() {

        return navigator.connection || null;

    },

    getStatus() {

        return {

            online: navigator.onLine,

            connection: navigator.connection
                ? navigator.connection.effectiveType
                : "unknown"

        };

    }

};

window.Network = Network;