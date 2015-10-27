import { Dispatcher } from 'flux';

// Create dispatcher instance
const AppDispatcher = new Dispatcher();

// Convenient method to handle dispatch requests
AppDispatcher.handleAction = function(action) {
    if (!action.actionType) {
        throw "Cannot dispatch actions without action type";
    }

    this.dispatch({
        source: 'VIEW_ACTION',
        action
    });
};

export default AppDispatcher;
