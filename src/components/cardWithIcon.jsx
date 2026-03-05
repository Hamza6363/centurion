import React from 'react'

export default function CardWithIcon({ data, id }) {

  return (
    <article className='card group' data-aos="fade-up" data-aos-delay={id * 150}>
      <span className='icon flex justify-center items-center mb-[22px]'>
        <img className="transition-transform duration-300 group-hover:scale-x-[-1]" src={data?.icon} alt="" srcset="" />
      </span>
      <h3 className='heading-03 text-[#fff] mb-[12px]'>{data?.heading}</h3>
      <p className='text-[#767781] leading-[18px] text-[14px]'>{data?.para}</p>
    </article>
  )
}
