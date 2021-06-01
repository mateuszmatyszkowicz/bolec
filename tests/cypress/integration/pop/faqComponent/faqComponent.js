class FaqObjects {
    /**
     *
     */
    constructor() {
        this.objectsMap = new Map();

        this.faq = "#faq";
        this.faqContentPadding = "#faq_content_padding";
        this.faqContentColumn = "#faq_content_column";
        this.faqHeaderContent = "#faq_header_content";
        this.faqHeader = "#faq_header";
        this.faqSubHeader = "#faq_subheader";
        this.faqDescription = "#faq_description";
        this.faqQuestionContainer = "#faq_question_container";
        this.faqQuestionSingleContainer = "#faq_single_container";
        this.faqQuestion = "#faq_question";
        this.faqQuestionText = "#faq_question_text";
        this.faqQuestionToggleIcon = "#faq_question_toggle_icon";
        this.faqQuestionAnswer = "#faq_question_answer";
        this.faqDecoratorBlobContainer = "#faq_decorator_blob_container";
        this.faqFirstDecoratorBlob = "#faq_first_decorator_blob";
        this.faqSecondDecoratorBlob = "#faq_second_decorator_blob";

    }

    /**
     *
     * @returns {this}
     */
    setObjects() {
        return this.objectsMap
            .set('FAQ', this.faq)
            .set('FAQ Content Padding', this.faqContentPadding)
            .set('FAQ Content Column', this.faqContentColumn)
            .set('FAQ Header Content', this.faqHeaderContent)
            .set('FAQ Header', this.faqHeader)
            .set('FAQ Sub Header', this.faqSubHeader)
            .set('FAQ Description', this.faqDescription)
            .set('FAQ Question Container', this.faqQuestionContainer)
            .set('FAQ Question Single Container', this.faqQuestionSingleContainer)
            .set('FAQ Question', this.faqQuestion)
            .set('FAQ Question Text', this.faqQuestionText)
            .set('FAQ Question Toggle Icon', this.faqQuestionToggleIcon)
            .set('FAQ Question Answer', this.faqQuestionAnswer)
            .set('FAQ Decorator Blob Container', this.faqDecoratorBlobContainer)
            .set('FAQ First Decorator Blob', this.faqFirstDecoratorBlob)
            .set('FAQ Second Decorator Blob', this.faqSecondDecoratorBlob)
    }
}

export default new FaqObjects();
