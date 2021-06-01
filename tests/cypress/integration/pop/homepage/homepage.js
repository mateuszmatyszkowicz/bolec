class HomePageObjects {
    /**
     *
     */
    constructor() {
        this.objectsMap = new Map();
        this.url = 'https://zaparkowani.com/'

    }

    /**
     *
     * @returns {this}
     */
    setObjects() {
        return this.objectsMap
            .set('Home Url', this.url)
    }
}

export default new HomePageObjects();
