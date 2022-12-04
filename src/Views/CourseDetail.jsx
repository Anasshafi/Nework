import React from 'react'
import Button from '../Components/Common/Button'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Svgs from '../Components/Svgs'

const CourseDetail = () => {
    return (
        <>
            <Header />
            <div className="container py-[2rem] flex flex-col gap-6">
                <div className='flex items-center gap-4'>
                    <p className='text-[#248489]'>Courses</p>
                    <Svgs.RightArrow />
                    <p className='text-[#248489]'>Popular Courses</p>
                    <Svgs.RightArrow />
                    <p className='text-[#35424B]'>Programming with React : Hands On Introduction for Beginners</p>
                </div>
                <h1 className='text-[2rem]'>Programming with React : Hands On Introduction for Beginners</h1>
                <div>
                    <Button text={'Web Development Course'} className='text-[#248489] !bg-[#DBEEF2] border-none' />
                </div>
                <div className='flex items-center gap-4 justify-between flex-wrap'>
                    <div className='flex items-center gap-8 flex-wrap'>
                        <div>
                            <p className='text-sm text-[#7B7B7B]'>Posted Date</p>
                            <h1 className='text-[#35424B]'>Sept 2022</h1>
                        </div>
                        <div>
                            <p className='text-sm text-[#7B7B7B]'>Posted Date</p>
                            <h1 className='text-[#35424B]'>Sept 2022</h1>
                        </div>
                        <div>
                            <p className='text-sm text-[#7B7B7B]'>Posted Date</p>
                            <h1 className='text-[#35424B]'>Sept 2022</h1>
                        </div>
                        <div>
                            <p className='text-sm text-[#7B7B7B]'>Posted Date</p>
                            <h1 className='text-[#35424B]'>Sept 2022</h1>
                        </div>
                    </div>
                    <div className=''>
                        <Button text={<>
                            <div className='flex items-center gap-2'>
                                <Svgs.Share size='20' fill='#35424B' />
                                <p>Share Course</p>
                            </div>
                        </>} className='px-3 !text-[#35424B] !bg-[#E6E6E6] border-none' />
                    </div>
                </div>
                <div className='border rounded-lg flex flex-col gap-6'>
                    <div className='rounded-lg overflow-hidden'>
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/Ke90Tje7VS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>

                    <div className='px-5 pb-5'>
                        <h1 className='text-lg'>Description</h1>
                        <div className='text-[#7B7B7B] flex flex-col gap-2 text-sm'>
                            React JS Tutorial - Get up & running with React JS: the most popular JavaScript library in the world! - Want to master React?
                            Get my React mastery course: <span className='text-[#248489]'>http://bit.ly/2KVl2A3</span>

                            <h1 className='text-[#35424B]'>TABLE OF CONTENT</h1>

                            <div>
                                <span className='text-[#248489]'>00:00 &nbsp;</span>
                                Introduction
                            </div>
                            <div>
                                <span className='text-[#248489]'>01:14 &nbsp;</span>
                                What is React
                            </div>
                            <div>
                                <span className='text-[#248489]'>05:48 &nbsp;</span>
                                Setting Up the Development Environment
                            </div>
                            <div>
                                <span className='text-[#248489]'>09:27 &nbsp;</span>
                                Your First React App
                            </div>
                            <div>
                                <span className='text-[#248489]'>16:03 &nbsp;</span>
                                Hello World
                            </div>
                            <div>
                                <span className='text-[#248489]'>22:26 &nbsp;</span>
                                Components
                            </div>
                            <div>
                                <span className='text-[#248489]'>24:06 &nbsp;</span>
                                Setting Up the Project
                            </div>
                            <div>
                                <span className='text-[#248489]'>26:15 &nbsp;</span>
                                Your First React Component
                            </div>
                            <div>
                                <span className='text-[#248489]'>31:38 &nbsp;</span>
                                Specifying Children
                            </div>
                            <div>
                                <span className='text-[#248489]'>35:56 &nbsp;</span>
                                Embedding Expressions
                            </div>
                            <div>
                                <span className='text-[#248489]'>40:49 &nbsp;</span>
                                Setting Attributes
                            </div>
                            <div>
                                <span className='text-[#248489]'>46:36 &nbsp;</span>
                                Rendering Classes Dynamically
                            </div>
                            <div>
                                <span className='text-[#248489]'>50:57 &nbsp;</span>
                                Rendering Lists
                            </div>
                            <div>
                                <span className='text-[#248489]'>54:58 &nbsp;</span>
                                Conditional Rendering
                            </div>
                            <div>
                                <span className='text-[#248489]'>1:01:04 &nbsp;</span>
                                Handling Events
                            </div>
                            <div>
                                <span className='text-[#248489]'>1:03:56 &nbsp;</span>
                                Binding Event Handlers
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default CourseDetail