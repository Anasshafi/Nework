import React, { useRef } from 'react'
import Button from '../Components/Common/Button'
import Header from '../Components/Header'
import Svgs from '../Components/Svgs'
import CoursesSpecs from '../Components/Courses/CoursesSpecs';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import HomeCard from '../Components/Common/HomeCard';

import Footer from '../Components/Footer'




const Courses = () => {

    return (
        <>
            <Header />
            <div className='h-[24rem] bg-gray-300 course-bg'>
                <div className='container mx-auto h-full w-[90%] flex items-center'>
                    <Swiper
                        spaceBetween={30}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        speed={600}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="courses-slider"
                    >
                        <SwiperSlide>
                            <div className='flex flex-col gap-4 text-[#248489]'>
                                <h1 className='text-[2.5rem] font-extrabold'>Learn Web Development
                                    <br className='hidden md:block' />
                                    from Experts</h1>
                                <p>Learn how to build web  applications from
                                    <br className='hidden md:block' />
                                    Scratch Level to Master Level</p>
                                <div>
                                    <Button bg='bg-[#248489]' className='!text-[white] hover:!text-white hover:!bg-[#248489] border-white' text={
                                        <div className='flex items-center gap-2'>
                                            <h2 >View Course</h2>
                                            <Svgs.Next fill='#fff' />
                                        </div>
                                    } />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col gap-4 text-[#248489]'>
                                <h1 className='text-[2.5rem] font-extrabold'>
                                    Learn Android App Development
                                    <br className='hidden md:block' />
                                    from Experts</h1>
                                <p>Learn how to build Android  applications from
                                    <br className='hidden md:block' />
                                    Scratch Level to Master Level</p>
                                <div>
                                    <Button bg='bg-[#248489]' className='!text-[white] hover:!text-white hover:!bg-[#248489] border-white' text={
                                        <div className='flex items-center gap-2'>
                                            <h2 >View Course</h2>
                                            <Svgs.Next fill='#fff' />
                                        </div>
                                    } />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col gap-4 text-[#248489]'>
                                <h1 className='text-[2.5rem] font-extrabold'>
                                    Learn Android App Development
                                    <br className='hidden md:block' />
                                    from Experts</h1>
                                <p>Learn how to build Android  applications from
                                    <br className='hidden md:block' />
                                    Scratch Level to Master Level</p>
                                <div>
                                    <Button bg='bg-[#248489]' className='!text-[white] hover:!text-white hover:!bg-[#248489] border-white' text={
                                        <div className='flex items-center gap-2'>
                                            <h2 >View Course</h2>
                                            <Svgs.Next fill='#fff' />
                                        </div>
                                    } />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='bg-[#FAFAFA] py-[2rem]'>
                <div className='container flex items-center justify-start lg:justify-around gap-5 flex-wrap'>
                    <CoursesSpecs icon={<Svgs.Anytime />} title='Learn Anytime' desc='Learn and Repeat anytime you want' />
                    <CoursesSpecs icon={<Svgs.Improve />} title='Improve Skills' desc='Online Courses to Improve Your Technical Skills ' />
                    <CoursesSpecs icon={<Svgs.Experience />} title='Experienced Instructo' desc='Learn from top Experienced Instructor' />
                </div>
            </div>
            <div className='container py-[3rem]'>
                <h1 className='text-3xl font-extrabold'>Trending Courses</h1>
                <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]'>
                    <HomeCard trending={true} />
                </div>
                <div className='text-center'>
                    <Button bg='bg-[#248489]' className='!text-[white] hover:!text-white hover:!bg-[#248489] border-white' text={
                        <div className='flex items-center gap-2'>
                            <h2 >View All</h2>
                            <Svgs.Next fill='#fff' />
                        </div>
                    } />
                </div>
            </div>
            <div className='container'>
                <div className='bg-[#35424b] p-3 min-h-[16rem] bg-started started-bg bg-no-repeat'>
                    <div className='flex gap-6 justify-between flex-wrap h-full relative z-[2]'>
                        <div className='flex flex-col gap-3 p-[2rem] justify-center'>
                            <h1 className='text-white text-[2.4rem]'>Join World's Leading Web & App Dev Community</h1>
                            <p className='text-white/70'>Millions of Web and App developers around the world showcase their portfolio work on Nework</p>
                        </div>
                        <div className='w-[24rem] flex justify-center items-center'>
                            <Button text={
                                <div className='flex items-center gap-2'>
                                    <h2 className='text-base'>Get Started</h2>
                                    <Svgs.Next fill='#000' />
                                </div>
                            } bg='bg-white' className='text-black hover:!text-black hover:!bg-white' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#FAFAFA]'>
                <div className='container py-[5rem]'>
                    <h1 className='font-semibold text-xl mb-[1.2rem]'>What our students have to say</h1>
                    <Swiper
                        className='testimonials' breakpoints={
                            {
                                640: {
                                    slidesPerView: 1,
                                },// when window width is >= 768px
                                1024: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 3,
                                },
                            }
                        } spaceBetween={20}>
                        <SwiperSlide>
                            <div className='bg-white p-[2rem] rounded flex flex-col justify-between gap-[2rem]'>
                                <p className='text-[#757575]'>Digistudi prepare people to carry out skills in the real world. Keep up the good work. What I have learned in this course, I will be able to apply in the real world.</p>
                                <div className='flex flex-col gap-3'>
                                    <div className='h-[2px] w-[2rem] rounded-lg bg-[#E9E9E9]'></div>
                                    <div>
                                        <h1 className='font-semibold text-lg'>Anas Shafi</h1>
                                        <p className='text-[#757575]'>Lahore</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white p-[2rem] rounded flex flex-col justify-between gap-[2rem]'>
                                <p className='text-[#757575]'>Digistudi prepare people to carry out skills in the real world. Keep up the good work. What I have learned in this course, I will be able to apply in the real world.</p>
                                <div className='flex flex-col gap-3'>
                                    <div className='h-[2px] w-[2rem] rounded-lg bg-[#E9E9E9]'></div>
                                    <div>
                                        <h1 className='font-semibold text-lg'>Anas Shafi</h1>
                                        <p className='text-[#757575]'>Lahore</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white p-[2rem] rounded flex flex-col justify-between gap-[2rem]'>
                                <p className='text-[#757575]'>Digistudi prepare people to carry out skills in the real world. Keep up the good work. What I have learned in this course, I will be able to apply in the real world.</p>
                                <div className='flex flex-col gap-3'>
                                    <div className='h-[2px] w-[2rem] rounded-lg bg-[#E9E9E9]'></div>
                                    <div>
                                        <h1 className='font-semibold text-lg'>Anas Shafi</h1>
                                        <p className='text-[#757575]'>Lahore</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-white p-[2rem] rounded flex flex-col justify-between gap-[2rem]'>
                                <p className='text-[#757575]'>Digistudi prepare people to carry out skills in the real world. Keep up the good work. What I have learned in this course, I will be able to apply in the real world.</p>
                                <div className='flex flex-col gap-3'>
                                    <div className='h-[2px] w-[2rem] rounded-lg bg-[#E9E9E9]'></div>
                                    <div>
                                        <h1 className='font-semibold text-lg'>Anas Shafi</h1>
                                        <p className='text-[#757575]'>Lahore</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <section>
                <div className='my-[2rem] container'>
                    <h2 className='text-center font-semibold text-[2.4rem]'>Our Latest Blogs</h2>
                    <div className='py-[2rem] blogs-slider'>
                        <Swiper
                            spaceBetween={20}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                // when window width is >= 640px
                                640: {
                                    slidesPerView: 1,
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                },

                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                [1, 11, , 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1,].map(ele => {
                                    return <SwiperSlide>
                                        <div className='rounded-lg bg-[url("https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")] min-h-[25rem] h-full relative overflow-hidden'>
                                            <div className='bg-[#00000079] w-full absolute p-5 flex flex-col text-white h-full text-left gap-4'>
                                                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2">
                                                    <p className="text-xs">18 Jun 2022</p>
                                                    <h2 className="font-semibold text-xl">Mobile App development Life Cycle
                                                        <br className="hidden lg:block" />
                                                        Steps</h2>
                                                    <p className="text-[#02FCFC] text-sm">Learn More</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Courses