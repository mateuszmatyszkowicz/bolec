class HeroObjects {
    /**
     *
     */
    constructor() {
        this.objectsMap = new Map();

        this.hero = "#hero";
        this.heroTwoColumns = "#hero_two_columns";
        this.heroLeftColumn = "#hero_left_column";
        this.heroActions = "#hero_actions";
        this.heroRightColumn = "#hero_right_column";
        this.heroHeader = "#hero_header";
        this.heroParagraph = "#hero_paragraph";
        this.heroEmailInput = "#hero_email_input";
        this.heroEmailButton = "#hero_email_button";
        this.heroIllustrationContainer = "#hero_illustration_container";
        this.heroIllustrationImage = "#hero_illustration_image";
        this.heroFirstDecoratorBlob = "#hero_first_decorator_blob";
    }

    /**
     *
     * @returns {this}
     */
    setObjects() {
        return this.objectsMap
            .set('Hero', this.hero)
            .set('Hero Two Columns', this.heroTwoColumns)
            .set('Hero Left Column', this.heroLeftColumn)
            .set('Hero Actions', this.heroActions)
            .set('Hero Right Column', this.heroRightColumn)
            .set('Hero Header', this.heroHeader)
            .set('Hero Paragraph', this.heroParagraph)
            .set('Hero Email Input', this.heroEmailInput)
            .set('Hero Email Button', this.heroEmailButton)
            .set('Hero Illustration Container', this.heroIllustrationContainer)
            .set('Hero Illustration Image', this.heroIllustrationImage)
            .set('Hero First Decorator Blob', this.heroFirstDecoratorBlob)
    }
}

export default new HeroObjects();
