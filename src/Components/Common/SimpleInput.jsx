import React from 'react'

const SimpleInput = (props) => {
    return (
        <div className='flex flex-col gap-2 flex-1 lg:w-auto w-full'>
            <h2 className='font-semibold text-[#333333]'>{props.label}</h2>
            <input type={props.type ? props.type : 'text'} className='w-full focus:border-[#248489] bg-[#F7F7F7] border border-transparent placeholder:text-[#999999] text-sm rounded-md outline-none px-4 py-2 transition-all' placeholder={props.placeholder} />
        </div>
    )
}

export default SimpleInput