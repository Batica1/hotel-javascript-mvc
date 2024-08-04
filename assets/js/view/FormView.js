

export class FormView{
    constructor() {
        this.inputs = null;
        this.form = document.querySelector('#form-room-name');
    }

   
    createInputs(dataObject) {
        for (let property in dataObject) {
            document.querySelector('fieldset').insertAdjacentHTML('beforeend',
                    
            `<p class="formParagraph">${property}<input ${this.isDisable(dataObject[property])} name='${property}' value='${dataObject[property]}' type='text' /></p>
            <div class="error ${property}Error"></div>
            `);
        
        
                }

        this.inputs = document.querySelectorAll('fieldset input');
    }//end of create inputs

    displayError(input, error) {
        let errorBox = document.getElementsByClassName(`${input.name}Error`);
        if(error) {
            errorBox[0].innerHTML = error;
        } else {
            errorBox[0].innerHTML = "";
        }
    }//


    isDisable( disable){
        return disable != "" ? "disabled" : ""; 
    }//end of void




}//