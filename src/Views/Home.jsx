import React, { useRef, useState } from "react";
import Button from '../Components/Common/Button'
import Header from '../Components/Header'
import HomeCard from "../Components/Common/HomeCard";
import SimpleInput from '../Components/Common/SimpleInput'
import Svgs from '../Components/Svgs'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Footer from "../Components/Footer";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()
    const [HomeSection, setHomeSection] = useState('All')
    const Home_Card_Data = [
        { 'img': '/assets/images/card-img-1.jpg' },
        { 'img': '/assets/images/card-img-2.jpg' },
        { 'img': '/assets/images/card-img-3.jpg' },
        { 'img': '/assets/images/card-img-4.jpg' },
        { 'img': '/assets/images/card-img-5.jpg' },
        { 'img': '/assets/images/card-img-6.jpg' },
        { 'img': '/assets/images/card-img-7.jpg' },
        { 'img': '/assets/images/card-img-8.jpg' },
        { 'img': '/assets/images/card-img-9.jpg' },
        { 'img': '/assets/images/card-img-10.jpg' },
        { 'img': '/assets/images/card-img-12.jpg' },
        { 'img': '/assets/images/card-img-13.jpg' },
        { 'img': '/assets/images/card-img-14.jpg' },
        { 'img': '/assets/images/card-img-15.jpg' },
        { 'img': '/assets/images/card-img-16.jpg' },
    ]
    return (
        <>
            <Header login={false} />
            {/* Banner */}
            <section>
                <div className='h-[34rem]'>
                    <div className='flex items-center gap-[5rem] h-full'>
                        <div className='flex flex-col gap-5 ml-[1rem] lg:ml-[6rem]'>
                            <h1 className='text-[2.8rem] text-[#333333] font-semibold tracking-[0.08rem]'>Explore World's Leading
                                <br className='hidden lg:block' />
                                Web & App Portfolio</h1>
                            <p className='text-sm text-[#666666]'>Millions of Web and App developers around the world showcase
                                <br className='hidden lg:block' />
                                their portfolio work on Nework - the home to the world's best Web
                                <br className='hidden lg:block' />
                                and App professionals.</p>
                            <div className='flex items-center gap-5'>
                                <Button text='Get Started' onClick={() => {
                                    navigate('/register')
                                }} />
                                <Button outline={true} text='Explore Now' onClick={() => {
                                    navigate('/discover')
                                }} />
                            </div>
                        </div>
                        <div className='flex-1 h-full'>
                            <div className='relative w-full'>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/banner-bg-g.png`} className="h-[34rem] absolute top-0 right-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner */}

            <section>
                <div className='py-[2rem] container mx-auto w-[86%]'>
                    <div className='flex lg:items-center lg:gap-[4rem] gap-4 lg:flex-row flex-col'>
                        <h2 className='font-bold text-[#333333] text-[2rem]'>How It Works?</h2>
                        <p className='text-[#666666] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae in officiis cupiditate <br /> ratione rem, velit totam cumque voluptas quia provident nisi. Dolorum.</p>
                    </div>
                </div>
            </section>

            <section className='relative'>
                <div className='flex gap-5 lg:gap-[3rem] container py-[2rem] lg:flex-row flex-col'>
                    <div className='flex-1 rounded-xl p-[1.5rem] flex flex-col justify-center how-it-works bg-[#FEFEFE]'>
                        <h1 className='text-[#BF0142] font-bold text-[3rem]'>01</h1>
                        <h2 className='font-semibold text-lg'>Register Yourself</h2>
                        <p className='text-[#666666] text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className='flex-1 rounded-xl p-[1.5rem] flex flex-col justify-center how-it-works bg-[#FEFEFE]'>
                        <h1 className='text-[#CCCCCC] font-bold text-[3rem]'>02</h1>
                        <h2 className='font-semibold text-lg'>Register Yourself</h2>
                        <p className='text-[#666666] text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className='flex-1 rounded-xl p-[1.5rem] flex flex-col justify-center how-it-works bg-[#FEFEFE]'>
                        <h1 className='text-[#CCCCCC] font-bold text-[3rem]'>03</h1>
                        <h2 className='font-semibold text-lg'>Register Yourself</h2>
                        <p className='text-[#666666] text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <img src={`${process.env.PUBLIC_URL}/assets/images/how-it-works.png`} className="absolute object-contain h-[12rem] right-0 top-1/2 z-[-1] lg:block hidden" />
            </section>

            <section>
                <div className='container py-[2rem] pt-[5rem]'>
                    <div className='flex items-center gap-6 text-lg text-[#A6A3A3] lg:pb-0 pb-[1rem] lg:justify-center overflow-auto whitespace-nowrap'>
                        <p className={`cursor-pointer ${HomeSection == "All" && "text-black"}`} onClick={() => { setHomeSection('All') }}>All</p>
                        <p className={`cursor-pointer ${HomeSection == "Mobile" && "text-black"}`} onClick={() => { setHomeSection('Mobile') }}>Mobile App Projects</p>
                        <p className={`cursor-pointer ${HomeSection == "Website" && "text-black"}`} onClick={() => { setHomeSection('Website') }}>Website Projects</p>
                        <p className={`cursor-pointer ${HomeSection == "Wordpress" && "text-black"}`} onClick={() => { setHomeSection('Wordpress') }}>Wordpress Projects</p>
                    </div>
                    {
                        HomeSection == 'All' && <div className='slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]'>
                            {
                                Home_Card_Data.map(data => {
                                    return <HomeCard img={data.img} />
                                })
                            }
                        </div>
                    }
                    {
                        HomeSection == 'Mobile' && <div className='slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]'>
                            {
                                Home_Card_Data.map(data => {
                                    return <HomeCard img={data.img} />
                                })
                            }
                        </div>
                    }
                    {
                        HomeSection == 'Website' && <div className='slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]'>
                            {
                                Home_Card_Data.map(data => {
                                    return <HomeCard img={data.img} />
                                })
                            }
                        </div>
                    }
                    {
                        HomeSection == 'Wordpress' && <div className='slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]'>
                            {
                                Home_Card_Data.map(data => {
                                    return <HomeCard img={data.img} />
                                })
                            }
                        </div>
                    }
                    <div className='flex items-center justify-center'>
                        <Button text='Explore More' />
                    </div>
                </div>
            </section>

            <section>
                <div className='container py-[2rem]'>
                    <div className='flex flex-col gap-5 text-center'>
                        <h1 className='text-[#333333] font-bold text-[2.1rem]'>Top Rated Developers</h1>
                        <p className='text-[#666666] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            <br className='hidden md:block' />
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-[1rem]'>
                            {
                                [0, 1, 0, 0, 0, 0,].map(ele => {
                                    return <div className='rounded-lg bg-[url("https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")] min-h-[20rem] relative overflow-hidden rated_p'>
                                        <div className='bg-[#000000A6] p-5 flex flex-col text-white h-full text-left gap-4 rated'>
                                            <div>
                                                <h1 className='text-2xl font-bold'>anas Shafi</h1>
                                                <p className='text-sm opacity-75'>Senior Front End Developer</p>
                                            </div>
                                            <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.ectetur adipisicing elit. Deleniti ut velit voluptas, blanditiis illo, eaque sit oit, amet consectetur adipisicing elit.ectetur adipisicing elit. Deleniti ut velit voluptas, blanditiis illo, eaque sit obcaecati laudantium vel aperiam debitis quaedipisicing elit. Deleniti ut velit voluptas, blanditiis illo, eaque sit obcaecati laudantium vel aperiam debitis quaerat?</p>
                                            <div className='flex items-center justify-between gap-4'>
                                                <div className='flex items-center gap-3'>
                                                    <Svgs.Flutter />
                                                    <Svgs.React />
                                                    <Svgs.Andriod />
                                                </div>
                                                <button className='rounded-lg border border-white flex items-center gap-4 px-4 py-2 text-sm'>
                                                    <span>Explore</span>
                                                    <Svgs.Next />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='my-[2rem] container'>
                    <div className='flex flex-col gap-3 text-center'>
                        <h2 className='font-semibold text-[2.4rem]'>Contact Us</h2>
                        <p className='text-[#666666] text-sm'>Have a project in mind that you think we'd be a great fit for it?
                            <br className='lg:block hidden' />
                            We'd love to know what you're thinking</p>
                    </div>
                    <div className='flex flex-col gap-6 py-[2rem]'>
                        <div className='flex flex-wrap lg:flex-row flex-col items-center gap-6'>
                            <SimpleInput label='First Name' placeholder='Input your first name in here' />
                            <SimpleInput label='Last Name' placeholder='Input your last name in here' />
                            <SimpleInput type='email' label='Email Address' placeholder='Input your email address in here' />
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <h2 className='font-semibold text-[#333333]'>Messages</h2>
                            <textarea rows={7} className='resize-none w-full focus:border-[#248489] bg-[#F7F7F7] border border-transparent placeholder:text-[#999999] text-sm rounded-md outline-none px-4 py-2 transition-all' placeholder='Write your messages in here'></textarea>
                        </div>
                        <div className='flex items-start justify-center'>
                            <Button text='Send Messages' />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='my-[2rem] container'>
                    <h2 className='text-center font-semibold text-[2.4rem]'>Our Latest Blogs</h2>
                    <div className='py-[2rem] blogs-slider'>
                        <Swiper
                            spaceBetween={20}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={true}
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
                            modules={[Pagination, Autoplay]}
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

export default Home