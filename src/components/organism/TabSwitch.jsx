import React, { useState, useEffect, useContext } from 'react';
import Switch1 from '../../assets/images/switch1.svg';
import Switch2 from '../../assets/images/switch2.svg';
import Switch3 from '../../assets/images/switch3.svg';
import Icon1 from '../../assets/icons/switch1.svg';
import Icon2 from '../../assets/icons/switch2.svg';
import Icon3 from '../../assets/icons/switch3.svg';
import Rounded from '../../assets/images/rounded.svg';
import Aos from 'aos';
import { LanguageContext } from '../../utils/LanguageContext';

const TabSwitch = () => {
  const { t } = useContext(LanguageContext);
  const [switchImage, setSwitchImage] = useState(Switch1);
  const [percentage, setPercentage] = useState(0);
  const [imageAnimation, setImageAnimation] = useState('fade-in');

  const handleMouseEnter = (image, percentage) => {
    setPercentage(percentage);
    setImageAnimation('fade-in');
    switch (image) {
      case 'Icon1':
        setSwitchImage(Switch1);
        break;
      case 'Icon2':
        setSwitchImage(Switch2);
        break;
      case 'Icon3':
        setSwitchImage(Switch3);
        break;
      default:
        break;
    }
    setTimeout(() => {
      setImageAnimation('fade-out');
    }, 800);
  };

  const handleMouseLeave = () => {
    setImageAnimation('fade-out');
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease',
    });
  }, []);

  return (
    <div
      id="produk"
      className="flex flex-col justify-center items-center mx-auto">
      <h1 className="text-[#1D2939] font-extrabold text-2xl lg:text-[38px] max-w-[923px] text-center lg:leading-[52px]">
        {t(
          'Pilihan Tepat Dalam Pelayanan Meningkatkan Layanan Penukaran Valuta Asing'
        )}
      </h1>
      <div className="flex justify-between items-center mt-8 gap-[38px] flex-wrap">
        <div className="flex gap-[18px]">
          <div className="relative">
            <div className="h-[320px] rounded-3xl bg-[#F2F4F7] w-3">
              <div
                className="bg-blue-500 bottom h-[320px] rounded-3xl"
                style={{
                  height: `${percentage}%`,
                  transition: 'height 0.3s',
                }}></div>
            </div>
          </div>
          <div data-aos="fade-right" className="flex-col space-y-4">
            <div
              className="flex items-center border border-[#EAECF0] p-6 rounded-xl cursor-pointer space-x-4"
              onMouseEnter={() => handleMouseEnter('Icon1', 35)}
              onMouseLeave={handleMouseLeave}>
              <img src={Icon1} alt="" />
              <p className="text-[#1D2939] font-semibold text-base lg:text-[24px]">
                {t('Kemudahan Mengelola Transaksi')}
              </p>
            </div>
            <div
              className="flex items-center border border-[#EAECF0] p-6 rounded-xl cursor-pointer space-x-4"
              onMouseEnter={() => handleMouseEnter('Icon2', 70)}
              onMouseLeave={handleMouseLeave}>
              <img src={Icon2} alt="" />
              <p className="text-[#1D2939] font-semibold text-base lg:text-[24px]">
                {t('Kenali Pelangganmu dengan KYC')}
              </p>
            </div>
            <div
              className="flex items-center border border-[#EAECF0] p-6 rounded-xl cursor-pointer space-x-4"
              onMouseEnter={() => handleMouseEnter('Icon3', 100)}
              onMouseLeave={handleMouseLeave}>
              <img src={Icon3} alt="" />
              <p className="text-[#1D2939] font-semibold text-base lg:text-[24px]">
                {t('Berbagai Pilihan Pembayaran')}
              </p>
            </div>
          </div>
        </div>
        <div className="relative" data-aos="fade-left">
          <img
            src={Rounded}
            data-aos={imageAnimation === 'fade-out' ? '' : 'fade-in'}
            // data-aos-duration="200"
            // data-aos-easing="ease-out"
            className={`absolute w-56 md:w-[392px] z-[-1] right-[56px] top-[-30px] ${
              imageAnimation === 'fade-out' ? '' : 'fade-in'
            }`}
            alt=""
          />
          <img
            src={switchImage}
            alt={switchImage}
            className={`duration-300 rounded-3xl ease-in-out z-10 ${
              imageAnimation === 'fade-out' ? '' : 'fade-in'
            }`}
            data-aos={imageAnimation === 'fade-out' ? '' : 'fade-in'}
            // data-aos-duration="200"
            data-aos-easing="ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default TabSwitch;
