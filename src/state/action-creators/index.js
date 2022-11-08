export const setHistory = (history) => {
    return {
        type: "HISTORY",
        history
    }
}
export const setInput = (input) => {
    return {
        type: "INPUT",
        input
    }
}
export const setClear = (clear) => {
    return {
        type: "CLEAR",
        clear
    }
}
export const setLastInputWasOperator = (wasOperator) => {
    return {
        type: "wasOperator",
        wasOperator
    }
}
export const setZeroAfterOperator = (zeroAfterOperator) => {
    return {
        type: "zeroAfterOperator",
        zeroAfterOperator
    }
}
export const setDecimalUsed = (decimal) => {
    return {
        type: "DECIMAL",
        decimal
    }
}