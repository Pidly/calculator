const reducer = (state = "999 x 450 + 80 / 7", action) => {
    switch(action.type) {
        case 'HISTORY':
            return action.history;
        default:
            return state;
    }
}

export default reducer;