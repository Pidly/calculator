import './ZeroButton.css';
import './ButtonS.css';

import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../state/index';

function ZeroButton() {
    const number = 0;
    
    const lastInput = useSelector((state) => state.input);
    const history = useSelector((state) => state.history);
    const clearInput = useSelector((state) => state.clear);
    const zeroAfterOperator = useSelector((state) => state.zeroAfterOperator);

    const dispatch = useDispatch();
    const {setInput, setHistory, setClear, setZeroAfterOperator} = bindActionCreators(actionCreators, dispatch);

    const handleClick = () => {
        if (history.includes('Infinity') || history == '') {
            setZeroAfterOperator(true);
            setInput('0');
            setHistory('0');
        } else if (clearInput) {
            if (zeroAfterOperator) {

            } else {
                setZeroAfterOperator(true);
                setInput('0');
                setHistory(history + 0);    
            }
        } else if(lastInput.length < 12  && !zeroAfterOperator) {
            setInput(lastInput + number);
            setHistory(history + number);
        }
    }

    return(
        <button className='button-style' id="zero-button" onClick={handleClick}>0</button>
    );
}

export default ZeroButton;