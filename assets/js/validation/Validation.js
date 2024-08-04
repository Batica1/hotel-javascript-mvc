export class Valdation {

    constructor() {
        this.error = '';
    }

    getError() {
        return this.error;
    }

    validate(input, value, regex) {
        if (value === '') {
            this.error = `${input} is required.`;
            return false;
        }
        if (value.trim().length === 0) {
            this.error = `${input} must not be empty.`;
            return false;
        }
        if (!regex.test(value)) {
            this.error = `Format for ${input} is not correct.`;
            return false;
        }

        this.error = '';
        return true;
    } // end of validation

} // end of validation


