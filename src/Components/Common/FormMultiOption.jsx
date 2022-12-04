import React, { useState } from 'react'
import Button from './Button'

const FormMultiOption = ({ data, title }) => {
    const [Select, setSelect] = useState()
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>{title}</h1>
            <div className='flex items-center gap-3'>
                {
                    data.map((ele, i) => {
                        return (
                            <button
                                className={`text-sm w-fit rounded-full px-4 py-2 border flex items-center justify-center text-center text-[#A3A8B6] ${Select == i && 'border-[#579FAE] !text-[#579FAE] bg-[#DBEEF2]'}`}
                                onClick={() => {
                                    setSelect(i)
                                }}
                            >
                                {ele}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FormMultiOption