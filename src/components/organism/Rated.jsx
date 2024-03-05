import React from 'react';
import Rate from '../atoms/Rate';

const Rated = () => {
  return (
    <div
      id="tentang kami"
      className="flex flex-col md:flex-row justify-center my-[30px] gap-4 items-center mx-auto md:gap-60 max-w-7xl">
      <Rate number="24/7" text="Online Support" />
      <Rate number="100+" text="Money Changer" />
      <Rate number="1M+" text="Transaksi Sukses" />
    </div>
  );
};

export default Rated;
