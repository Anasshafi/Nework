import React from 'react'

const FormInput = ({ title, placeholder }) => {
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>{title}</h1>
            <input type="text" className='border-[0.8px] focus:border-[#579FAE] transition-all outline-none border-[#A3A8B6] rounded-md px-4 py-3 text-sm' placeholder={placeholder} />
        </div>
    )
}

export default FormInput