import React from 'react'
import Dropwdown from './Dropdown'

const FormNumber = (props) => {
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>{props.title}</h1>
            <div className='border rounded-md flex items-center'>
                <div className='border-r p-1 w-[7rem]'>
                    <Dropwdown noBorder={true} placeholder={'RS'} options={props.options} />
                </div>
                <div className='p-2 w-full'>
                    <input className='w-full outline-none text-sm' placeholder={props.placeholder} />
                </div>
            </div>
        </div>
    )
}

export default FormNumber