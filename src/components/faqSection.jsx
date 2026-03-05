import React from 'react';
import AnimationHeading from './animationHeading';
import FaqAccordion from './faqAccordion';

export default function FAQSection() {
    const faqData = [
        {
            question: "How does Centurion ensure digital security?",
            answer: "Centurion is ideal for media, legal, financial, and cybersecurity industries. Organizations dealing with sensitive content can use it to verify digital assets. It provides scalable solutions for businesses of all sizes.",
        },
        {
            question: "What industries can benefit from Centurion?",
            answer: "Centurion is ideal for media, legal, financial, and cybersecurity industries. Organizations dealing with sensitive content can use it to verify digital assets. It provides scalable solutions for businesses of all sizes.",
        },
        {
            question: "What AI detection capabilities does Centurion offer?",
            answer: "Centurion is ideal for media, legal, financial, and cybersecurity industries. Organizations dealing with sensitive content can use it to verify digital assets. It provides scalable solutions for businesses of all sizes.",
        },
        {
            question: "Can Centurion detect fake or altered documents?",
            answer: "Centurion is ideal for media, legal, financial, and cybersecurity industries. Organizations dealing with sensitive content can use it to verify digital assets. It provides scalable solutions for businesses of all sizes.",
        },
        {
            question: "What is Digital Watermarking, and how does it help?",
            answer: "Centurion is ideal for media, legal, financial, and cybersecurity industries. Organizations dealing with sensitive content can use it to verify digital assets. It provides scalable solutions for businesses of all sizes.",
        },
    ]
    return (
        <section id='faq' className='py-[50px] md:py-[70px] lg:py-[90px] xl:py-[110px]'>
            <div className="container justify-center flex px-0">
                <div className="w-full md:w-10/12 xl:w-8/12 px-[15px]">
                    <AnimationHeading className='heading-02 text-center text-white mb-[28px]' tag='h2' text={"Frequently Asked Questions"}></AnimationHeading>
                    <FaqAccordion items={faqData} />
                </div>
            </div>
        </section>
    )
}
