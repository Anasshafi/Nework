import React, { useState } from 'react'
import Button from '../Components/Common/Button'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HomeCard from '../Components/Common/HomeCard'
import Svgs from '../Components/Svgs'
import Input from '../Components/Input'
import FormInput from '../Components/Common/FormInput'
import FormDescription from '../Components/Common/FormDescription'
import Dropwdown from '../Components/Common/Dropdown'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
    const [HomeSection, setHomeSection] = useState('All');
    const navigate = useNavigate();
    const [editTypeTech, setEditTypeTech] = useState(false)
    return (
        <>
            <Header />
            <div>
                <div className='h-[24rem] bg-gray-100'>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/profile-bg.png`} className="w-full h-full object-cover" />
                </div>
                <div className='container relative'>
                    <div className='absolute left-0 top-100 -translate-y-1/2'>
                        <div className='h-[8rem] w-[8rem] rounded-full border-[4px] border-white overflow-hidden'>
                            <img src="https://loremflickr.com/400/400" className="h-full w-full object-cover" />
                            <div className='absolute top-full right-0 -translate-x-0 -translate-y-full h-[3rem] w-[3rem] flex items-center justify-center rounded-full border-[4px] border-white bg-[#248489]'>
                                <Svgs.Camera />
                            </div>
                        </div>
                    </div>
                    <div className='pt-[3rem]'>
                        <div className='flex items-center justify-end gap-3'>
                            <Button text='Cancel' disabled onClick={() => {
                                navigate('/profile')
                            }} />
                            <Button text='Save' onClick={() => {
                                navigate('/profile')
                            }} />
                        </div>
                    </div>

                    <div className='flex flex-col gap-7 pt-[2rem]'>
                        <div className='px-4 py-3 border rounded-lg flex flex-col gap-4'>
                            <div className='flex flex-col gap-2 pb-[1rem]'>
                                <h1 className='text-xl'>
                                    Basic Information
                                </h1>
                                <p className='text-sm text-[#7B7B7B]'>Edit your basic information</p>
                            </div>
                            <div className='grid gap-3 lg:grid-cols-2'>
                                <FormInput title={'Full Name'} placeholder={'Enter Full Name'} />
                                <FormInput title={'Username'} placeholder={'Enter Username'} />
                            </div>
                            <FormInput title={'Location'} placeholder={'Enter Location'} />
                            <div className='grid gap-3 lg:grid-cols-2'>
                                <FormInput title={'Placeholder Text'} placeholder={'Enter Placeholder Text'} />
                            </div>
                            <FormDescription placeholder={'Add About'} title={'About'} />
                        </div>
                        <div className='px-4 py-3 border rounded-lg flex flex-col gap-4'>
                            <div className='flex justify-between items-center pb-[1rem]'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-xl'>
                                        Skills & Technologies
                                    </h1>
                                    <p className='text-sm text-[#7B7B7B]'>Edit and Add your skills and technologies</p>
                                </div>
                                <div className=''>
                                    <Button onClick={() => {
                                        setEditTypeTech(!editTypeTech)
                                    }} text={editTypeTech ? 'Save' : 'Add Skill'} />
                                </div>
                            </div>
                            <div className='grid lg:grid-cols-2 gap-4'>
                                <div className='flex items-center gap-4 justify-between p-4 rounded-lg border'>
                                    <div className='flex items-center gap-2'>
                                        <Svgs.React />
                                        <div className='flex flex-col gap-1'>
                                            <h1 className='text-lg'>React Native</h1>
                                            <p className='text-sm text-[#7B7B7B]'>Basic Level</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Dropwdown placeholder={'Basic Level'}
                                        options={[
                                            { value: '1', label: 'Basic' },
                                            { value: '2', label: 'Inter' },
                                            { value: '3', label: 'Expert' },
                                        ]}
                                        backgroundColor='#F3F3F3' />
                                    </div>
                                </div>
                            </div>
                            {
                                editTypeTech &&
                                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 pt-[1rem]'>
                                    <Dropwdown
                                    options={[
                                        { value: '1', label: 'Web Development' },
                                        { value: '2', label: 'App Development' },
                                        { value: '3', label: 'Wordpress' },
                                    ]}
                                    showTitle title={'Category'} placeholder='Select Category' />
                                    <Dropwdown
                                    options={[
                                        { value: '1', label: 'ReactJs' },
                                        { value: '2', label: 'NodeJs' },
                                        { value: '4', label: 'NextJs' },
                                        { value: '5', label: 'React Native' },
                                        { value: '6', label: 'Flutter' },
                                        { value: '7', label: 'Android' },
                                        { value: '8', label: 'Swift' },
                                    ]}
                                    showTitle title={'Skill & Technology'} placeholder='Select Skill & Technology' />
                                    <Dropwdown
                                     options={[
                                        { value: '1', label: 'Basic' },
                                        { value: '2', label: 'Inter' },
                                        { value: '3', label: 'Expert' },
                                    ]}
                                    showTitle title={'Skill Level'} placeholder='Select Skill Level' />
                                </div>
                            }
                        </div>

                        <div className='px-4 py-3 border rounded-lg flex flex-col gap-4 mb-[3rem]'>
                            <div className='flex flex-col gap-2 pb-[1rem]'>
                                <h1 className='text-xl'>
                                    Social Media
                                </h1>
                                <p className='text-sm text-[#7B7B7B]'>Edit and connect your social media accounts with Nework</p>
                            </div>
                            <div className='grid gap-6 lg:grid-cols-2'>
                                <FormInput title={'Github'} placeholder={'Enter Github URL'} />
                                <FormInput title={'Linked In'} placeholder={'Enter Linked In URL'} />
                                <FormInput title={'Facebook'} placeholder={'Enter Facebook URL'} />
                                <FormInput title={'Twitter'} placeholder={'Enter Twitter URL'} />
                                <FormInput title={'Instagram'} placeholder={'Enter Instagram URL'} />
                                <FormInput title={'Other'} placeholder={'http://'} />
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default EditProfile