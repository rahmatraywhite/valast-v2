import React, { Fragment } from 'react';
import Valas from '../../assets/icons/brand.svg';
import Wa from '../../assets/icons/wa.svg';
import Fb from '../../assets/icons/fb.svg';
import Tw from '../../assets/icons/tw.svg';
import Ig from '../../assets/icons/ig.svg';
import Le from '../../assets/icons/le.svg';
import Yt from '../../assets/icons/yt.svg';


const Footer = () => {
    const Sosial = [Fb, Tw, Ig, Le, Yt]
    return (
        <Fragment>
            <div className='flex justify-center mt-[50px] px-4 2xl:px-0 bg-[#F2F4F7]'>
                <footer className='max-w-7xl relative py-[60px]'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 sm:gap-x-16 md:gap-x-32'>
                        <div className='text-[#475467]'>
                            <img className='w-[150px]' src={Valas} alt="Valast ID" />
                            <p className='mt-6 leading-6'>Aplikasi Money Changer Online Lengkap Untuk Mempercepat Bisnis Anda</p>
                            <p className='mt-[42px] font-medium'>Kantor Pusat</p>
                            <p className='leading-6 mt-3'>Jl. Pramuka Jaya No. 25 Purwokerto, Indonesia 27834</p>
                            <p className='mt-[42px] font-medium'>Kontak Kami</p>
                            <p className='leading-6 mt-3'>+62 854 - 323 - 4421</p>
                            <p className='leading-6 mt-3'>Valastid@gmail.com</p>
                        </div>
                        <div className='text-[#475467]'>
                            <p className='font-medium'>Fitur</p>
                            <p className='mt-3 leading-6'>Jual Valas</p>
                            <p className='mt-3 leading-6'>Beli Valas</p>
                            <p className='mt-3 leading-6'>POS</p>
                            <p className='mt-3 leading-6'>Dashboard</p>
                            <p className='mt-3 leading-6'>Admin</p>
                            <p className='mt-3 leading-6'>Analisa Bisnis</p>
                            <p className='mt-3 leading-6'>Toko Online</p>
                        </div>
                        <div className='text-[#475467]'>
                            <p className='font-medium'>Perusahaan Kami</p>
                            <p className='mt-3 leading-6'>Tentang Kami</p>
                            <p className='mt-3 leading-6'>Negara</p>
                            <p className='mt-3 leading-6'>Karir</p>
                            <p className='mt-3 leading-6'>FAQ</p>
                        </div>
                        <div className='text-[#475467]'>
                            <p className='font-medium'>Gabung</p>
                            <p className='mt-3 leading-6'>Afiliasi</p>
                            <p className='mt-3 leading-6'>Karir</p>
                            <p className='mt-3 leading-6'>Kerjasama</p>
                        </div>
                    </div>
                    <div className='w-[215px] absolute right-0 2xl:right-[-80px] bottom-28 md:bottom-36 py-3 flex gap-3 items-center cursor-pointer px-4 rounded-xl' style={{ background: 'linear-gradient(98deg, #30DC70 4.96%, #22AF57 74.77%, #22AF57 97.95%)' }}>
                        <img src={Wa} alt="WhatsApp" />
                        <div className='text-[#F9FAFB]'>
                            <p className='text-xl font-semibold'>Hubungi Kami</p>
                            <p>Online 24 Jam</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-6 absolute right-0 bottom-14 md:bottom-20 cursor-pointer'>
                        {Sosial.map((icon, index) => {
                            return <img key={index} className='cursor-pointer' src={icon} alt="Sosial Media" />
                        })}
                    </div>
                </footer>
            </div>
            <div className='bg-white'>
                <footer className='flex flex-col justify-center max-w-7xl mx-auto px-4 2xl:px-0 py-4 sm:flex-row md:justify-between'>
                    <p className='text-[#475467] text-base text-center sm:text-left md:text-lg leading-[22px] mb-4 sm:mb-0'>&copy; Valast.com 2024, All right reserved</p>
                    <div className='flex gap-6 text-[#475467] mx-auto md:mx-0 text-base md:text-xl'>
                        <p>Syarat dan Ketentuan</p>
                        <p>Kebijakan Privasi</p>
                    </div>
                </footer>
            </div>
        </Fragment>
    );
};

export default Footer;
