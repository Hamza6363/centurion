import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function AnimationHeading({ text, tag: HeadingTag = "h2", className }) {

    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const split = new SplitType(textRef.current, {
                types: "words, chars",
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "bottom 40%",
                    scrub: true,
                },
            })
                .fromTo(
                    split.chars,
                    {
                        opacity: 0.5,
                        color: "white",
                    },
                    {
                        y: 0,
                        opacity: 1,
                        color: "white",
                        stagger: 0.5,
                        duration: 0.1,
                    }
                );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef}>
            <HeadingTag data-aos="fade-up" className={className} data-aos-delay={0} ref={textRef}>{text}</HeadingTag>
        </div>
    )
}