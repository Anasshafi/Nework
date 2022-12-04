import React, { useState } from 'react'
import JobCard from './Common/JobCard'
import Footer from './Footer'
import Header from './Header'

const MyJobs = () => {
    const [HomeSection, setHomeSection] = useState('All')
    return (
        <>
            <Header />
            <div className='container py-[2rem] pt-[5rem] overflow-hidden'>
                <div className='border w-fit mx-auto px-[2rem] py-[0.5rem] rounded-md flex items-center gap-5 lg:gap-[3rem] text-lg text-[#35424B] justify-center overflow-auto whitespace-nowrap flex-wrap'>
                    <p className={`cursor-pointer ${HomeSection == "All" && "text-[#248489]"}`} onClick={() => { setHomeSection('All') }}>Applied Jobs</p>
                    <p className={`cursor-pointer ${HomeSection == "Mobile" && "text-[#248489]"}`} onClick={() => { setHomeSection('Mobile') }}>Posted Jobs</p>
                    <p className={`cursor-pointer ${HomeSection == "Website" && "text-[#248489]"}`} onClick={() => { setHomeSection('Website') }}>
                        <div className='flex items-center gap-1'>
                            <p>Invites</p>
                            <div className='h-[1rem] w-[1rem] rounded-full bg-[#248489] text-white text-xs flex items-center justify-center'>4</div>
                        </div>
                    </p>
                </div>
                <div className='flex flex-col gap-5'>
                    {
                        HomeSection == 'All' &&
                        <div className='slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]'>
                            <JobCard applied />
                        </div>
                    }

                    {
                        HomeSection == 'Mobile' &&
                        <div className='slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]'>
                            <JobCard posted />
                        </div>
                    }

                    {
                        HomeSection == 'Website' &&
                        <div className='slide-in-bottom grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-[3rem]'>
                            <JobCard invites />
                        </div>
                    }

                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyJobs