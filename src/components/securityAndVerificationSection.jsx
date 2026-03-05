import React from 'react';
import AnimationHeading from './animationHeading';
import ArrowRight from '../assets/icons/arrow-right.svg';
import { Link } from 'react-router-dom';

export default function SecurityAndVerificationSection() {
  return (
    <section>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="bg-[linear-gradient(134.48deg,_rgba(36,142,255,0.1)_11.29%,_rgba(81,81,81,0)_100%)] rounded-xl flex justify-center text-center">
          <div className='w-full lg:w-10/12 py-[50px] xl:py-[64px] px-[20px]'>
            <AnimationHeading className='heading-02 text-white mb-[20px]' tag='h2' text={"Centurion AI-Powered Security & Verification"}></AnimationHeading>
            <p className='text-sm text-[#F3F3F3] mb-[30px] md:mb-[40px]'>Enhance your digital security with advanced AI verification tools. Detect deepfakes, authenticate <br /> documents, and safeguard your assets effortlessly.</p>
            <Link to="/shdfoi" className='btn btn-primary'>
              Get Started Now <img src={ArrowRight} alt="" srcset="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
