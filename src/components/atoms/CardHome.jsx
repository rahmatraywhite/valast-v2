import React from 'react';

export const CardHome = (props) => {
  const { title, text, img } = props;
  return (
    <div className="bg-[#EAECF0] p-8 flex flex-col items-center rounded-xl justify-center">
      <img className="w-[80px] h-[80px]" src={img} alt={img} />
      <p className="text-2xl font-semibold leading-6 text-center w-[311px] mt-8 mb-4 text-[#1D2939]">{title}</p>
      <p className="text-[#667085] text-base leading-6 w-[311px] text-center">{text}</p>
    </div>
  );
};
