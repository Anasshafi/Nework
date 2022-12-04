import React from 'react'
import { useNavigate } from 'react-router-dom'
import Svgs from '../Svgs'

const HomeCard = (props) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => {
            props.trending ? navigate('/course-detail') : navigate('/detail')
        }} className={`${props.trending ? 'p-[0.6rem]' : ''} cursor-pointer rounded-lg card-shadow max-w-[25rem] mx-auto`}>
            <div className='relative'>
                <img src={props.img ? `${process.env.PUBLIC_URL}${props.img}` : 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'} className={`rounded-t-lg h-[15rem] w-full object-cover object-top`} />
                {
                    props.trending ? <>
                        <div className='absolute top-4 left-0'>
                            <div className='bg-trending flex items-center justify-center text-center'>
                                <h1 className='text-white'>Trending</h1>
                            </div>
                        </div>
                    </> : <div className='flex items-center justify-between absolute top-4 left-4 right-4'>
                        <div className='bg-[#000000B2] flex items-center gap-2 px-3 py-2 rounded-md'>
                            <Svgs.Stack />
                            <p className='text-white text-xs'>Website</p>
                        </div>
                        <div className='bg-[#000000B2] px-3 py-2 rounded-md'>
                            <Svgs.Heart_o />
                        </div>
                    </div>
                }
            </div>
            <div className='p-3 flex flex-col gap-4 border-b'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <img src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="h-[3rem] w-[3rem] rounded-full object-cover" />
                        <h2 className='font-bold text-[#35424B]'>Anas Shafi</h2>
                    </div>
                    {
                        props.trending ? '' : <p className='text-[#ADADAD] text-sm'>6 Days Ago</p>
                    }
                </div>
                <h1>Creative Agency Whole Website Project</h1>
                {
                    props.trending ? <>
                        <div className='flex items-center gap-3'>
                            <Svgs.Rating />
                            <h1 className='text-sm'>5 <span className='text-[#757575]'>(231)</span></h1>
                        </div>
                    </> : <>
                        <p className='text-[#ADADAD] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sit officia eveniet, unde, aliquam omnis et a, quaerat nemo error consequatur officiis?</p>
                    </>
                }
            </div>
            <div className='px-3 py-2 flex items-center justify-between'>
                {
                    props.trending ? <>
                        <p className='text-[#08B673] font-bold'>Free</p>
                    </> : <>
                        <div className='flex items-center gap-5'>
                            <div className='flex items-center gap-2'>
                                <Svgs.Heart />
                                <p className='text-sm text-[#A8A6A6]'>1.5k</p>
                            </div>
                            {/* <div className='flex items-center gap-2'>
                                <Svgs.Views />
                                <p className='text-sm text-[#A8A6A6]'>2.5k</p>
                            </div> */}
                        </div>
                        {/* <div className='flex items-center gap-2'>
                            <Svgs.React fill='#248489' />
                            <Svgs.Flutter fill='#248489' />
                        </div> */}
                    </>
                }
            </div>
        </div>
    )
}

export default HomeCard