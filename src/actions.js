export const setResult = (num) => ({
    type: 'SET_RESULT',
    payload: num
})

export const setIsCorrect = (boolean) => ({
    type: 'SET_ISCORRECT',
    payload: boolean
})

export const setQuestion = (question) => ({
    type: 'SET_QUESTION',
    payload: question
})

export const setValue = (num) => ({
    type: 'SET_VALUE',
    payload: num
})

export const setDisabled = (boolean) => ({
    type: 'SET_DISABLED',
    payload: boolean
})

export const setCorrectScore = () => ({
    type: 'SET_CORRECT_SCORE'
})

export const setFalseScore = () => ({
    type: 'SET_FALSE_SCORE'
})