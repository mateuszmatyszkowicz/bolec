class HomePageObjects {
    /**
     *
     */
    constructor() {
        this.objectsMap = new Map();
        this.url = 'http://localhost:3000/'

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
