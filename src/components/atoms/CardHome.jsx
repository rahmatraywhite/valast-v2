import React, { useEffect } from 'react';
import Aos from 'aos';
export const CardHome = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  const { title, text, img } = props;
  return (
    <div
      data-aos="fade-up"
      className="bg-[#3C80F2] bg-opacity-[2%] p-8 flex flex-col items-center border border-[#EAECF0] rounded-xl justify-center">
      <img className="w-[80px] h-[80px]" src={img} alt={img} />
      <p className="text-[22px] font-semibold leading-6 text-center w-[311px] mt-8 mb-4 text-[#1D2939]">
        {title}
      </p>
      <p className="text-[#667085] text-base leading-6 w-[311px] text-center">
        {text}
      </p>
    </div>
  );
};
