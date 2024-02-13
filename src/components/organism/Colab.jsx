import React, { useEffect } from 'react';
import Colab1 from '../../assets/images/colab1.png';
import Colab2 from '../../assets/images/colab2.png';
import Colab3 from '../../assets/images/colab3.png';
import Colab4 from '../../assets/images/colab4.png';
import Colab5 from '../../assets/images/colab5.png';
import Sertif1 from '../../assets/icons/sertif1.svg';
import Sertif2 from '../../assets/icons/sertif2.svg';
import Sertif3 from '../../assets/icons/sertif3.svg';
import { CardHome } from '../atoms/CardHome';
import Aos from 'aos';

const Colab = () => {
  const collabImages = [Colab1, Colab2, Colab3, Colab4, Colab5];
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  return (
    <div className="my-8 px-4 lg:my-16">
      <p className="text-lg text-[#475467] text-center font-medium leading-6">
        Telah Berkolaborasi dengan:
      </p>
      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row justify-center items-center mt-8 space-x-8 lg:space-x-16">
        {collabImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Colab ${index + 1}`}
            className="w-32 h-32 mb-4 lg:mb-0"
          />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-6 my-8 lg:my-16">
        <CardHome
          title="Diawasi Oleh Bank Indonesia"
          text="Valast telah terdaftar dan diawasi oleh Bank Indonesia"
          img={Sertif1}
        />
        <CardHome
          title="Sertifikasi ISO 27001:2013"
          text="Keamanan dan kerahasiaan data terjamin dengan sertifikasi ISO"
          img={Sertif2}
        />
        <CardHome
          title="Terdaftar PSE Kominfo"
          text="Terdaftar sebagai sistem elektronik yang aman untuk bertransaksi"
          img={Sertif3}
        />
      </div>
    </div>
  );
};

export default Colab;
