import React, { useState } from 'react'
import Dropwdown from './Common/Dropdown'
import CommunityCard from './Common/CommunityCard.jsx'
import Header from './Header'
import Svgs from './Svgs'
import Button from './Common/Button'
import Footer from './Footer'

const Community = () => {
    const [HomeSection, setHomeSection] = useState('All')
    return (
        <>
            <Header />
            <div className="container pt-[2rem] flex flex-col gap-5">
                <div className='text-center h-[24rem] lg:h-[20rem] rounded-lg bg-cover bg-find-work text-white w-full flex justify-center flex-col gap-4 p-3'>
                    <h1 className='font-extrabold text-[1.8rem] lg:text-[2.2rem]'>
                        A public platform building the definitive <br className='md:block hidden' /> collection of coding questions & answers
                    </h1>
                    <div className='pt-[1rem] w-[90%] lg:w-[80%] mx-auto'>
                        <div className='px-4 py-2 rounded-md bg-white flex items-center gap-4 lg:flex-row flex-col'>
                            <div className='flex-1 flex items-center gap-3'>
                                <div>
                                    <div className='flex items-center justify-center h-[2.8rem] w-[2.8rem] bg-[#248489] rounded-full'>
                                        <Svgs.Search />
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <input type="text" className='text-[#35424B] outline-none p-3 rounded-md border-transparent border focus:border-gray-200 w-full' placeholder='Search Questions By category, title, skill' />
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Dropwdown 
                                 options={[
                                    { value: '1', label: 'Web Development' },
                                    { value: '2', label: 'App Development' },
                                    { value: '3', label: 'Wordpress' },
                                ]}
                                placeholder={'By Category'} backgroundColor='#F2F2F2' />
                                <Dropwdown placeholder={'By Location'} backgroundColor='#F2F2F2' />
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className='py-[2rem] pt-[5rem] overflow-hidden'>
                        <div className='border w-fit mx-auto px-[2rem] py-[0.5rem] rounded-md flex items-center gap-5 lg:gap-[3rem] text-lg text-[#35424B] justify-center overflow-auto whitespace-nowrap flex-wrap'>
                            <p className={`cursor-pointer ${HomeSection == "All" && "text-[#248489]"}`} onClick={() => { setHomeSection('All') }}>All</p>
                            <p className={`cursor-pointer ${HomeSection == "Mobile" && "text-[#248489]"}`} onClick={() => { setHomeSection('Mobile') }}>Mobile App Projects</p>
                            <p className={`cursor-pointer ${HomeSection == "Website" && "text-[#248489]"}`} onClick={() => { setHomeSection('Website') }}>Website Projects</p>
                            <p className={`cursor-pointer ${HomeSection == "Wordpress" && "text-[#248489]"}`} onClick={() => { setHomeSection('Wordpress') }}>Wordpress Projects</p>
                        </div>
                        <div className='flex flex-col gap-5 my-[2rem] mx-auto w-[85%]'>
                            {
                                HomeSection == 'All' &&
                                <div className='slide-in-bottom'>
                                    <CommunityCard />
                                </div>
                            }
                            {
                                HomeSection == 'Mobile' &&
                                <div className='slide-in-bottom'>
                                    <CommunityCard />
                                </div>
                            }
                            {
                                HomeSection == 'Website' &&
                                <div className='slide-in-bottom'>
                                    <CommunityCard />
                                </div>
                            }
                            {
                                HomeSection == 'Wordpress' && <div className=''>
                                    <div className='mx-auto w-fit py-[2rem]'>
                                        <Svgs.NotFound />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </section>
                <div className='flex items-center justify-center mb-[2rem]'>
                    <Button text={
                        <div className='flex items-center gap-1'>
                            <Svgs.LoadMore />
                            <p>Load More</p>
                        </div>
                    } />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Community