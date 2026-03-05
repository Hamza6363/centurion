import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/images/Logo.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";
import Menu from '../assets/icons/menu.svg';

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById("header");

            if (window.scrollY > 50) {
                header.classList.add("bg-[#1D1D21]", "shadow-md", "border-b", "border-[#2C2C33]");
            } else {
                header.classList.remove("bg-[#1D1D21]", "shadow-md", "border-b", "border-[#2C2C33]");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header id="header" className="w-full fixed top-0 transition-all duration-300 z-50">
                <div className="container flex items-center justify-between py-4">
                    <Link to={"/"} className="max-w-[160px] block">
                        <img src={Logo} alt="" className="w-full" />
                    </Link>
                    <nav className="hidden md:flex items-center gap-[10px]">
                        <Link to="solutions" smooth duration={500} spy
                            activeClass="border border-[#2C2C33] bg-[#212126]"
                            className="px-4 py-2 rounded-[10px] text-white text-sm cursor-pointer">
                            Solutions
                        </Link>

                        <Link to="about" smooth duration={500} spy
                            activeClass="border border-[#2C2C33] bg-[#212126]"
                            className="px-4 py-2 rounded-[10px] text-white text-sm cursor-pointer">
                            About
                        </Link>

                        <Link to="contact" smooth duration={500} spy
                            activeClass="border border-[#2C2C33] bg-[#212126]"
                            className="px-4 py-2 rounded-[10px] text-white text-sm cursor-pointer">
                            Contact
                        </Link>
                    </nav>
                    <div className="hidden md:flex items-center gap-3">
                        <Link className="px-[15px] py-[14px] rounded-[10px] text-white text-sm border border-[#2C2C33] bg-[#212126]">
                            Sign in
                        </Link>

                        <button className="btn btn-primary">
                            Sign up <img src={ArrowRight} alt="" />
                        </button>
                    </div>
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden text-white text-2xl"
                    >
                        <img src={Menu} alt="" />
                    </button>

                </div>
            </header>

            {/* Mobile Side Opener */}
            <div className={`fixed top-0 right-0 flex justify-between flex-col h-full w-[280px] bg-[#1D1D21] transform transition-transform duration-300 z-50
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>

                <div>
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-white text-2xl"
                        >
                            ✕
                        </button>
                    </div>
                    <nav className="flex flex-col gap-[4px] px-[15px]">

                        <Link onClick={() => setMenuOpen(false)}
                            to="solutions" smooth duration={500} spy
                            activeClass="border border-[#2C2C33] bg-[#212126]"
                            className="px-[15px] py-[10px] rounded-[10px] text-white text-sm border border-[transparent] hover:border-[#2C2C33] bg-[transparent] hover:bg-[#212126] transition cursor-pointer"
                        >
                            Solutions
                        </Link>

                        <Link onClick={() => setMenuOpen(false)}
                            to="about" smooth duration={500} spy
                            activeClass="border border-[#2C2C33] bg-[#212126]"
                            className="px-[15px] py-[10px] rounded-[10px] text-white text-sm border border-[transparent] hover:border-[#2C2C33] bg-[transparent] hover:bg-[#212126] transition cursor-pointer">
                            About
                        </Link>

                        <Link onClick={() => setMenuOpen(false)}
                            to="contact" smooth duration={500} spy
                            activeClass="border border-[#2C2C33] bg-[#212126]"
                            className="px-[15px] py-[10px] rounded-[10px] text-white text-sm border border-[transparent] hover:border-[#2C2C33] bg-[transparent] hover:bg-[#212126] transition cursor-pointer"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-center mx-[-6px]">
                        <div className="w-6/12 px-[6px]">
                            <Link className="px-[15px] py-[14px] rounded-[10px] text-white text-sm border border-[#2C2C33] bg-[#212126] flex w-full justify-center">
                                Sign in
                            </Link>
                        </div>
                        <div className="w-6/12 px-[6px]">
                            <button className="btn btn-primary w-full">
                                Sign up <img src={ArrowRight} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Overlay */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40"
                />
            )}
        </>
    );
}