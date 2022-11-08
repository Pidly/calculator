import './ButtonStyle.css';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../state/index';

function SubtractButton() {
    const history = useSelector((state) => state.history);
    const lastInputWasOperator = useSelector((state) => state.wasOperator);

    const dispatch = useDispatch();
    const {setInput, setHistory, setClear, setLastInputWasOperator, setZeroAfterOperator, setDecimalUsed} = bindActionCreators(actionCreators, dispatch);

    const handleClick = () => {
        updateDisplayText();
    }

    const updateDisplayText = (expressionHistory = history, lastWasOperator = lastInputWasOperator) => {
        if (expressionHistory.includes('Infinity') || expressionHistory == '') {
            setHistory("-");
        } else if (!lastWasOperator) {
            setHistory(expressionHistory + "-");
        } else {
            var currentHistory = expressionHistory.slice(0, -1) + '-';
            setHistory("" + currentHistory);
        }
        setClear(true);
        setInput('-');
        setLastInputWasOperator(true);
        setZeroAfterOperator(false);
        setDecimalUsed(false);
    }

    const style = {
        'border': '1px solid black',
        'marginTop': '-1px',
        'backgroundColor': '#FF9F09',
        'color': 'white'
    }

    return(
        <button className='button-style' style={style} onClick={handleClick}>-</button>
    );
}

export default SubtractButton;