import React from 'react'

const Rate = (props) => {
    const { number, text } = props
  return (
    <div className='flex items-center justify-center mx-auto space-x-5'>
        <div className='bg-primary hidden md:block h-[45px] rounded-[30px] w-[8px]'></div>
        <div className='flex flex-col'>
            <p className='text-[42px] font-extrabold leading-[64px] text-center text-[#1D2939]'>{number}</p>
            <p className='text-base leading-6 text-[#667085] text-center'>{text}</p>
        </div>
    </div>
  )
}

export default Rate