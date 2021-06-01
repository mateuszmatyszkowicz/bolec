class HomePageObjects {
    /**
     *
     */
    constructor() {
        this.objectsMap = new Map();

        this.inputBox = '#search_query_top';
        this.url = 'https://zaparkowani.com'

    }

    /**
     *
     * @returns {this}
     */
    setObjects() {
        return this.objectsMap
            .set('Home Url', this.url)
            .set('Input Box', this.inputBox)
    }
}

export default new HomePageObjects();
