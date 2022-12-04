import React from 'react'

const OnBoarding = (props) => {
    console.log();
    return (
        <div className='min-h-[50vh] lg:min-h-[100vh] grid lg:grid-cols-2'>
            <div className='h-full p-[3rem] flex flex-col lg:order-1 order-2'>
                {props.left}
            </div>
            <div className='order-1 lg:order-2 lg:h-[100vh] bg-[#35424B] lg:sticky top-0 flex items-center justify-center signup-bg bg-contain bg-no-repeat bg-right py-[4rem]'>
                <div className='flex flex-col gap-4 lg:text-left text-center px-[2rem]'>
                    {props.right}
                </div>
            </div>
        </div>
    )
}

export default OnBoarding