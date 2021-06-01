class KeyboardKeysObjects {
    /**
     *
     */
    constructor() {
        this.objectsMap = new Map();

        this.enterKey = '{enter}';
        this.backspaceKey = '{backspace}';
        this.deleteKey = '{del}';
        this.downArrowKey = '{downarrow}';
        this.endKey = '{end}';
        this.escKey = '{esc}';
        this.homeKey = '{home}';
        this.insertKey = '{insert}';
        this.leftArrowKey = '{leftarrow}';
        this.pageDownKey = '{pagedown}';
        this.pageUpKey = '{pageup}';
        this.rightArrowKey = '{rightarrow}';
        this.upArrowKey = '{uparrow}';
        this.altKey = '{alt}';
        this.ctrlKey = '{ctrl}';
        this.shiftKey = '{shift}';

    }

    /**
     *
     * @returns {*}
     */
    setObjects() {
        return this.objectsMap
            .set('ENTER', this.enterKey)
            .set('BACKSPACE', this.backspaceKey)
            .set('DELETE', this.deleteKey)
            .set('DOWN ARROW', this.downArrowKey)
            .set('END', this.endKey)
            .set('ESC', this.escKey)
            .set('HOME', this.homeKey)
            .set('INSERT', this.insertKey)
            .set('LEFT ARROW', this.leftArrowKey)
            .set('PAGE DOWN', this.pageDownKey)
            .set('PAGE UP', this.pageUpKey)
            .set('RIGHT ARROW', this.rightArrowKey)
            .set('UP ARROW', this.upArrowKey)
            .set('ALT', this.altKey)
            .set('CTRL', this.ctrlKey)
            .set('SHIFT', this.shiftKey)
    }
}

export default new KeyboardKeysObjects();
