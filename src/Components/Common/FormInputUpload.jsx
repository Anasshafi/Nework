import React from 'react'
import Button from './Button'

const FormInputUpload = ({ title, placeholder, showTitle, className, onClick }) => {
    return (
        <div className='flex flex-col gap-2'>
            {
                showTitle && <h1 className='font-semibold'>{title}</h1>
            }
            <div className={`cursor-pointer border-[0.8px] focus:border-[#579FAE] transition-all outline-none border-[#A3A8B6] rounded-md px-3 py-2 text-sm flex items-center justify-between ${className}`}>
                <p className='text-[#A3A8B6] text-sm'>{placeholder}</p>
                <Button text={title} onClick={onClick} />
                <input type='file' hidden id={1} />
            </div>
        </div>
    )
}
FormInputUpload.defaultProps = {
    showTitle: true
}
export default FormInputUpload