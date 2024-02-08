import { useState } from "react";
import Brand from '../../assets/icons/brand.svg'
import { Link } from "react-router-dom";
import Button from "../atoms/Button";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white shadow-lg">
            <div className="justify-between px-4 mx-auto py-1 lg:max-w-7xl lg:items-center lg:flex 2xl:px-0">
                <div>
                    <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                        <Link to='/'>
                            <img src={Brand} alt="Valast ID" />
                        </Link>
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-primary rounded-md outline-none focus:border-primary focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-primary"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-primary"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-4 lg:flex lg:space-x-[42px] lg:space-y-0">
                            <li className="text-[#475467] font-medium hover:text-primary">
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className="text-[#475467] font-medium hover:text-primary">
                                <Link to={"/"}>Tentang Kami</Link>
                            </li>
                            <li className="text-[#475467] font-medium hover:text-primary">
                                <Link to={"/"}>Solusi</Link>
                            </li>
                            <li className="text-[#475467] font-medium hover:text-primary">
                                <Link to={"/"}>Klien</Link>
                            </li>
                            <li className="text-[#475467] font-medium hover:text-primary">
                                <Link to={"/"}>Harga</Link>
                            </li>
                            <li className="text-[#475467] font-medium hover:text-primary">
                                <Link to={"/"}>Kontak</Link>
                            </li>
                        </ul>
                        <div className="mt-3 flex flex-col gap-3 lg:hidden">
                            <Link>
                                <Button className={"text-sm w-full bg-[#fff] border border-[#EAECF0] font-medium text-primary"}>Masuk</Button>
                            </Link>
                            <Link>
                                <Button className={"text-sm w-full bg-primary font-medium text-[#fff]"}>Coba Gratis</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-3 lg:inline-block">
                    <Link>
                        <Button className={"text-sm bg-[#fff] border border-[#EAECF0] font-medium text-primary"}>Masuk</Button>
                    </Link>
                    <Link>
                        <Button className={"text-sm bg-primary font-medium text-[#fff]"}>Coba Gratis</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}