const Constants = Object.freeze({
    event: {
        CHANGE: Symbol(),
        RESET: Symbol(),
        TODO: {
            LOAD: Symbol(),
            LOADING: Symbol(),
            LOADED: Symbol(),
            CHANGE: Symbol(),
            ADD: Symbol()
        }
    }
});

export default Constants;
