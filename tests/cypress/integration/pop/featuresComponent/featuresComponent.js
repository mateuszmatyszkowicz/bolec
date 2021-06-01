class FeaturesObjects {
    /**
     *
     */
    constructor() {
        this.objectsMap = new Map();

        this.features = "#features";
        this.featuresContainer = "#features_container";
        this.featuresHeader = "#features_header";
        this.featuresSubheader = "#features_subheader";
        this.featuresDescription = "#features_description";
        this.featuresCard = "#features_card";
        this.featuresCardImageContainer = "#features_card_image_container";
        this.featuresCardImage = "#features_card_image";
        this.featuresCardTextContainer = "#features_card_text_container";
        this.featuresCardTextTitle = "#features_card_text_title";
        this.featuresCardTextDescription = "#features_card_text_description"

    }

    /**
     *
     * @returns {this}
     */
    setObjects() {
        return this.objectsMap
            .set('Features', this.features)
            .set('Features Container', this.featuresContainer)
            .set('Features Header', this.featuresHeader)
            .set('Features Sub Header', this.featuresSubheader)
            .set('Features Description', this.featuresDescription)
            .set('Features Card', this.featuresCard)
            .set('Features Card Image Container', this.featuresCardImageContainer)
            .set('Features Card Image', this.featuresCardImage)
            .set('Features Card Text Container', this.featuresCardTextContainer)
            .set('Features Card Text Title', this.featuresCardTextTitle)
            .set('Features Card Text Description', this.featuresCardTextDescription)
    }
}

export default new FeaturesObjects();
