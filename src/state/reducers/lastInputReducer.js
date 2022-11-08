const reducer = (state = "9998.0871236", action) => {
    switch(action.type) {
        case 'INPUT':
            return action.input;
        default:
            return state;
    }
}

export default reducer;