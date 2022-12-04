import React from 'react'

const QuizOption = (props) => {
    return (
        <div className={`p-2 flex items-center gap-4 bg-[#F2F8FA] rounded-full ${props.active && '!bg-[#248489]'}`}>
            <div className={`h-[2.5rem] w-[2.5rem] rounded-full flex items-center justify-center ${props.active && 'bg-white'} border border-[#248489]`}>
                {props.option}
            </div>
            <p className={`text-sm ${props.active && 'text-white'}`}>{props.text}</p>
        </div>
    )
}

export default QuizOption