import { setResult } from "../../actions";
import { useStateValue } from "../../StateProvider";

const Calculator = () => {

    const [ { result } , dispatch ] = useStateValue();

    const handleChange = e => {
        result === '0' ? dispatch(setResult(parseInt(result + result.concat(e.target.name)).toString())) :
            dispatch(setResult(result.concat(e.target.name)))
    }

    const clear = () => {
        dispatch(setResult('0'))
    }

    const backspace = () => {
        result !== '0' && dispatch(setResult(result.slice(0, -1)));
        // to set the result 0 when clearing the last signal number
        result.length <= 1 && dispatch(setResult('0'));
    }

    const calculate = () => {
        try {
            dispatch(setResult(eval(result).toString()))
        } catch {
            dispatch(setResult('Error'))
        }
    }

    return (
            <div className='calculator'>
                    <h1 className='result'>{result}</h1>
                <div className='keypad'>
                    <button className='functionality' onClick={clear} id='clear'>Clear</button>
                    <button className='functionality' onClick={backspace}>C</button>
                    <button className='functionality' name='/' onClick={handleChange}>&divide;</button>
                    <button name='9' onClick={handleChange}>9</button>
                    <button name='8' onClick={handleChange}>8</button>
                    <button name='7' onClick={handleChange}>7</button>
                    <button className='functionality' name='*' onClick={handleChange}>x</button>
                    <button name='6' onClick={handleChange}>6</button>
                    <button name='5' onClick={handleChange}>5</button>
                    <button name='4' onClick={handleChange}>4</button>
                    <button className='functionality' name='+' onClick={handleChange}>+</button>
                    <button name='3' onClick={handleChange}>3</button>
                    <button name='2' onClick={handleChange}>2</button>
                    <button name='1' onClick={handleChange}>1</button>
                    <button className='functionality' name='-' onClick={handleChange}>-</button>
                    <button name='0' onClick={handleChange}>0</button>
                    <button className='functionality' name='=' onClick={calculate} id='equal'>=</button>
                    <button name='.' onClick={handleChange}>.</button>
                </div>
            </div>
    );


}

export default Calculator