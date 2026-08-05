const DOM = {

    get(id) {

        return document.getElementById(id);

    },

    query(selector) {

        return document.querySelector(selector);

    },

    queryAll(selector) {

        return document.querySelectorAll(selector);

    },

    create(tag) {

        return document.createElement(tag);

    },

    remove(element) {

        if (element && element.parentNode) {

            element.parentNode.removeChild(element);

        }

    }

};

window.DOM = DOM;