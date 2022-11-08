import './ButtonStyle.css';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state/index';

function ClearButton() {
    const dispatch = useDispatch();
    const {setInput, setHistory, setClear, setLastInputWasOperator, setZeroAfterOperator, setDecimalUsed} = bindActionCreators(actionCreators, dispatch);

    const handleClick = () => {
        setClear(true);
        setLastInputWasOperator(false);
        setZeroAfterOperator(false);
        setInput('0');
        setHistory('');
        setDecimalUsed(false);
    }

    const style = {
        'border': '1px solid black',
        'gridColumnStart': "1",
        'gridColumnEnd': "3",
        'marginRight': '-1px',
        'backgroundColor': '#575859',
        'color': 'white'
    }

    return(
        <button className="ac-button button-style" style={style} onClick={handleClick}>AC</button>
    );
}

export default ClearButton;