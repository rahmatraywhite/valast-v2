import React, { Fragment, useContext } from 'react';
import Valas from '../../assets/icons/brand.svg';
import Wa from '../../assets/icons/wa.svg';
import Fb from '../../assets/icons/fb.svg';
import Tw from '../../assets/icons/tw.svg';
import Ig from '../../assets/icons/ig.svg';
import Le from '../../assets/icons/le.svg';
import Yt from '../../assets/icons/yt.svg';
import { LanguageContext } from '../../utils/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useContext(LanguageContext);
  const Sosial = [
    { icon: Fb, link: 'https://www.facebook.com/valast.indonesia' },
    { icon: Tw, link: 'https://twitter.com/valast.indonesia' },
    { icon: Ig, link: 'https://www.instagram.com/valast.indonesia' },
    { icon: Le, link: 'https://www.linkedin.com/in/valast.indonesia' },
    { icon: Yt, link: 'https://www.youtube.com/valast.indonesia' },
  ];
  return (
    <Fragment>
      <div
        id="kontak"
        className="flex justify-center mt-[50px] px-4 2xl:px-0 bg-[#F2F4F7]">
        <footer className="max-w-7xl relative py-[60px]">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="text-[#475467] w-[368px]">
              <img
                className="w-[150px] h-[36.8px]"
                src={Valas}
                alt="Valast ID"
              />
              <p className="mt-6 leading-6">
                {t(
                  'Aplikasi Money Changer Online Lengkap Untuk Mempercepat Bisnis Anda'
                )}
              </p>
              <p className="mt-[42px] font-medium">{t('Kantor Pusat')}</p>
              <p className="leading-6 mt-3">
                Poris Indah Blok H No 152 Cipondoh indah, Cipondoh Kota
                Tangerang, Indonesia 15148
              </p>
              <p className="mt-[42px] font-medium">{t('Kontak Kami')}</p>
              <p className="leading-6 mt-3">+62 811 - 121 - 686</p>
              <p className="leading-6 mt-3">admin@valast.id</p>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-20">
              <div className="text-[#475467] ">
                <p className="font-medium">{t('Fitur')}</p>
                <p className="mt-3 leading-6">{t('Jual Valas')}</p>
                <p className="mt-3 leading-6">{t('Beli Valas')}</p>
                <p className="mt-3 leading-6">POS</p>
                <p className="mt-3 leading-6">Dashboard</p>
                <p className="mt-3 leading-6">Admin</p>
                <p className="mt-3 leading-6">{t('Analisa Bisnis')}</p>
                <p className="mt-3 leading-6">{t('Toko Online')}</p>
              </div>
              <div className="text-[#475467]">
                <p className="font-medium">{t('Perusahaan')}</p>
                <p className="mt-3 leading-6">{t('Tentang Kami')}</p>
                <p className="mt-3 leading-6">{t('Negara')}</p>
                <p className="mt-3 leading-6">{t('Karir')}</p>
                <p className="mt-3 leading-6">FAQ</p>
              </div>
              <div className="text-[#475467]">
                <p className="font-medium">{t('Gabung')}</p>
                <p className="mt-3 leading-6">{t('Afiliasi')}</p>
                <p className="mt-3 leading-6">{t('Karir')}</p>
                <p className="mt-3 leading-6">{t('Kerjasama')}</p>
              </div>
              <div className="text-[#475467]">
                <p className="font-medium">{t('Harga')}</p>
                <p className="mt-3 leading-6">{t('Harga Paket')}</p>
                <p className="mt-3 leading-6">{t('Detail Paket')}</p>
                <p className="mt-3 leading-6">{t('Promosi')}</p>
              </div>
            </div>
          </div>
          <Link
            target="_blank"
            to="https://wa.me/+62811121686"
            className="w-[215px] absolute right-0 2xl:right-[-80px] bottom-28 md:bottom-36 py-3 flex gap-3 items-center cursor-pointer px-4 rounded-xl"
            style={{
              background:
                'linear-gradient(98deg, #30DC70 4.96%, #22AF57 74.77%, #22AF57 97.95%)',
            }}>
            <img src={Wa} alt="WhatsApp" />
            <div className="text-[#F9FAFB]">
              <p className="text-xl font-semibold">{t('Hubungi Kami')}</p>
              <p>{t('Online 24 Jam')}</p>
            </div>
          </Link>
          <div className="flex items-center gap-6 absolute right-0 bottom-14 md:bottom-20 cursor-pointer">
            {Sosial.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="cursor-pointer"
                  src={item.icon}
                  alt="Sosial Media"
                />
              </a>
            ))}
          </div>
        </footer>
      </div>
      <div className="bg-white">
        <footer className="flex flex-col justify-center max-w-7xl mx-auto px-4 2xl:px-0 py-4 sm:flex-row md:justify-between">
          <p className="text-[#475467] text-base text-center sm:text-left md:text-lg leading-[22px] mb-4 sm:mb-0">
            &copy; Valast.com 2024, All right reserved
          </p>
          <div
            onClick={() => window.scrollTo(0, 0)}
            className="flex gap-6 text-[#475467] mx-auto md:mx-0 text-base md:text-xl">
            <Link to="/term-condition">{t('Syarat dan Ketentuan')}</Link>
            <Link to="/privacy-policy">{t('Kebijakan Privasi')}</Link>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Footer;
