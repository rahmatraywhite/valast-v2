import React from 'react';

const CardTestimonial = (props) => {
    const { image, name, position, text } = props
  return (
    <div className='p-5 border border-[#D0D5DD] rounded-xl'>
        <div className='flex gap-3 items-center'>
            <img src={image} alt="user" />
            <div>
                <p className='text-[#1A1A1A] text-[19px] font-medium'>{name}</p>
                <p className='text-[#667085] text-sm'>{position}</p>
            </div>
        </div>
        <p className='mt-5 text-[#667085] text-sm'>{text}</p>
    </div>
  )
}

export default CardTestimonial