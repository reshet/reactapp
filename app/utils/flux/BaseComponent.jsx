import React from 'react';
import _ from 'lodash';

class BaseComponent extends React.Component {
    constructor(...args) {
        super(...args);

        this.init();

        if (!Array.isArray(this.stores)) {
            this.stores = [ this.stores ];
        }

        this.state = this.getInitState();
    }

    getInitState() {
        return this.getCombinedStoresState();
    }

    getCombinedStoresState() {
        let combined_state = {};

        for (const store of this.stores) {
            combined_state = _.assign(combined_state, store.getStoreState());
        }

        return combined_state;
    }

    onStoreChange = () => {
        this.setState(this.getCombinedStoresState());
    }

    componentWillMount() {
        for (const store of this.stores) {
            store.addChangeListener(this.onStoreChange);
        }
    }

    componentWillUnmount() {
        for (const store of this.stores) {
            store.removeChangeListener(this.onStoreChange);
        }
    }
}

export default BaseComponent;
