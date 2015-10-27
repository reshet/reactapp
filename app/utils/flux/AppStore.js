import _             from 'lodash';
import BaseStore     from 'utils/flux/BaseStore';
import AppDispatcher from 'utils/flux/AppDispatcher';
import Constants     from 'utils/Constants';

class AppStore extends BaseStore {
    EVENTS = Constants.event.TODO;

    getStoreState() {
        return _.pick(this, [
            'isLoading',
            'loaded',
            'todos',
            'currentInput'
        ]);
    }

    reset() {
        this.isLoading = true;
        this.loaded = false;
        this.todos = [];
        this.currentInput = '';
    }

    setIsLoading() {
        this.isLoading = true;
    }

    setCurrentInput(data) {
        this.currentInput = data.input;
    }

    setData(data) {
        _.assign(this, _.pick(data, [
            'todos'
        ]));
        this.isLoading = false;
        this.loaded = true;
    }

    addToTodos(data) {
        this.todos.push(data.todo);
    }

    listenToDispatches() {
        AppDispatcher.register(payload => {
            switch (payload.action.actionType) {
                case this.EVENTS.LOADING:
                    this.setIsLoading();
                    break;
                case this.EVENTS.LOADED:
                    this.setData(payload.action.data);
                    break;
                case this.EVENTS.CHANGE:
                    console.log(payload.action.data);
                    this.setCurrentInput(payload.action.data);
                    break;
                case this.EVENTS.ADD:
                    this.addToTodos(payload.action.data);
                    break;
                default:
                    return true;
            }

            this.emitChange();
            return false;
        });
    }
}

export default new AppStore();
