import { useState, useEffect } from 'react';
import Brand from '../../assets/icons/brand.svg';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [navbarS, setNavbars] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (!isTop) {
        setNavbars(true);
      } else {
        setNavbars(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${navbarS ? 'stickys' : ''}`}>
      <div className="justify-between px-4 mx-auto py-1 lg:max-w-7xl lg:items-center lg:flex 2xl:px-0">
        <div>
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            <Link to="/">
              <img src={Brand} className="w-[118px] h-[28px]" alt="Valast ID" />
            </Link>
            <div className="lg:hidden">
              <button
                className="p-2 text-primary rounded-md outline-none focus:border-primary focus:border"
                onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <MdClose className="w-4 h-4 text-primary" />
                ) : (
                  <RxHamburgerMenu className="w-4 h-4 text-primary" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}>
            <ul className="items-center justify-center space-y-4 lg:flex lg:space-x-[42px] lg:space-y-0">
              <li className="text-[#475467] font-medium hover:text-primary">
                <Link to={'/'}>Home</Link>
              </li>
              <li className="text-[#475467] font-medium hover:text-primary">
                <Link to={'/'}>Tentang Kami</Link>
              </li>
              <li className="text-[#475467] font-medium hover:text-primary">
                <Link to={'/'}>Solusi</Link>
              </li>
              <li className="text-[#475467] font-medium hover:text-primary">
                <Link to={'/'}>Klien</Link>
              </li>
              <li className="text-[#475467] font-medium hover:text-primary">
                <Link to={'/'}>Harga</Link>
              </li>
              <li className="text-[#475467] font-medium hover:text-primary">
                <Link to={'/'}>Kontak</Link>
              </li>
            </ul>
            <div className="mt-3 flex flex-col gap-3 lg:hidden">
              <Link>
                <Button
                  className={
                    'text-sm w-full bg-[#fff] border border-[#EAECF0] font-medium text-primary'
                  }>
                  Masuk
                </Button>
              </Link>
              <Link>
                <Button
                  className={
                    'text-sm w-full bg-primary font-medium text-[#fff]'
                  }>
                  Coba Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden space-x-3 lg:inline-block">
          <Link>
            <Button
              className={
                'text-sm bg-[#fff] border border-[#EAECF0] font-medium text-primary'
              }>
              Masuk
            </Button>
          </Link>
          <Link>
            <Button className={'text-sm bg-primary font-medium text-[#fff]'}>
              Coba Gratis
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
