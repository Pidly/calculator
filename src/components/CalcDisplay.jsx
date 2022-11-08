import './CalcDisplay.css';
import { useSelector } from 'react-redux';

function CalcDisplay() {
    const lastInput = useSelector((state) => state.input);
    const history = useSelector((state) => state.history);

    return(
        <div id="display-container">
            <p id="history">{history}</p>
            <p id="last-input">{lastInput}</p>
        </div>
    );
}

export default CalcDisplay;