import React from 'react'
import Button from './Common/Button'
import Dropwdown from './Common/Dropdown'
import FormDescription from './Common/FormDescription'
import FormInput from './Common/FormInput'
import FormUploadMedia from './Common/FormUploadMedia.jsx'
import Footer from './Footer'
import Header from './Header'

const UploadPortfolio = () => {
    return (
        <>
            <Header />
            <div className='container py-[2rem]'>
                <div className='text-center flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold'>Uplaod Portfolio</h1>
                    <p className='text-[#7B7B7B] text-sm'>
                        Lorem Ipsum is simply dummy text of the printing
                        <br className='hidden md:block' />
                        and typesetting industry.
                    </p>
                </div>
                <div className='my-[2rem] flex flex-col gap-8 w-[70%] mx-auto'>
                    <FormInput title='Project Title' placeholder='Type ad title to post' />
                    <FormDescription title='Project Description' />
                    <Dropwdown
                     options={[
                        { value: '1', label: 'Web Development' },
                        { value: '2', label: 'App Development' },
                        { value: '3', label: 'Wordpress' },
                    ]}
                    placeholder={'Select Category'} padding_control='0.3rem 0.5rem !important' titleClass='font-semibold text-base' title={'Project Category'} showTitle />
                    {/* <Dropwdown isMulti placeholder={'Select Multiple Tools'} padding_control='0.3rem 0.5rem !important' titleClass='font-semibold text-base' title={'Tools Used'} showTitle /> */}
                    <FormInput title={'Technologies'} placeholder={'Enter Used Technologies'} />

                    <div className='grid lg:grid-cols-2 gap-4'>
                        <FormInput title='Project Link  (Optional)' placeholder='Enter Project Link' />
                        <FormInput title='Github Link (Optional)' placeholder='Enter Github Link' />
                    </div>
                    <FormUploadMedia />
                    {/* <FormInput title='Tags' placeholder='Enter atleast 3 Tags' /> */}

                    <Button className='py-3 rounded-lg font-semibold' text='Upload Portfolio' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UploadPortfolio