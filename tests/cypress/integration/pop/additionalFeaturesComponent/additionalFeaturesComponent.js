class AdditionalFeaturesObjects {
    /**
     *
     */
    constructor() {
        this.objectsMap = new Map();

        this.additionalFeatures = "#additional_features";
        this.additionalFeaturesTwoColumns = "#additional_features_two_columns";
        this.additionalFeaturesHeader = "#additional_features_header";
        this.additionalFeaturesSubheader = "#additional_features_subheader";
        this.additionalFeaturesSteps = "#additional_features_steps";
        this.additionalFeaturesStep = "#additional_features_step";
        this.additionalFeaturesStepNumber = "#additional_features_step_number";
        this.additionalFeaturesStepText = "#additional_features_step_text";
        this.additionalFeaturesStepHeader = "#additional_features_step_header";
        this.additionalFeaturesStepDescription = "#additional_features_step_description";
        this.additionalFeaturesTextContent = "#additional_features_text_content";
        this.additionalFeaturesTextColumn = "#additional_features_text_column";
        this.additionalFeaturesImage = "#additional_features_image";
        this.additionalFeaturesImageColumn = "#additional_features_image_column";

    }

    /**
     *
     * @returns {this}
     */
    setObjects() {
        return this.objectsMap
            .set('Additional Features', this.additionalFeatures)
            .set('Additional Features Two Columns', this.additionalFeaturesTwoColumns)
            .set('Additional Features Header', this.additionalFeaturesHeader)
            .set('Additional Features Sub Header', this.additionalFeaturesSubheader)
            .set('Additional Features Steps', this.additionalFeaturesSteps)
            .set('Additional Features Step', this.additionalFeaturesStep)
            .set('Additional Features Step Number', this.additionalFeaturesStepNumber)
            .set('Additional Features Step Text', this.additionalFeaturesStepText)
            .set('Additional Features Step Header', this.additionalFeaturesStepHeader)
            .set('Additional Features Step Description', this.additionalFeaturesStepDescription)
            .set('Additional Features Text Content', this.additionalFeaturesTextContent)
            .set('Additional Features Text Column', this.additionalFeaturesTextColumn)
            .set('Additional Features Image', this.additionalFeaturesImage)
            .set('Additional Features Image Column', this.additionalFeaturesImageColumn)
    }
}

export default new AdditionalFeaturesObjects();
