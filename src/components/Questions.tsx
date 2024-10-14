import { useReducer } from "react"
import { questions } from "../data/preguntas"
import Question from "./Question"
import { initialState, questionsReducer } from "../reducers/questionsReducer"

const Questions = () => {
    const [state, dispatch] = useReducer(questionsReducer, initialState)

    return (
        <section className="flex flex-col space-y-12" id="questions">
            <div className="relative min-h-[100px]">
                <img src="/img/vectors/preguntasSeparator.png" className="w-1/4 right-0 absolute" alt="" />
            </div>
            <div className="w-full flex justify-center">
                <span className="text-white font-bold text-5xl 2xl:text-7xl w-full sm:w-1/2 text-center">ALGUNAS PREGUNTAS FRECUENTES</span>
            </div>
            <div className="flex flex-col sm:flex-row px-10 sm:px-36 2xl:px-48 gap-5">
                <div className="flex flex-col space-y-6 w-full sm:w-1/2">
                    {
                        questions.slice(0, 3).map((x, index) => (
                            <Question question={x} key={index} state={state} dispatch={dispatch} />
                        ))
                    }
                </div>
                <div className="flex flex-col space-y-6 w-full sm:w-1/2">
                    {
                        questions.slice(3, 6).map((x, index) => (
                            <Question question={x} key={index} state={state} dispatch={dispatch} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Questions
