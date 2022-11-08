import { combineReducers } from "redux";
import lastInputReducer from './lastInputReducer';
import historyInputReducer from './historyReducer';
import clearInputReducer from './clearInputReducer';
import trackOperatorReducer from './trackOperatorReducer';
import zeroAfterOperatorReducer from './zeroAfterOperatorReducer';
import decimalReducer from './decimalReducer';

const reducers = combineReducers({
    input: lastInputReducer,
    history: historyInputReducer,
    clear: clearInputReducer,
    wasOperator: trackOperatorReducer,
    zeroAfterOperator: zeroAfterOperatorReducer,
    decimal: decimalReducer
});

export default reducers;