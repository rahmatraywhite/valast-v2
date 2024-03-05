import React, { Fragment } from 'react';
import Navbar from '../organism/Navbar';
import Header from '../organism/Header';
import Rated from '../organism/Rated';
import Colab from '../organism/Colab';
import TabSwitch from '../organism/TabSwitch';
import Iklan from '../organism/Iklan';
import Testimonial from '../organism/Testimonial';
import FaqHome from '../organism/FaqHome';
import TryValast from '../organism/TryValast';
import Footer from '../organism/Footer';

const HomeLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="mx-auto flex flex-col overflow-x-hidden justify-center">
        <Header />
        <Rated />
        <Colab />
        <TabSwitch />
        <Iklan />
        {/* <Testimonial /> */}
        <FaqHome />
        <TryValast />
        <Footer />
      </div>
    </Fragment>
  );
};

export default HomeLayout;
