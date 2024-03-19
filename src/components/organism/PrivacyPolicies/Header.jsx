import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import HeaderImg from '../../../assets/images/privacy-right.svg';
import HeaderLeft from '../../../assets/images/header-term.svg';
import Aos from 'aos';
import { LanguageContext } from '../../../utils/LanguageContext';
import Button from '../../atoms/Button';

const Header = () => {
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    Aos.init();
  });
  return (
    <div id="home" className="w-full h-[495px] py-2  bg-[#3C80F2]">
      <img src={HeaderLeft} className="absolute" alt="header Valast ID" />
      <div className="flex mt-3 md:my-[30px] max-w-7xl mx-auto justify-center md:justify-between p-3 md:p-0 flex-col md:flex-row md:items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="w-full md:w-1/2 flex flex-col justify-center md:mr-5">
          <h1 className="text-[#ffffff] font-extrabold leading-8 md:leading-[64px] text-2xl md:text-[45px]">
            Kebijakan Privasi
          </h1>
          <p className="text-gray-100 mt-2 text-sm md:text-base font-light leading-6">
            Tidak dapat menemukan informasi yang Anda butuhkan? Hubungi kami
            secara langsung dan kami akan dengan senang hati menjawab setiap
            pertanyaan yang Anda miliki.
          </p>
          <div className="flex mt-5 items-center space-x-3">
            <Link to="https://wa.me/+62811121686" target="_blank">
              <Button
                className={`bg-white border hover:bg-primary hover:text-[#fff] duration-300 ease-in-out border-[#EAECF0] text-primary font-semibold text-sm`}>
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:justify-end md:mt-0">
          <img
            data-aos="fade-left"
            data-aos-duration="1500"
            src={HeaderImg}
            className="w-full md:w-auto"
            alt="Valast ID"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
