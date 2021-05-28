import './App.css';
import Calculator from './Components/Calculator/Calculator.component';
import MathProblem from './Components/MathProblem/MathProblem.component'
import Scores from './Components/Scores/Scores.component';

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
