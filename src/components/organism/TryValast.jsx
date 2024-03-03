import React, { Fragment, useContext, useEffect } from 'react';
import Button from '../atoms/Button';
import Custry from '../../assets/images/cs-image.svg';
import Valas2 from '../../assets/icons/valas2.svg';
import HeaderRight from '../../assets/images/visual_header.svg';
import HeaderLeft from '../../assets/images/melengkung.svg';
import { LanguageContext } from '../../utils/LanguageContext';
import Aos from 'aos';

const TryValast = () => {
  const { t } = useContext(LanguageContext);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <Fragment>
      <div
        style={{
          background:
            'linear-gradient(180deg, rgba(60, 128, 242, 0.08) 27.24%, rgba(60, 128, 242, 0.00) 100%)',
        }}>
        <div className="flex flex-col max-w-7xl mx-auto md:flex-row justify-between items-center py-5">
          <div
            data-aos="fade-right"
            className="text-center max-w-[617px] lg:text-left">
            <p className="text-[#1D2939] font-extrabold text-[28px] lg:text-[38px] leading-[36px] lg:leading-[52px]">
              {t('Kamu Mempunyai Kesulitan Saat Menggunakan Valast?')}
            </p>
            <p className="text-[#475467] mt-4 text-lg lg:text-xl leading-6">
              {t('Dapatkan Informasi lebih lengkap tentang Valast')}
            </p>
            <div className="flex flex-col lg:flex-row items-center mt-8 gap-3">
              <Button className="bg-[#3C80F2] capitalize text-white">
                {t('Jalankan Demo')}
              </Button>
              <Button className="bg-[#fff] border border-[#EAECF0] text-primary">
                {t('Hubungi Kami')}
              </Button>
            </div>
          </div>
          <img
            data-aos="fade-left"
            src={Custry}
            alt="Coba Sekarang"
            className="mt-6 lg:mt-0 lg:ml-8"
          />
        </div>
      </div>
      <div className=" relative mt-6">
        <div
          data-aos="fade-up"
          className="max-w-7xl p-8 bg-[#3C80F2] mx-auto rounded-2xl flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <img
            src={HeaderLeft}
            className="absolute -left-0 top-0 hidden lg:block"
            alt=""
          />
          <div className="text-center lg:text-left">
            <img
              src={Valas2}
              alt="Valast ID"
              className="mx-auto w-[118px] h-[23.7px] lg:mx-0"
            />
            <p className="text-white text-[22px] lg:text-[42px] font-bold mt-4 lg:mt-[81px] leading-[26px] lg:leading-[52px]">
              {t('Kelola Semua Urusan Bisnis Menggunakan Valast')}{' '}
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-6 lg:mt-8 gap-3">
              <Button className="bg-[#fff] border duration-300 ease-in-out text-primary">
                {t('Coba Gratis 30 Hari')}
              </Button>
              <Button className="bg-transparent border z-10  hover:border-2 duration-300 ease-in-out border-[#fff] text-white">
                {t('Set Demo')}
              </Button>
            </div>
          </div>
          <img
            className="max-w-full lg:max-w-[525px] mt-8 lg:mt-0"
            src={HeaderRight}
            alt="Try Valast"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default TryValast;
