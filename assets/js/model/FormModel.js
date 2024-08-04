export class FormModel {

    constructor() {

        this.type = "";
        this.wallColor = "";
        this.furnitureColor = "";

        this.firstname = "";
        this.lastname = "";
   
        this.email = "";
        this.card = "";


        this.init();
    } // end of constructor


    init() {
        let room = JSON.parse(localStorage.getItem('room'));
        for (let property in room) {
            this[property] = room[property];
        }
    } // end of init

    getInputData() {
        let inputsString = JSON.stringify(this);

        return JSON.parse(inputsString);
    }

    persist() {
        localStorage.setItem('room', JSON.stringify(this));
    }

    getLength() {
        let counter = 0;
        for (const item in this) {
            counter++;
        }
        return counter;
    }

} // end of class
