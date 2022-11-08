import './ButtonS.css'
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../state/index';


function DecimalButton(props) {
    const history = useSelector((state) => state.history);
    const lastInputWasOperator = useSelector((state) => state.wasOperator);
    const decimalUsed = useSelector((state) => state.decimal);
    const input = useSelector ((state) => state.input);

    const dispatch = useDispatch();
    const {setInput, setHistory, setClear, setLastInputWasOperator, setZeroAfterOperator, setDecimalUsed} = bindActionCreators(actionCreators, dispatch);

    const handleClick = () => {
        updateDisplayText();
    }

    const updateDisplayText = (expressionHistory = history, lastWasOperator = lastInputWasOperator) => {
        if (expressionHistory.includes('Infinity') || expressionHistory == '') {
            setClear(false);
            setInput('0.');
            setHistory('0.');
            setLastInputWasOperator(false);
            setZeroAfterOperator(false);
            setDecimalUsed(true);
        } else if (!lastWasOperator && !decimalUsed) {
            setClear(false);
            setInput(input + '.');
            setHistory(history + '.');
            setLastInputWasOperator(false);
            setZeroAfterOperator(false);
            setDecimalUsed(true);
        } else if (lastWasOperator && !decimalUsed) {
            setClear(false);
            setInput('0.');
            setHistory(history + '0.');
            setLastInputWasOperator(false);
            setZeroAfterOperator(false);
            setDecimalUsed(true);
        }
    }

    const style = {
        'border': '1px solid black',
        'marginRight': '-1px',
        'marginTop': '-1px',
        'backgroundColor': '#737474'
    }

    return (
        <button className="button-style" style={style} onClick={handleClick}>.</button>
    );
}

export default DecimalButton;