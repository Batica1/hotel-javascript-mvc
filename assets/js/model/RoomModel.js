
import {selectData} from './selectData.js';

export class RoomModel {


    static store = selectData; // external resource


    constructor() {
        this.type = "undefined";
        this.wallColor = "undefined";
        this.furnitureColor = "undefined";
    } // end of constructor

    getProperties() {
        let properties = [];
        for (let property in this) {
            properties.push(property);
        }
        return properties;
    } // end of properties


    getOptions(selectID) {
        // 1. extract the data from the external resource.
        let data; // a JS object
        switch (selectID) {
            case 'type': 
            data = RoomModel.store;
                break;
            case 'wallColor': 
            data = RoomModel.store[this.type];
                break;
            case 'furnitureColor': 
            data = RoomModel.store[this.type][this.wallColor];
                break;
        }

        // 2. iterate over the extratced JS object properties to prepare options
        let options = [];
        for (let objectProperty in data) {
            options.push(objectProperty);
        }
        return options;
    }

    persist() {
        localStorage.setItem('room', JSON.stringify(this));

        //Let's test if this is stored. Delete this from your project:
        let room = localStorage.getItem('room');
        console.log(room === null ? 'No room found in local storage' : JSON.parse(room));
        console.log(room === null ? 'No room found in local storage' : room);
    }


} // end of class
