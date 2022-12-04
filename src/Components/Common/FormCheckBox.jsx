import React from 'react'

const FormCheckBox = ({ title }) => {
    return (
        <div className='flex items-center gap-2'>
            <input id='new-box' type={'checkbox'} className='h-4 w-4 accent-[#248489]' />
            <label htmlFor="new-box">
                <h1 className='text-sm text-[#35424B]'>{title}</h1>
            </label>
        </div>
    )
}

export default FormCheckBox