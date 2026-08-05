const Notifications = {

    success(message) {

        alert(`✅ ${message}`);

    },

    error(message) {

        alert(`❌ ${message}`);

    },

    info(message) {

        alert(`ℹ️ ${message}`);

    },

    warning(message) {

        alert(`⚠️ ${message}`);

    }

};

window.Notifications = Notifications;