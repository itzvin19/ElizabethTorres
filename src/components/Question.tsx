import { Dispatch } from "react"
import { questionsActions, questionStateType } from "../reducers/questionsReducer"
import { QuestionType } from "../types"

type QuestionPropType = {
    question: QuestionType,
    state:questionStateType,
    dispatch:Dispatch<questionsActions>
}

const Question = ({ question,state,dispatch}: QuestionPropType) => {

    const index=question.id-1;
    //!state.openQuestions[index] --> Oculto
    return (
        <div className=" bg-blue-900 text-slate-50 rounded-lg flex flex-col relative justify-center hover:bg-blue-800 min-h-24 2xl:min-h-32 2xl:text-2xl"
             onMouseEnter={()=>dispatch({type:'toggleQuestion',payload:{index}})}
             onMouseLeave={()=>dispatch({type:'toggleQuestion',payload:{index}})}>
            <div className="flex justify-between items-center py-6 px-8 2xl:py-8 2xl:px-10 duration-100 rounded-lg space-x-8 cursor-pointer relative">
                <span className="text-justify">{question.question}</span>
                <span>▼</span>
            </div>
            <div className={`${!state.openQuestions[index]?"py-0 max-h-0":"py-4 2xl:py-6"} px-6 2xl:px-10 bg-blue-800 z-10 rounded-b-lg overflow-hidden duration-500`}>
                {question.response}
            </div>
        </div>
    )
}

export default Question
