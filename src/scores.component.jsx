import { useStateValue } from "./StateProvider";

const Scores = () => {

    const [{ correctScore, falseScore} , dispatch] = useStateValue();

    return (
        <div className='scores-container'>
            <h2>Maths Problem Challenge</h2>
            <div className='scores'>
            <div>
                <h4>Correct &#128522;</h4>
                <p>{correctScore}</p>
            </div>
            <div>
                <h4>False &#128533;</h4>
                <p>{falseScore}</p>
            </div>
            </div>
        </div>
    )
}

export default Scores