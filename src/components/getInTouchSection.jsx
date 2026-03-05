import React from 'react';
import GetInTouchImage from '../assets/images/get-in-touch-image.png';
import AnimationHeading from './animationHeading';
import GetInTouchForm from './getInTouchForm';

export default function GetInTouchSection() {
  return (
    <section id='contact' className='pt-[50px] pb-[60px] md:pb-[80px] lg:pb-[100px] xl:pb-[120px] border-b border-[#2C2C33]'>
      <div className="container px-0 flex flex-wrap justify-center">
        <div className="w-full sm:w-5/12 md:w-4/12 lg:w-4/12 px-[15px]" data-aos="fade-right" data-aos-delay={100}>
          <div className="rounded-xxl max-w-[250px] md:max-w-[360px] overflow-hidden">
            <img src={GetInTouchImage} alt="" srcset="" />
          </div>
        </div>
        <div className="w-full sm:w-7/12 md:w-8/12 lg:w-6/12 pt-[19px] px-[15px]" data-aos="fade-left" data-aos-delay={100}>
          <AnimationHeading className='heading-02 text-white mb-[8px]' tag='h2' text={"Get in Touch!"}></AnimationHeading>
          <p className='text-sm mb-[28px]'>Have questions or need assistance? Reach out to us—we're here to help!</p>
          <GetInTouchForm />
        </div>
      </div>
    </section>
  )
}
