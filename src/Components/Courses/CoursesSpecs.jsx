import React from 'react'

const CoursesSpecs = (props) => {
    return (
        <div className='flex items-center gap-4'>
            <div>
                {props.icon}
            </div>
            <div className='flex flex-col gap-2'>
                <h1>{props.title}</h1>
                <p className='text-sm text-[#757575]'>{props.desc}</p>
            </div>
        </div>
    )
}

export default CoursesSpecs