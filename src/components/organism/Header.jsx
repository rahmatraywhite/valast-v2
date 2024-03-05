import React, { useEffect, useContext } from 'react';
import Button from '../atoms/Button';
import HeaderImg from '../../assets/images/visual_header.svg';
import HeaderLeft from '../../assets/images/header left.svg';
import Aos from 'aos';
import { LanguageContext } from '../../utils/LanguageContext';

const Header = () => {
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    Aos.init();
  });
  return (
    <div id="home" className="w-full py-8 md:py-[60px] bg-[#F9F9F9] md:px-2">
      <img src={HeaderLeft} className="absolute" alt="header Valast ID" />
      <div className="flex mt-3 md:my-[30px] max-w-7xl mx-auto justify-center md:justify-between p-3 md:p-0 flex-col md:flex-row md:items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="w-full md:w-1/2 flex flex-col justify-center md:mr-5">
          <h1 className="text-[#1D2939] font-extrabold leading-8 md:leading-[64px] text-2xl md:text-[45px]">
            {t(
              'Aplikasi Money Changer Online Lengkap Untuk Mempercepat Bisnis Anda'
            )}
          </h1>
          <p className="text-[#475467] mt-2 text-sm md:text-base leading-6">
            {t(
              'Kelola operasional Money Changer anda menggunakan solusi lengkap dalam meningkatkan pelayanan menjadi lebih cepat dan modern'
            )}
          </p>
          <div className="flex mt-5 items-center space-x-3">
            <Button
              className={`bg-primary hover:bg-white border hover:text-primary hover:border-primary duration-300 ease-in-out text-white font-semibold text-sm`}>
              {t('Coba Gratis 30 Hari')}
            </Button>
            <Button
              className={`bg-white border hover:bg-primary hover:text-[#fff] duration-300 ease-in-out border-[#EAECF0] text-primary font-semibold text-sm`}>
              {t('Jadwalkan Demo')}
            </Button>
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
