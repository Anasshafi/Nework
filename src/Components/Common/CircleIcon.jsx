import React from 'react'

const CircleIcon = (props) => {
    return (
        <div style={{
            height: props.size ? props.size : '2.5rem',
            width: props.size ? props.size : '2.5rem',
        }} className={`flex items-center justify-center rounded-full shadow-md bg-white p-2 ${props.className}`}>
            {props.children}
        </div>
    )
}

export default CircleIcon