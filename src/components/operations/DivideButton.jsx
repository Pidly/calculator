import './ButtonStyle.css'
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../state/index';

function DivideButton() {
    const history = useSelector((state) => state.history);
    const lastInputWasOperator = useSelector((state) => state.wasOperator);

    const dispatch = useDispatch();
    const {setInput, setHistory, setClear, setLastInputWasOperator, setZeroAfterOperator, setDecimalUsed} = bindActionCreators(actionCreators, dispatch);

    const handleClick = () => {
        console.log(history);
        if (history.includes('Infinity') || history == '') {
            setHistory('');
            setInput('0');
            setLastInputWasOperator(false);
        } else if (!lastInputWasOperator) {
            setLastInputWasOperator(true);
            setInput('/');
            setHistory(history + "/");
        } else {
            var currentHistory = history.slice(0, -1) + '/';
            setLastInputWasOperator(true);
            setInput('/');
            setHistory("" + currentHistory);
        }

        setDecimalUsed(false);
        setClear(true);
        setZeroAfterOperator(false);
    }

    const style = {
        'border': '1px solid black',
        'marginRight': '-1px',
        'backgroundColor': '#575859',
    }

    return(
        <button className='button-style' style={style} onClick={handleClick}>/</button>
    )
}

export default DivideButton;