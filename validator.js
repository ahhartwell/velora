const Validator = {

    isEmpty(value) {

        return value === null ||
               value === undefined ||
               String(value).trim() === "";

    },

    isArray(value) {

        return Array.isArray(value);

    },

    isObject(value) {

        return value !== null &&
               typeof value === "object" &&
               !Array.isArray(value);

    }

};

window.Validator = Validator;