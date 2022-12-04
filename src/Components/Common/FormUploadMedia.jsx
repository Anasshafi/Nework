import React from 'react'
import Svgs from '../Svgs'

const FormUploadMedia = (props) => {
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>{props.title}</h1>
            <div className='rounded-lg text-center border-dashed border-[2px] p-[2rem] flex justify-center items-center flex-col gap-2'>
                <Svgs.Images />
                <h1 className='text-[#7B7B7B] font-semibold text-lg'>Upload maximum 10 images</h1>
                <h1 className='text-[#A1A1A1] text-sm'>
                    Drop Images or <span className='text-[#248489] underline'>browse from computer</span>
                </h1>
            </div>
        </div>
    )
}

export default FormUploadMedia