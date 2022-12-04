import React from 'react'
import { useState } from 'react'
import Button from './Common/Button'
import CircleIcon from './Common/CircleIcon'
import FormInput from './Common/FormInput'
import FormInputUpload from './Common/FormInputUpload'
import Header from './Header'
import Svgs from './Svgs'

const JobDetail = () => {
    const [Apply, setApply] = useState(false)
    let data = [
        {
            icon: <Svgs.MailGray />,
            title: 'ahmad@gmail.com',
            type: 'Email'
        }, {
            icon: <Svgs.Code />,
            title: 'App development',
            type: 'Category'
        }, {
            icon: <Svgs.ExperienceBadge />,
            title: '3 - 5 Years',
            type: 'Experience'
        }, {
            icon: <Svgs.EmployementType />,
            title: 'Full Time',
            type: 'Employment Type'
        }, {
            icon: <Svgs.OnsiteLocation />,
            title: 'Onsite',
            type: 'Job Location'
        },
    ]
    return (
        <>
            <Header />
            <div className='container py-[2rem] flex flex-col gap-6'>
                <div className='rounded-lg'>
                    <div className='h-[9rem] rounded-t-lg bg-detail'></div>
                    <div className='border rounded-b-lg px-4 pb-4 pt-6'>
                        <div className='flex items-center gap-4 justify-between'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-semibold text-2xl'>Senior Android Developer</h1>
                                <p className='text-[#7B7B7B] text-sm'>
                                    Posted By
                                    <span className='font-semibold text-[#248489]'>Ahmad Raza</span>
                                </p>
                                <div className='flex items-center gap-3 text-sm text-[#7B7B7B]'>
                                    <div className='flex items-center gap-2'>
                                        <Svgs.Location_pin2 size='14' />
                                        <p>Lahore, Pakistan</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Svgs.SmallDot fill='#7B7B7B' />
                                        <p>14 Hours Ago</p>
                                    </div>
                                </div>
                            </div>
                            {
                                !Apply && <div>
                                    <Button text='Apply' onClick={
                                        () => {
                                            setApply(true)
                                        }
                                    } className='font-semibold px-8' />
                                </div>
                            }
                        </div>
                    </div>
                </div>

                {
                    !Apply ? (
                        <div className='grid lg:grid-cols-6 gap-6'>
                            <div className='lg:col-span-4'>
                                <div className='flex flex-col gap-6'>
                                    <div className='px-4 py-5 flex flex-col gap-3 border rounded-lg description-css'>
                                        <h1>About the Job</h1>
                                        <p>
                                            We are looking for an Android developer responsible for the development and maintenance of applications aimed at a vast number of diverse Android devices. Your primary focus will be the development of Android applications and their integration with back-end services. You will be working along-side other engineers and developers working on different layers of the infrastructure. Therefore, commitment to collaborative problem solving, sophisticated design, and creating quality products is essential.
                                        </p>
                                        <h2>Responsibilities</h2>
                                        <ul>
                                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quia beatae quos.</li>
                                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quia beatae quos.</li>
                                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quia beatae quos.</li>
                                        </ul>
                                        <p className='cursor-pointer w-fit !text-[#248489]'>---- See more</p>
                                    </div>
                                    <div className='px-4 py-5 flex flex-col gap-3 border rounded-lg'>
                                        <h1 className='text-xl'>Skills</h1>
                                        <div className='flex items-center gap-3 flex-wrap'>
                                            <Button text='Android' disabled />
                                        </div>
                                    </div>
                                    <div className='px-4 py-5 flex flex-col gap-3 border rounded-lg'>
                                        <h1 className='font-semibold text-xl'>About Employer</h1>
                                        <div className='flex items-center gap-4 justify-between'>
                                            <div className='flex items-center gap-3'>
                                                <div>
                                                    <img src='https://loremflickr.com/400/400' className='h-[4.5rem] w-[4.5rem] object-cover rounded-lg' />
                                                </div>
                                                <div>
                                                    <h1 className='font-semibold text-lg'>Ahmad Raza</h1>
                                                    <p className='text-[#7B7B7B] text-sm'>Senior Android Developer</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3 flex-wrap'>
                                                <Button text='View Profile' outline />
                                                <Button text='Follow' />
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-[#7B7B7B] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas velit possimus dolorum doloribus iusto eos consequuntur hic sit quos, eligendi nisi animi, odio illum deserunt placeat fuga vitae nam cumque suscipit sed beatae dicta ad excepturi tempora. Cum saepe, mollitia debitis, quidem neque corrupti explicabo at nesciunt, sint dignissimos omnis?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:col-span-2'>
                                <div className='flex flex-col gap-6'>
                                    <div className='px-4 py-5 flex flex-col gap-5 border rounded-lg'>
                                        <div className='flex flex-col gap-2'>
                                            <h1 className='font-semibold text-lg'>
                                                Rs 150,000 - Rs. 300,000
                                            </h1>
                                            <p className='text-[#7B7B7B]'>Avg Salary</p>
                                        </div>
                                        {
                                            data.map(item => {
                                                return <div className='flex items-center gap-4'>
                                                    <div>
                                                        <CircleIcon size='3.6rem' className='bg-[#F2F8FA] !rounded-2xl'>
                                                            {item.icon}
                                                        </CircleIcon>
                                                    </div>
                                                    <div className='flex flex-col '>
                                                        <h1 className='font-semibold'>{item.title}</h1>
                                                        <p className='text-sm text-[#7B7B7B]'>{item.type}</p>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className='px-4 py-5 flex flex-col gap-5 border rounded-lg'>
                                        <h1 className='font-semibold text-xl'>Related Jobs</h1>
                                        <div className='flex items-center gap-4'>
                                            <img src="https://loremflickr.com/400/400" className="h-[4rem] w-[4rem] rounded-lg object-cover" />
                                            <div>
                                                <h1 className='font-semibold text-lg'>Senior Android Developer</h1>
                                                <p className="text-[#7B7B7B] text-sm">
                                                    Posted By &nbsp;
                                                    <span className="font-semibold text-[#248489]">
                                                        Ahmad Raza
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : <>
                        <div className='container !w-[80%] flex flex-col gap-6'>
                            <div className='text-center flex flex-col gap-3'>
                                <h1 className='text-2xl font-semibold'>Apply Job</h1>
                                <p className='text-[#7B7B7B] text-sm'>
                                    Lorem Ipsum is simply dummy text of the printing
                                    <br className='hidden md:block' />
                                    and typesetting industry.
                                </p>
                            </div>
                            <FormInput title={'Email Address'} placeholder={'Enter your email address'} />
                            <FormInput title={'Contact Address'} placeholder={'Enter your Contact Address'} />
                            <FormInputUpload title={'Your Resume'} placeholder={'Atatch Resume'} />
                            <Button text='Apply Now' className='!py-3' />
                        </div>
                    </>
                }


            </div>
        </>
    )
}

export default JobDetail