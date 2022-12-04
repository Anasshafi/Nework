import React from 'react'

const Input = (props) => {
    return (
        <div className="relative w-full">
            <input
                type={props.type ? props.type : 'text'}
                id="floating_outlined"
                className={`block border px-2.5 pb-2.5 pt-4 transition-all w-full text-sm placeholder:text-xs text-gray-900 bg-transparent rounded-md border-[#E4EBF3] appearance-none outline-none focus:border-[#35424B] peer ${props.className}`}
                placeholder={props.placeholder} />

            <label
                htmlFor="floating_outlined"
                className="absolute text-sm duration-300 transform z-10 origin-[0] bg-white px-2 text-[#35424B] -translate-y-4 top-2  scale-[.85] left-2">{props.label}</label>

        </div>
    )
}

Input.defaultProps = {
    label: 'Please use "label" prop!',
    placeholder: 'Please use "placeholder" prop!',

}

export default Input