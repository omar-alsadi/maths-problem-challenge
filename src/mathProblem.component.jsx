import { data } from './math-problem-data'
import { setIsCorrect, setQuestion, setValue, setDisabled, setCorrectScore, setFalseScore } from './actions'
import { useStateValue } from './StateProvider'

const MathProblem = () => {

    const [{ isCorrect , question , value , disabled }, dispatch] = useStateValue();

    const hundleChange = (e) => {
        dispatch(setValue(e.target.value));
    }

    // to get a random number
    const randomNumber = (min, max) => {  
        return Math.floor(Math.random() * (max - min) + min); 
    }

    // to get a question and reset values
    const getQuestion = () => {
        dispatch(setQuestion(randomNumber(1,11)));
        dispatch(setDisabled(false));
        dispatch(setIsCorrect(''));
        dispatch(setValue(''));
    }

    const setAnswer = (problem) => {
        if (value === problem.answer) {
            dispatch(setIsCorrect(true))
            dispatch(setDisabled(true))
            dispatch(setCorrectScore())
        } else if ( value === '') {
            return;
        } else { 
            dispatch(setIsCorrect(false));
            dispatch(setDisabled(true));
            dispatch(setFalseScore())
    }}

    // to get a question when the app starts
    window.addEventListener('load', () => getQuestion());
            
            return (
                <>
                    {
                        data.map( problem => {

                            return (
                                        problem.id === question &&
                                        <div className='questions-container'>
                                            <h2>{problem.question}</h2>
                                            <span>Answer : </span>
                                            <input type='number' placeholder='Numbers are just accepted' value={value} onChange={hundleChange} />
                                            <button disabled={disabled} className={disabled ? 'disabled btn' : 'btn'} onClick={() => setAnswer(problem)}>Submit</button>
                                            { isCorrect && 
                                                <h3>Correct!</h3>
                                            }
                                            { isCorrect === false &&
                                            <>
                                                <h4>Explaination :</h4>
                                                <h4>{problem.explain}</h4>
                                            </>
                                            }
                                            <button className={'btn'} onClick={getQuestion}>
                                                {isCorrect === '' ? 'Skip' : 'Next'}
                                            </button>
                                        </div>
                                    )
                        } )
                    }
                </>
            )

}

export default MathProblem