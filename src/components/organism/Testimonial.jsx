import React, { useContext } from 'react';
import CardTestimonial from '../atoms/CardTestimonial';
import Testi1 from '../../assets/images/testi1.png';
import Testi2 from '../../assets/images/testi2.png';
import Testi3 from '../../assets/images/testi3.png';
import { LanguageContext } from '../../utils/LanguageContext';

const Testimonial = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="flex flex-col justify-center mx-auto items-center max-w-7xl p-4">
      <h1 className="text-center text-[38px] text-[#1D2939] font-extrabold leading-[52px]">
        {t('Apa Kata Mereka Tentang Kami?')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        <CardTestimonial
          image={Testi1}
          name="Albert Juan"
          position="CEO of Market Go"
          text="I cant believe the impact Smithy has had on my business! Its like having a personal sales expert right at my fingertips. My sales have skyrocketed"
        />
        <CardTestimonial
          image={Testi2}
          name="Koh Cing Cing"
          position="CEO of Market Go"
          text="Smithy turned my struggling online store into a well-oiled selling machine. The insights and analytics are priceless.  at my fingertips. My sales have skyrocketed"
        />
        <CardTestimonial
          image={Testi3}
          name="Warren Daniel"
          position="Seller"
          text="As a solo entrepreneur, I wear many hats. Smithy has become my sales sidekick, providing me with actionable data and strategies that "
        />
        <CardTestimonial
          image={Testi1}
          name="Albert Juan"
          position="CEO of Market Go"
          text="I cant believe the impact Smithy has had on my business! Its like having a personal sales expert right at my fingertips. My sales have skyrocketed"
        />
        <CardTestimonial
          image={Testi2}
          name="Koh Cing Cing"
          position="CEO of Market Go"
          text="Smithy turned my struggling online store into a well-oiled selling machine. The insights and analytics are priceless.  at my fingertips. My sales have skyrocketed"
        />
        <CardTestimonial
          image={Testi3}
          name="Warren Daniel"
          position="Seller"
          text="As a solo entrepreneur, I wear many hats. Smithy has become my sales sidekick, providing me with actionable data and strategies that "
        />
      </div>
    </div>
  );
};

export default Testimonial;
