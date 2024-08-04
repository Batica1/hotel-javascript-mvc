import {Valdation} from "../validation/Validation.js";
import {regexData} from "../validation/regexData.js";

export class FormController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.validator = new Valdation();
        this.view.createInputs(this.model.getInputData());
        // this.index = 0;

        // register one event handler for all input 'change' events
        this.view.inputs.forEach((input) => {
            input.addEventListener('change', this.handleInputChange);
            // this.index = index;
        });

        // register form submit handler
        this.view.form.addEventListener('submit', this.handleFormSubmit);

        this.validatedInputs = [];
        for (let x = 0; x < this.model.getLength(); x++) {
            this.validatedInputs[x] = false;
        }
    }

    handleInputChange = (event) => { // update model
        let input = event.target;
        this.model[input.name] = input.value;

        let isValid = this.validator.validate(input.name, input.value, regexData[input.name]);
        this.view.displayError(input, this.validator.getError());

        // this.validatedInputs[this.index] = isValid;
    }

    // showerror(input, error) { if(error) ${input}Error.innerhtml = error else '' }


    handleFormSubmit = (event) => {
        event.preventDefault();

        // if (this.validatedInputs.every(Boolean)) {
        this.model.persist();
        // } else {
            // console.log("Fill all the fields.");
        // }
    }
}


// FORM VALIDATOR
// constructor { error: '' }
// validate() {
//    if(regexExpression)
// return null : error = "incorrect value for username"
// )}

/*
    FIRSTNAME: /^[a-z ,.'-]+$/i,
    LASTNAME: /^[a-z ,.'-]+$/i,
    PHONENUMBER: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    CREDITCARDNUMBER: /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b$/im

    */
