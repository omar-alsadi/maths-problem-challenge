export const INITIAL_STATE = {
    result : '0',
    isCorrect: '',
    question: '',
    value: '',
    disabled: false,
    correctScore: 0,
    falseScore: 0
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_RESULT' :
            return {
                ...state,
                result: action.payload
            }
        case 'SET_ISCORRECT' :
            return {
                ...state,
                isCorrect: action.payload
            }
        case 'SET_QUESTION' :
            return {
                ...state,
                question: action.payload
            }
        case 'SET_VALUE' :
            return {
                ...state,
                value: action.payload
            }
        case 'SET_DISABLED' :
            return {
                ...state,
                disabled: action.payload
            }
        case 'SET_CORRECT_SCORE' :
            return {
                ...state,
                correctScore: state.correctScore + 1
            }
        case 'SET_FALSE_SCORE' :
            return {
                ...state,
                falseScore: state.falseScore + 1
            }
        default:
            return state;
    }
}

export default reducer