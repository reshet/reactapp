//import Ajax from 'utils/Ajax';
import Constants     from 'utils/Constants';
import AppDispatcher from 'utils/flux/AppDispatcher';

class PageActions {

    getData() {
        //let URL = this.DATA_URL;

        AppDispatcher.handleAction({
            actionType: this.EVENTS.LOADING
        });

        const data = { "todos": ["item 1", "item 2", "item 3"] };

        AppDispatcher.handleAction({
            actionType: this.EVENTS.LOADED,
            data
        });

        //Ajax.get(URL).then(data => {
        //});
    }

    reset() {
        AppDispatcher.handleAction({
            actionType: Constants.event.RESET
        });
    }
}

export default PageActions;
