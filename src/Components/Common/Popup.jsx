import React from 'react'
import Svgs from '../Svgs'
import Button from './Button'

const Popup = (props) => {
    return (
        <div className='fixed inset-0 z-[22212] flex items-center justify-center'>
            <div className='absolute inset-0 bg-black/30'></div>
            <div className='relative z-10 w-[40rem] rounded-3xl h-[30rem] bg-sprinkle bg-white gap-4 flex items-center flex-col justify-center'>
                <div>
                    <Svgs.PopupBadge />
                </div>
                <div>
                    <h1>You Earned Silver Badge Successfully !</h1>
                </div>
                <div>
                    <Button text='View Profile' onClick={() => {
                        props.setOpenPopup(false)
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Popup