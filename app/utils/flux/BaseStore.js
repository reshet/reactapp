import { EventEmitter } from 'events';
import Constants from 'utils/Constants';

class BaseStore extends EventEmitter {
    constructor() {
        super();

        this.init && this.init();
        this.listenToDispatches && this.listenToDispatches();
    }

    emitChange() {
        this.emit(Constants.event.CHANGE);
    }

    addChangeListener(callback) {
        this.on(Constants.event.CHANGE, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(Constants.event.CHANGE, callback);
    }
}

export default BaseStore;
