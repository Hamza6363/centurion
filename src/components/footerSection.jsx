import React from 'react';
import logo from '../assets/images/Logo.svg';
import Github from '../assets/icons/Github.svg';
import X from '../assets/icons/X.svg';
import Linkedin from '../assets/icons/LinkedIn.svg';
import PageSectionLinks from './pageSectionLinks';
import { Link } from 'react-router-dom';

export default function FooterSection() {
    return (
        <footer className='bg-[#212126] md:fixed bottom-0 left-0 w-full'>
            <div className="py-[30px] md:py-[40px] lg:py-[48px]">
                <div className="container flex flex-wrap p-0">
                    <div className="w-full md:w-6/12 lg:w-7/12 px-[15px] mb-[30px] sm:mb-[40px] md:mb-0">
                        <div className="max-w-[150px] mb-[20px]">
                            <Link to={"/"}>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <p className='text-sm mb-[5px]'>Centurion AI-Powered Security for Digital Integrity.</p>

                        <Link className='text-sm text-white'>support@platform.io</Link>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-5/12 grid grid-cols-2 sm:grid-cols-3 px-[15px] gap-[20px] lg:pl-[30px] xl:pl-[65px]">
                        <div>
                            <h4 className='text-base text-[#248EFF] font-medium mb-[12px]'>Quick Links</h4>
                            <ul className='flex flex-col gap-[10px]'>
                                <PageSectionLinks className='transition duration-300 text-white cursor-pointer hover:text-[#248EFF]' text={"Sections"} scrollTo={"solutions"} />
                                <Link className='transition duration-300 text-white hover:text-[#248EFF]' to={"/"}>Home</Link>
                                <PageSectionLinks className='transition duration-300 text-white cursor-pointer hover:text-[#248EFF]' text={"About"} scrollTo={"about"} />
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-base text-[#248EFF] font-medium mb-[12px]'>Support</h4>
                            <ul className='flex flex-col gap-[10px]'>
                                <PageSectionLinks className='transition duration-300 text-white cursor-pointer hover:text-[#248EFF]' text={"Contact"} scrollTo={"contact"} />
                                <PageSectionLinks className='transition duration-300 text-white cursor-pointer hover:text-[#248EFF]' text={"FAQ's"} scrollTo={"faq"} />
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-base text-[#248EFF] font-medium mb-[12px]'>Legal</h4>
                            <ul className='flex flex-col gap-[10px]'>
                                <li><Link className='transition duration-300 text-white hover:text-[#248EFF]'>Terms & Conditions</Link></li>
                                <li><Link className='transition duration-300 text-white hover:text-[#248EFF]'>Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-0">
                <div className="py-[20px] items-center border-t border-[#2C2C33] flex flex-wrap flex-row-reverse p-0">
                    <div className="w-full sm:w-6/12 px-[15px]">
                        <ul className='flex flex-wrap justify-center mb-[10px] sm:mb-0 sm:justify-end gap-[8px]'>
                            <li><Link><img src={Linkedin} alt="" /></Link></li>
                            <li><Link><img src={Github} alt="" /></Link></li>
                            <li><Link><img src={X} alt="" /></Link></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-6/12 px-[15px]">
                        <p className='text-[12px] leading-[16px] text-center sm:text-start text-white'>© 2025 Centurion. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
