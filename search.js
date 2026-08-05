const Search = {

    find(items, keyword) {

        if (!Array.isArray(items) || !keyword) {

            return [];

        }

        const query = keyword.toLowerCase();

        return items.filter(item =>
            JSON.stringify(item)
                .toLowerCase()
                .includes(query)
        );

    },

    contains(text, keyword) {

        return String(text)
            .toLowerCase()
            .includes(String(keyword).toLowerCase());

    }

};

window.Search = Search;