const reducer = (state = true, action) => {
    switch(action.type) {
        case 'CLEAR':
            return action.clear;
        default:
            return state;
    }
}

export default reducer;