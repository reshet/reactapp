import PageActions   from 'utils/flux/PageActions';
import AppDispatcher from 'utils/flux/AppDispatcher';
import Constants     from 'utils/Constants';

class TodoActions extends PageActions {
    EVENTS = Constants.event.TODO
    DATA_URL = '/move/api/todo'

    changeInput(input) {
        console.log(input);
        AppDispatcher.handleAction({
            actionType: this.EVENTS.CHANGE,
            data: { input }
        });
    }

    addTodo(todo) {
        AppDispatcher.handleAction({
            actionType: this.EVENTS.ADD,
            data: { todo }
        });
    }
}

export default new TodoActions();
