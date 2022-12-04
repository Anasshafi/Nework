import React from 'react'
import { useNavigate } from 'react-router-dom'
import Svgs from '../Svgs'
import Button from './Button'

const CommunityCard = () => {
    const navigate = useNavigate();
    return (
        <div className='border p-4 rounded-xl flex flex-col gap-4 cursor-pointer' onClick={() => {
            navigate('/question-detail')
        }} >
            <div className='flex items-center gap-3'>
                <div className='rounded-full px-3 py-1 text-sm flex items-center gap-1 bg-[#FEF3C7] text-[#9A7C04]'>
                    <Svgs.Trending />
                    <p>Popular Question</p>
                </div>
                <div className='rounded-full px-3 py-1 text-sm flex items-center gap-1 bg-[#D9FEF7] text-[#00725C]'>
                    <Svgs.Code size='19' stroke='#00725C' />
                    <p>Web Development</p>
                </div>
            </div>
            <h1 className='font-semibold text-lg'>
                Can you force a React component to rerender without calling setState?
            </h1>
            <p className='text-[#7B7B7B] text-sm'>
                So I guess my question is: do React components need to have state in order to rerender? Is there a way to force the component to update on demand without changing the state? …
            </p>
            <div className='flex items-center justify-between gap-4'>
                <div className="flex items-center gap-3">
                    <div>
                        <img src="https://loremflickr.com/400/400" className="h-[4rem] w-[4rem] rounded-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm text-[#7B7B7B]">
                            Posted By <span className="text-[#248489]">Ahmad Raza</span>
                        </p>
                        <p className="text-[#7B7B7B] text-xs">1 day ago</p>
                    </div>
                </div>
                <div>
                    <h1 className='cursor-pointer text-[#248489]'>12 Answers</h1>
                </div>
            </div>
        </div>
    )
}

export default CommunityCard