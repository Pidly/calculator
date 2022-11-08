const reducer = (state = false, action) => {
    switch(action.type) {
        case 'wasOperator':
            return action.wasOperator;
        default:
            return state;
    }
}

export default reducer;