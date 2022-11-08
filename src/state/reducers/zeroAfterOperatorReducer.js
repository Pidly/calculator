const reducer = (state = false, action) => {
    switch(action.type) {
        case 'zeroAfterOperator':
            return action.zeroAfterOperator;
        default:
            return state;
    }
}

export default reducer;