import React from 'react'
import Brain from '../assets/icons/brain.svg';
import Document from '../assets/icons/document.svg';
import WaterMark from '../assets/icons/watermark.svg';
import Gallery from '../assets/icons/gallery.svg'
import Image from '../assets/icons/image.svg';
import Scanner from '../assets/icons/scanner.svg';
import CardWithIcon from './cardWithIcon';
import AnimationHeading from './animationHeading';

export default function HomeVarificationSection() {
    const cardData = [{
        icon: Brain,
        heading: 'Matrix',
        para: 'A comprehensive endpoint combining all core models: deepfake detection, watermark analysis, image comparison, and AI image detection.'
    }, {
        icon: Document,
        heading: 'Document Comparison',
        para: 'Detect changes and similarities between documents with intelligent comparison tool.'
    }, {
        icon: WaterMark,
        heading: 'Watermarking & Detection',
        para: 'Embed secure watermarks into images and videos, and detect existing watermarks to verify authenticity and ownership.'
    }, {
        icon: Image,
        heading: 'AI Image Detection',
        para: 'Determine whether an image was created by an AI model or captured by a real-world camera using AI.'
    }, {
        icon: Gallery,
        heading: 'Image Difference Detection',
        para: 'Analyse two images to detect visual discrepancies, modifications, or inconsistencies across versions.'
    }, {
        icon: Scanner,
        heading: 'Deepfake Detection',
        para: 'Detect AI-generated or manipulated images using deepfake detection models.'
    }
    ]
    return (
        <section id='solutions' className='py-[50px] sm:py-[60px] md:py-[0] mt-[-37px]'>
            <div className="container">
                <div className='flex justify-center mb-[30px] md:mb-[38px]'>
                    <div className='text-center md:w-8/12 lg:w-6/12 xl:w-5/12 md:px-[20px]'>
                        <AnimationHeading tag="h2" className="heading-02 text-[#fff] mb-[14px]" text="AI-Powered Verification Solutions"/>
                        <p data-aos="fade-up" data-aos-delay={300} className='md:text-[16px]'>AI-driven verification for authenticity.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[24px]">
                    {cardData.length > 0 && cardData.map((item, i) => (
                        <>
                            <CardWithIcon key={i} data={item} id={i} />
                        </>
                    )
                    )}
                </div>
            </div>
        </section>
    )
}
