import React from 'react'
import Button from './Common/Button'
import SimpleInput from './Common/SimpleInput'
import Svgs from './Svgs'

const Footer = () => {
    return (
        <>
            <div className='bg-[#35424B]'>
                <div className='mx-auto container w-[90%]'>
                    <div className='grid lg:grid-cols-7 gap-5 py-[2rem] text-white'>
                        <div className='lg:col-span-2 flex lg:items-center lg:justify-center'>
                            <div className='flex flex-col gap-6'>
                                <div className='mb-[1rem]'>
                                    <Svgs.Logo />
                                </div>
                                <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt itaque iure nemo.</p>
                                <div className='flex items-start gap-2'>
                                    <Svgs.Location_pin fill='#fff' />
                                    <p className='text-xs'>Mehran Block Town Lahore</p>
                                </div>
                                <div className='flex items-start gap-2'>
                                    <Svgs.Phone fill='#fff' />
                                    <p className='text-xs'><a href="tel:+92 316 85417 58">+92 316 85417 58</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='font-semibold text-[#fff] text-lg'>Service</h2>
                            <p className='text-xs'><a href="#">UI/UX Design</a></p>
                            <p className='text-xs'><a href="#">Mobile Dev</a></p>
                            <p className='text-xs'><a href="#">IT Consultancy</a></p>
                            <p className='text-xs'><a href="#">Web Dev</a></p>
                            <p className='text-xs'><a href="#">Development</a></p>
                            <p className='text-xs'><a href="#">QA Testing</a></p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='font-semibold text-[#fff] text-lg'>Service</h2>
                            <p className='text-xs'><a href="#">UI/UX Design</a></p>
                            <p className='text-xs'><a href="#">Mobile Dev</a></p>
                            <p className='text-xs'><a href="#">IT Consultancy</a></p>
                            <p className='text-xs'><a href="#">Web Dev</a></p>
                            <p className='text-xs'><a href="#">Development</a></p>
                            <p className='text-xs'><a href="#">QA Testing</a></p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='font-semibold text-[#fff] text-lg'>Service</h2>
                            <p className='text-xs'><a href="#">UI/UX Design</a></p>
                            <p className='text-xs'><a href="#">Mobile Dev</a></p>
                            <p className='text-xs'><a href="#">IT Consultancy</a></p>
                            <p className='text-xs'><a href="#">Web Dev</a></p>
                            <p className='text-xs'><a href="#">Development</a></p>
                            <p className='text-xs'><a href="#">QA Testing</a></p>
                        </div>
                        <div className='flex flex-col gap-4 lg:col-span-2'>
                            <h2 className='font-semibold text-[#fff] text-lg'>Join a Newsletter</h2>
                            <div className='flex flex-col gap-3 w-full'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <h2 className='font-semibold text-xs'>Your Email</h2>
                                    <div className='flex items-center gap-1 bg-[#fff] p-2 rounded-lg'>
                                        <input className='!text-[#7B7B7B] w-full text-xs rounded-md outline-none p-2 transition-all' placeholder='Enter Your Email' />
                                        <Button className='!border-none' text='Send' />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-[1rem]'>
                                <h1 className='text-lg'>Join Our Community</h1>
                            </div>
                            <div className='flex items-center gap-4'>
                                <Svgs.FaceBook fill='#CCCCCC' />
                                <Svgs.Twitter fill='#CCCCCC' />
                                <Svgs.Linkedin fill='#CCCCCC' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-4 text-center text-white bg-[#248489] text-sm'>
                Copyright Nework Website
            </div>
        </>
    )
}

export default Footer