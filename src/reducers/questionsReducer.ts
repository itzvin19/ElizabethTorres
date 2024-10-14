import { questions } from "../data/preguntas"

export type questionsActions = { type: 'toggleQuestion', payload: { index: number } }

export type questionStateType = {
    openQuestions: boolean[]
}

export const initialState: questionStateType = {
    openQuestions: Array(questions.length).fill(false)
}

export const questionsReducer = (state: questionStateType = initialState, actions: questionsActions) => {
    if (actions.type == 'toggleQuestion') {
        return {
            ...state,
            openQuestions: state.openQuestions.map((isOpen, index) =>
                index === actions.payload.index ? !isOpen : isOpen
            )
        }
    }
    return state
}