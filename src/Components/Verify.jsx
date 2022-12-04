import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormCheckBox from './Common/FormCheckBox'
import FormInputUpload from './Common/FormInputUpload'
import Footer from './Footer'
import Header from './Header'
import Svgs from './Svgs'

const Verify = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div className='my-[3rem]'>
                <div className='text-center flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold'>Verify Your Account</h1>
                    <p className='text-[#7B7B7B] text-sm'>
                        Lorem Ipsum is simply dummy text of the printing
                        <br className='hidden md:block' />
                        and typesetting industry.
                    </p>
                </div>
                <div className='container !w-[80%] flex flex-col gap-6'>
                    <div className='p-8 flex flex-col gap-5 border rounded-lg'>
                        <h1 className='text-xl'>Educational Documents</h1>
                        <p className='text-[#7B7B7B]'>Add educational documents to verify your Account</p>
                        <div className='flex flex-col gap-2'>
                            <FormInputUpload title={'Intermediate Certificate'} placeholder={'Atatch Intermediate Certificate'} />
                            <FormCheckBox title={'Currently Enrolled '} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <FormInputUpload title={'Bacholers Certificate'} placeholder={'Atatch Becholers Degree'} />
                            <FormCheckBox title={'Currently Enrolled '} />
                        </div>
                    </div>

                    {/* <div className='p-8 flex flex-col gap-5 border rounded-lg'>
                        <h1 className='text-xl'>Skill Test</h1>
                        <p className='text-[#7B7B7B]'>Take Quiz Test to get Skill Badge</p>
                        <FormInputUpload onClick={() => {
                            navigate('/quiz')
                        }} className={'border-[#579FAE] bg-[#F2F8FA] !p-4'} showTitle={false} title={'Start Test'} placeholder={
                            <div className='flex items-center gap-3'>
                                <Svgs.Flutter size='32' />
                                <div>
                                    <h1 className='text-lg text-black'>Flutter</h1>
                                    <p className='text-sm'>Basic Level</p>
                                </div>
                            </div>
                        } />
                    </div> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Verify