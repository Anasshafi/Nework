import React from 'react'

const PhoneInput = (props) => {
    return (
        <div className="relative w-full">
            <div className='relative'>
                <input
                    type="number"
                    id="floating_outlined"
                    className="block border px-2.5 pb-2.5 pl-16 pt-4 transition-all w-full text-sm placeholder:text-xs text-gray-900 bg-transparent rounded-md border-[#E4EBF3] appearance-none outline-none focus:border-[#35424B] peer"
                    placeholder='1122334455' />
                <select className="absolute left-2 top-1/2 outline-none -translate-y-[40%] bg-transparent text-sm focus:text-gray-900 text-[#a6acb1]" id="">
                    <option value="+92">+92</option>
                    <option value="+92">+92</option>
                    <option value="+92">+92</option>
                    <option value="+92">+92</option>
                    <option value="+92">+92</option>
                </select>
            </div>

            <label
                htmlFor="floating_outlined"
                className="absolute text-sm duration-300 transform z-10 origin-[0] bg-white px-2 text-[#35424B] -translate-y-4 top-2  scale-[.85] left-2">Phone Number</label>
        </div>
    )
}

PhoneInput.defaultProps = {
    label: 'Please use "label" prop!',
    placeholder: 'Please use "placeholder" prop!',

}

export default PhoneInput