import React, { Fragment } from 'react';
import Navbar from '../organism/Navbar';
import TryValast from '../organism/TryValast';
import Footer from '../organism/Footer';
import Header from '../organism/TermConditions/Header';
import Content from '../organism/TermConditions/Content';

export default function TermConditionLayout() {
  return (
    <Fragment>
      <Navbar />
      <div className="mx-auto flex flex-col overflow-x-hidden justify-center">
        <Header />
        <Content />
        <TryValast />
        <Footer />
      </div>
    </Fragment>
  );
}
