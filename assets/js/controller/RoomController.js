export class RoomController {

    constructor(model, view) {
        this.model = model;
        this.view = view;


        // this.view.init();

        // 1. render all selects
        let properties = this.model.getProperties();
        this.view.renderSelects(properties);

        // 2. populate the first select
        let firstSelectID = properties[0];
        this.view.addOptions(firstSelectID, this.model.getOptions(firstSelectID));

        // 3. register one event handler for all select 'change' events
        this.view.selects.forEach((select) => {
            select.addEventListener('change', this.handleSelectChange);
        });

        // 4. register form submit handler
        this.view.roomForm.addEventListener('submit', this.handleFormSubmit);


    } // end of constructor

    handleSelectChange = (event) => {
        // 1. update model
        let select = event.target;
        this.model[select.id] = select.value;
        console.log(this.model);

       
        let nextSelect = select.nextElementSibling;

        while (nextSelect) {
            this.view.addOptions(nextSelect.id, this.model.getOptions(nextSelect.id));
            nextSelect = nextSelect.nextElementSibling;
        }

        this.view.renderRoom();
    } // end of method


    handleFormSubmit = (event) => {
        // prevent the default action of a form (prevent submitting it)
      //  event.preventDefault();
        this.model.persist();
    } // end of handle submit


} // end of class
