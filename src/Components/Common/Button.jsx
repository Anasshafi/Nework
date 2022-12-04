import React from 'react'

const Button = (props) => {
    return (
        <>
            {
                props.outline ? (
                    <button
                        onClick={props.onClick}
                        className={`py-2 px-5 text-sm border border-[#248489] hover:bg-[#248489] hover:text-white transition-all rounded-md text-[#248489] ${props.className && props.className}`
                        }>
                        {props.text}
                    </button>
                ) : !(props.disabled) ? (
                    <button
                        onClick={props.onClick}
                        className={`py-2 px-5 text-sm ${props.bg ? props.bg : 'bg-[#248489]'} ${!props.noHover && 'hover:bg-transparent'} border border-[#248489] ${!props.noHover && 'hover:text-[#248489]'} transition-all rounded-md ${props.color ? props.color : 'text-white'} ${props.className && props.className}`
                        }>
                        {props.text}
                    </button>
                ) : <button
                    onClick={props.onClick}
                    className={`py-2 px-5 text-sm bg-[#F2F2F2] text-[#7C7C7C]  border border-[#F2F2F2] rounded-md ${props.className && props.className}`
                    }>
                    {props.text}
                </button>
            }
        </>
    )
}

Button.defaultProps = {
    text: 'Enter "Text" Prop!',
    noHover: false,
}

export default Button