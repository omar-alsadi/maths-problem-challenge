import './App.css';
import Calculator from './calculator.component';
import MathProblem from './mathProblem.component'
import Scores from './scores.component';

const App = () => {

  return (
    <div className='App'>
      <Scores />
      <div className='maths-challenge'>
        <MathProblem />
        <Calculator />
      </div>
    </div>
  )
}

export default App;
