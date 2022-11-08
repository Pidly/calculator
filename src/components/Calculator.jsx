import DecimalButton from "./numbers/DecimalButton";
import DigitButton from "./numbers/DigitButton";
import ClearButton from "./operations/ClearButton";
import DivideButton from "./operations/DivideButton";
import MultiplyButton from "./operations/MultiplyButton";
import SubtractButton from "./operations/SubtractButton";
import AddButton from "./operations/AddButton";
import EqualButton from "./operations/EqualButton";
import ZeroButton from "./numbers/ZeroButton";
import CalcDisplay from "./CalcDisplay";

import './Calculator.css'

function Calculator() {
    const horizontalGridLayout = {
        'gridColumnStart': "1",
        'gridColumnEnd': "4"
    }
    return (
        <div id="calculator-container">
            <CalcDisplay/>
            <div id="calculator">
                <ClearButton />
                <DivideButton/>
                <MultiplyButton/>
                <DigitButton number={7}/>
                <DigitButton number={8}/>
                <DigitButton number={9}/>
                <SubtractButton/>
                <DigitButton number={4}/>
                <DigitButton number={5}/>
                <DigitButton number={6}/>
                <AddButton/>
                <DigitButton number={1}/>
                <DigitButton number={2}/>
                <DigitButton number={3}/>
                <EqualButton/>
                <ZeroButton/>
                <DecimalButton/>
        </div>
        </div>
    );
}

export default Calculator;