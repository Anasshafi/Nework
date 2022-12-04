import React from 'react'
import Button from './Common/Button'
import Dropwdown from './Common/Dropdown'
import FormDescription from './Common/FormDescription'
import FormInput from './Common/FormInput'
import Footer from './Footer'
import Header from './Header'

const AskQuestion = () => {
    return (
        <>
            <Header />
            <div className='container py-[2rem]'>
                <div className='text-center flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold'>Ask a Question</h1>
                    <p className='text-[#7B7B7B] text-sm'>
                        Lorem Ipsum is simply dummy text of the printing
                        <br className='hidden md:block' />
                        and typesetting industry.
                    </p>
                </div>
                <div className='w-[80%] mx-auto flex flex-col gap-8'>
                    <FormInput title={'Question Title'} placeholder={'Type your question'} />
                    <FormDescription title={'Description'} />
                    <Dropwdown
                     options={[
                        { value: '1', label: 'Web Development' },
                        { value: '2', label: 'App Development' },
                        { value: '3', label: 'Wordpress' },
                    ]}
                    title={'Category'} placeholder={'Select Category'} padding_control='0.3rem 0.5rem !important' titleClass='font-semibold text-base' showTitle />
                    {/* <Dropwdown isMulti title={'Tools Used'} placeholder={'Select Multiple Tools'} padding_control='0.3rem 0.5rem !important' titleClass='font-semibold text-base' showTitle /> */}
                    <FormInput title={'Technologies'} placeholder={'Enter Used Technologies'} />

                    <Button text='Post A Question' className='w-full' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AskQuestion