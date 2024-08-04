export class RoomView {

    constructor() {
        this.roomForm = document.querySelector(".form-room");
        this.selectsDiv = document.querySelector("#div-selects");

        this.roomDiv = document.querySelector("#div-room");
            
        this.selects = null;
    
    }//end of constructor


    renderSelects(selectIDs) {
        selectIDs.forEach((name) => {
            let select = document.createElement('select');
            select.setAttribute("id", name);
            select.options.add(new Option(` -- Select a ${name} -- `, 'undefined' ));
            this.selectsDiv.appendChild(select);
        });

        this.selects = this.selectsDiv.querySelectorAll('select');
    }


    addOptions(selectID, options) {
        let select = this.selectsDiv.querySelector(`#${selectID}`);
        select.length = 1;

        let nextSelect = select.nextElementSibling;
        while (nextSelect) {
            nextSelect.length = 1;
            nextSelect = nextSelect.nextElementSibling;
        }

        options.forEach((option) => {
            select.options.add(new Option(option, option));
        });
    }

    
 

    /**
     * Renders the image based on the model data.
     * 
     * ASK
     * type, colorWall, colorFurniture
     */
    renderRoom() {
        let imgSrc = 'assets/img/rooms/';

        this.selects.forEach((select) => {
            imgSrc += `${select.value}_`;
        });
        imgSrc = imgSrc.slice(0, -1) + '.jpg'; //remove the last character '-'.

        this.roomDiv.querySelector('img').src = imgSrc;

    } // end of render room


} // end of class


// implement animation at the end

