import { useState, useEffect, useContext } from 'react';
import Brand from '../../assets/icons/brand.svg';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';
import { languages, LanguageContext } from '../../utils/LanguageContext';
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [navbarS, setNavbars] = useState(false);
  const { t } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const handleLanguageChange = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

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
            className={`flex-1 justify-between pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
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
              <div className="relative mt-1 inline-block text-left">
                <div
                  className="language-button items-center flex gap-2 cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}>
                  <img
                    src={languages.find((l) => l.code === language).icon}
                    alt="Language"
                    className="h-6 rounded-full border-2 w-6 inline-block"
                  />
                  <p className="text-[#1A1A1A] mt-1 font-semibold text-sm">
                    {languages.find((l) => l.code === language).label}
                  </p>
                </div>
                {isOpen && (
                  <div className="lg:absolute -right-5 mt-4 w-20 rounded-sm shadow-lg text-black bg-white ring-1 ring-black ring-opacity-5">
                    {languages.map((l) => (
                      <div
                        key={l.code}
                        className="py-1 px-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleLanguageChange(l.code)}>
                        <img
                          src={l.icon}
                          alt={l.label}
                          className="h-5 w-5 rounded-full border-[#EAECF0] inline-block mr-2"
                        />
                        <span>{l.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <div className="relative mt-1 inline-block text-left">
              <div
                className="language-button items-center flex gap-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}>
                <img
                  src={languages.find((l) => l.code === language).icon}
                  alt="Language"
                  className="h-6 rounded-full border-2 w-6 inline-block"
                />
                <p className="text-[#1A1A1A] mt-1 font-semibold text-sm">
                  {languages.find((l) => l.code === language).label}
                </p>
              </div>
              {isOpen && (
                <div className="lg:absolute -right-5 mt-4 w-20 rounded-sm shadow-lg text-black bg-white ring-1 ring-black ring-opacity-5">
                  {languages.map((l) => (
                    <div
                      key={l.code}
                      className="py-1 px-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleLanguageChange(l.code)}>
                      <img
                        src={l.icon}
                        alt={l.label}
                        className="h-5 w-5 rounded-full border-[#EAECF0] inline-block mr-2"
                      />
                      <span>{l.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="hidden lg:block border-l-[3px] mx-4 border-[#EAECF0] h-8"></div>
          <Link>
            <Button
              className={
                'text-sm bg-[#fff] border hidden lg:block border-[#EAECF0] font-medium text-primary'
              }>
              Masuk
            </Button>
          </Link>
          <Link>
            <Button
              className={
                'text-sm hidden lg:block bg-primary font-medium text-[#fff]'
              }>
              Coba Gratis
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
