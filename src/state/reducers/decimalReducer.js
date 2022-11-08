const reducer = (state = "false", action) => {
    switch (action.type) {
        case 'DECIMAL':
            return action.decimal;
        default:
            return state;
    }
}

export default reducer;