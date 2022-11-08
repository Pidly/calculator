import './ButtonStyle.css';

import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../state/index';

function EqualButton() {
    const lastInput = useSelector((state) => state.input);
    const history = useSelector((state) => state.history);
    const clearInput = useSelector((state) => state.clear);

    const dispatch = useDispatch();
    const {setInput, setHistory, setClear, setLastInputWasOperator, setZeroAfterOperator, setDecimalUsed} = bindActionCreators(actionCreators, dispatch);

    const handleClick = () => {
        if (history.includes('Infinity') || history == '') {
            setInput('0');
            setHistory('');
            setClear(true);
        } else {
            var expression = history;
            var sanatizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
            var answer = eval(sanatizedExpression);
            setInput('' + answer);
            setHistory('' + answer);
            setClear(false);
        }

        if(history.includes(".")) {
            setDecimalUsed(true);
        } else {
            setDecimalUsed(false);
        }
        setLastInputWasOperator(false);
        setZeroAfterOperator(false);
    }

    /*
    var str = "12/5*9+9.4*2".replace(/[^-()\d/*+.]/g, '');
    console.log(eval(str));
    */
    const style = {
        'gridRowStart': "4",
        'gridRowEnd': "6",
        'gridColumnStart': "4",
        'gridColumnEnd': "4",
        'border': '1px solid black',
        'borderBottomRightRadius': "15px 15px",
        'marginTop': '-1px',
        'backgroundColor': '#FF9F09',
    }

    return(
        <button className='button-style' style={style} onClick={handleClick}>=</button>
    );
}

export default EqualButton;