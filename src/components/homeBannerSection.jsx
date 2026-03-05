import React from 'react';
import AnimationHeading from './animationHeading';
import ArrowRight from '../assets/icons/arrow-right.svg';
import BannerImage from "../assets/images/banner-img.png";
import halfCircleImg from '../assets/images/half-circle-img.png';

export default function HomeBannerSection() {
    return (
        <section className='relative pt-[70px] md:pt-0 md:min-h-[600px] lg:min-h-[750px] xl:min-h-[800px] flex items-center'>
            <div className="container relative z-10 py-[80px] text-center md:text-left">
                <AnimationHeading className="text-[#fff] heading-01 mb-[18px]" tag="h1" text={<>AI-powered <br />digital asset protection.</>} />
                <p data-aos="fade-up" data-aos-delay="300" className='text-base mb-[30px] md:mb-[40px]'>Ensure authenticity, detect deepfakes, and safeguard your documents with AI-driven solutions.</p>
                <a data-aos="fade-up" data-aos-delay="600" href="" className='btn btn-primary'>Get Started
                    <img src={ArrowRight} alt="" />
                </a>
            </div>
            <span className='absolute w-[51%] top-[50%] right-0 md:top-[16px]'>
                <img src={BannerImage} alt="" srcset="" />
            </span>
            <span className="absolute w-[38%] top-[10%] md:top-0 left-0">
                <img src={halfCircleImg} alt="" className="animate-fadeLoop"></img>
            </span>
        </section>
    )
}
