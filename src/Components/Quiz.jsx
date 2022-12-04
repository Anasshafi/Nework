import React from 'react'
import { useState } from 'react'
import Button from './Common/Button'
import QuizOption from './Common/QuizOption'
import Footer from './Footer'
import Header from './Header'
import Svgs from './Svgs'
import Popup from './Common/Popup'

const Quiz = () => {
    const [OpenPopup, setOpenPopup] = useState(false)
    return (
        <>
            <Header />
            <div className='container flex flex-col gap-6 py-[2rem]'>
                <div className='w-[80%] mx-auto border rounded-lg pb-[1rem]'>
                    <div className='flex items-center gap-4 justify-between p-5 flex-wrap'>
                        <div className='flex items-center gap-4'>
                            <Svgs.Flutter size='38' />
                            <div>
                                <h1 className=''>React Native</h1>
                                <p className='text-[#7B7B7B] text-sm'>Basic Level</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 text-[#7B7B7B]'>
                            <p>Attempt</p>
                            <p className='text-[#35424B]'>1</p>
                            <p>of</p>
                            <p>3</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1><span className='text-xl text-[#248489]'>25</span> Mins</h1>
                            <h1>:</h1>
                            <h1><span className='text-xl text-[#248489]'>25</span> Mins</h1>
                        </div>
                    </div>
                    <div className='flex items-center lg:justify-around justify-start gap-4 bg-[#F2F8FA] text-[#7B7B7B] px-4 py-3 overflow-auto'>
                        <p className='text-[#248489]'>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                        <p>12</p>
                        <p>13</p>
                        <p>14</p>
                        <p>15</p>
                        <p>16</p>
                        <p>17</p>
                        <p>18</p>
                        <p>19</p>
                        <p>20</p>
                    </div>
                    <div className='p-5 flex flex-col gap-4'>
                        <h1>6. In which condition is the React.js Lifecycle method static getDerivedSateFromProps(props, state) is called?</h1>
                        <QuizOption option='A' text='When the state of the component is updated' />
                        <QuizOption active option='B' text='When the state of the component is updated' />
                        <QuizOption option='C' text='When the state of the component is updated' />
                        <QuizOption option='D' text='When the state of the component is updated' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button text='Proceed to Continue' className='!py-3' onClick={() => {
                            setOpenPopup(!OpenPopup)
                        }} />
                    </div>
                </div>
            </div>
            {
                OpenPopup && <Popup setOpenPopup={setOpenPopup} />
            }
            <Footer />
        </>
    )
}

export default Quiz