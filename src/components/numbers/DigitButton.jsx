import './ButtonS.css'
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../state/index';


function DigitButton(data) {
    const number = data.number;

    const lastInput = useSelector((state) => state.input);
    const history = useSelector((state) => state.history);
    const clearInput = useSelector((state) => state.clear);
    const zeroAfterOperator = useSelector((state) => state.zeroAfterOperator);

    const dispatch = useDispatch();
    const {setInput, setHistory, setClear, setLastInputWasOperator, setZeroAfterOperator} = bindActionCreators(actionCreators, dispatch);

    const handleClick = () => {
        if (history.includes('Infinity') || history == '') {
            setInput('' + number);
            setHistory('' + number);
            setClear(false);
            setLastInputWasOperator(false);
            setZeroAfterOperator(false);
        } else if (clearInput) {
            if (!zeroAfterOperator) {
                setInput('' + number);
                setHistory(history + number);
                setClear(false);
                setLastInputWasOperator(false);
            } else {
                setZeroAfterOperator(false);
                setLastInputWasOperator(false);
                var currentHistory = history.slice(0, -1) + '' + number;
                setClear(false);
                setInput('' + number);
                setHistory("" + currentHistory);
            }
        } else if (lastInput.length < 12) {
            setInput(lastInput + number);
            setHistory(history + number);
            setLastInputWasOperator(false);    
        }
    }

    const style = {
        'border': '1px solid black',
        'marginRight': '-1px',
        'marginTop': '-1px',
        'backgroundColor': '#737474'
    }

    return (
        <button className="button-style" style={style} onClick={handleClick}>{number}</button>
    );
}

export default DigitButton;