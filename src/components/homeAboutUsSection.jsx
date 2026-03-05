import React from 'react'
import { Link } from 'react-router-dom';
import AboutUsImage from '../assets/images/about-us-image.png';
import ArrowRight from '../assets/icons/arrow-right.svg'
import AnimationHeading from './animationHeading';

export default function HomeAboutUsSection() {
    return (
        <section id="about" className='py-[50px] md:py-[70px] lg:py-[84px]'>
            <div className="container flex justify-center flex-wrap px-0">
                <div className='w-full flex flex-col justify-center md:w-6/12 lg:w-5/12 px-[16px] mb-[36px] md:mb-[12px] text-center md:text-start' data-aos="fade-right">
                    <AnimationHeading className='heading-02 text-white mb-[14px]' tag='h2' text={"About Us"}></AnimationHeading>
                    <p className='text-sm'>We build powerful, AI-driven tools that help individuals and businesses analyze, compare, and protect digital content. Our platform offers a suite of modular APIs for document comparison, image analysis, watermarking, and deepfake detection — all accessible through a simple pay-as-you-go model.</p>
                    <p className='text-sm mb-[28px]'>Whether you're developing new applications, managing large volumes of content, or ensuring digital trust, our solutions are designed to integrate seamlessly and scale with your needs.</p>
                    <div>
                        <Link to={"/"} className='btn btn-primary'>Read More
                            <img src={ArrowRight} alt="" />
                        </Link>
                    </div>
                </div>
                <div className='w-full md:w-6/12 lg:w-5/12 px-[16px]'>
                    <div className="image_animation mx-auto max-w-[380px] md:max-w-[420px] md:me-0 overflow-hidden rounded-xxl">
                        <img src={AboutUsImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
