import {RoomModel} from './model/RoomModel.js';
import {RoomView} from './view/RoomView.js';
import {RoomController} from './controller/RoomController.js';


import {FormView} from './view/FormView.js';
import {FormController} from './controller/FormController.js';
import {FormModel} from './model/FormModel.js';

// const app = new RoomController( new RoomModel() , new RoomView());

class App {
    constructor() {
       

        const url = window.location.href; // e.g. http://localhost:8383/form.html
        const result = url.match(/[a-z]*.html/); 
        let page = "";

        if(result){
             page = result[0]; 
        }else{
            page = "index.html";
        }

        switch (page) {
            case 'index.html':
                new RoomController(new RoomModel(), new RoomView());
                break;
            case 'form.html':
                new FormController(new FormModel(), new FormView());
                break;
        }
    }
}

const app = new App();


