import React from 'react'
import Button from './Common/Button'
import FormDescription from './Common/FormDescription'
import FormInput from './Common/FormInput'
import Footer from './Footer'
import Header from './Header'
import Input from './Input'
import Svgs from './Svgs'

const QuestionDetail = () => {
    return (
        <>
            <Header />
            <div className="container py-[2rem] flex flex-col gap-5">
                <div className='border p-4 rounded-xl flex flex-col gap-4'>
                    <h1 className='font-semibold text-lg'>
                        Can you force a React component to rerender without calling setState?
                    </h1>
                    <div className="flex items-center gap-3">
                        <div>
                            <img src="https://loremflickr.com/400/400" className="h-[4rem] w-[4rem] rounded-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold text-sm text-[#7B7B7B]">
                                Posted By <span className="text-[#248489]">Ahmad Raza</span>
                            </p>
                            <p className="text-[#7B7B7B] text-xs">1 day ago</p>
                        </div>
                    </div>
                    <p className='text-[#7B7B7B] text-sm'>
                        So I guess my question is: do React components need to have state in order to rerender? Is there a way to force the component to update on demand without changing the state? …
                    </p>
                </div>
                <div>
                    <h1 className='text-[#248489]'>03 Answers</h1>
                </div>
                <div>
                    <div className="flex items-center gap-3">
                        <div>
                            <div className='h-[4rem] w-[4rem] rounded-full border-[#7090E8] border relative'>
                                <img src="https://loremflickr.com/400/400" className="h-full w-full object-cover rounded-full" />
                                <div className='absolute top-0 right-0 translate-x-[20%]'>
                                    <Svgs.Verified size='22' />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className='flex items-center gap-3'>
                                <p className="font-semibold text-sm text-[#35424B]">
                                    Anas Shafi
                                </p>
                                <Button text='Best Answer' className='rounded-full !bg-[#D9FEF7] text-[#00725C] border-none font-semibold' />
                            </div>
                            <p className="text-[#7B7B7B] text-xs">1 day ago</p>
                        </div>
                    </div>
                </div>
                <p className='text-[#7B7B7B] text-sm'>You can use the FlutterForegroundTask plugin for that (working for me)</p>
                <div className='flex flex-col gap-3'>
                    <div className='px-4 py-3 bg-[#F2F8FA]'>
                        <code className='text-sm'>
                            FlutterForegroundTask.minimizeApp(); <br />
                            await Future.delayed(Duration(seconds: 2)); <br />//making sure the app minimized FlutterForegroundTask.launchApp(); <br />
                            await Future.delayed(Duration(seconds: 4)); <br />//making sure the app resumed await tester.pumpAndSettle(); <br />
                            await Future.delayed(Duration(seconds: 3)); <br />
                        </code>
                    </div>
                    <div className='flex items-center gap-4 text-sm'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <Svgs.ThumbsUp />
                            <p className='text-[#248489]'>2 Likes</p>
                        </div>
                        {/* <p className='text-[#7B7B7B] cursor-pointer'>Reply</p> */}
                    </div>
                </div>

                <FormDescription placeholder={'Write Your Answer'} title='Enter Answer' />
                <div className='flex items-center justify-end'>
                    <Button text='Post Answer' className='font-semibold' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default QuestionDetail