class FooterObjects {
    /**
     *
     */
    constructor() {
        this.objectsMap = new Map();

        this.footer = "#footer";
        this.footerContent = "#footer_content";
        this.footerLogoContainer = "#footer_logo_container";
        this.footerLogoImage = "#footer_logo_image";
        this.footerMailTo = "#footer_hello_mail";
        this.footerCopyrightText = "#footer_copyright_text";
        this.footerSocialColumn = "#footer_social_column";
        this.footerSocialsContainer = "#footer_socials_container";
        this.footerSocialsFacebookLink = "#footer_socials_facebook_link";
        this.footerSocialsFacebookIcon = "#footer_socials_facebook_icon";
        this.footerSocialsTwitterLink = "#footer_socials_twitter_link";
        this.footerSocialsTwitterIcon = "#footer_socials_twitter_icon";
        this.footerSocialsYouTubeLink = "#footer_socials_youtube_link";
        this.footerSocialsYouTubeIcon = "#footer_socials_youtube_icon";
        this.footerDecoratorBlobContainer = "#footer_decorator_blob_container";
        this.footerFirstDecoratorBlob = "#footer_first_decorator_blob";
        this.footerSecondDecoratorBlob = "#footer_second_decorator_blob";

    }

    /**
     *
     * @returns {this}
     */
    setObjects() {
        return this.objectsMap
            .set('Footer', this.footer)
            .set('Footer Content', this.footerContent)
            .set('Footer Logo Container', this.footerLogoContainer)
            .set('Footer Logo Image', this.footerLogoImage)
            .set('Footer Mail To', this.footerMailTo)
            .set('Footer Copyright Text', this.footerCopyrightText)
            .set('Footer Socials Column', this.footerSocialColumn)
            .set('Footer Socials Container', this.footerSocialsContainer)
            .set('Footer Socials Facebook Link', this.footerSocialsFacebookLink)
            .set('Footer Socials Facebook Icon', this.footerSocialsFacebookIcon)
            .set('Footer Socials Twitter Link', this.footerSocialsTwitterLink)
            .set('Footer Socials Twitter Icon', this.footerSocialsTwitterIcon)
            .set('Footer Socials YouTube Link', this.footerSocialsYouTubeLink)
            .set('Footer Socials YouTube Icon', this.footerSocialsYouTubeIcon)
            .set('Footer Decorator Blob Container', this.footerDecoratorBlobContainer)
            .set('Footer First Decorator Blob', this.footerFirstDecoratorBlob)
            .set('Footer Second Decorator Blob', this.footerSecondDecoratorBlob)
    }
}

export default new FooterObjects();
