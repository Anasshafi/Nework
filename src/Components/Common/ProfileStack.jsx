import React from 'react'

const ProfileStack = (props) => {
    return (
        <div className='flex items-center relative'>
            {
                props.data.slice(0, 4).map((item, i) => {
                    return <div className={`h-[1.6rem] w-[1.6rem] rounded-full overflow-hidden border-2 border-[white] relative`} style={{
                        left: `${i == 0 ? '' : -(0.6 * i) + 'rem'}`
                    }}>
                        <img src={item.img} className="w-full h-full object-cover" />
                    </div>
                })
            }
            {
                props.data.length > 4 &&
                <p className='relative text-sm text-[#3A3A3A]' style={{ left: '-1.7rem' }}>
                    +{props.data.length - 4} Applications
                </p>
            }
        </div>
    )
}

ProfileStack.defaultProps = {
    data: [
        {
            img: 'https://loremflickr.com/400/400',
        },
        {
            img: 'https://loremflickr.com/400/400',
        },
        {
            img: 'https://loremflickr.com/400/400',
        },
        {
            img: 'https://loremflickr.com/400/400',
        },
        {
            img: 'https://loremflickr.com/400/400',
        },
        {
            img: 'https://loremflickr.com/400/400',
        },
        {
            img: 'https://loremflickr.com/400/400',
        },
        {
            img: 'https://loremflickr.com/400/400',
        },
        {
            img: 'https://loremflickr.com/400/400',
        },
        {
            img: 'https://loremflickr.com/400/400',
        },
    ]
}

export default ProfileStack