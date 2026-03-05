import React from 'react';
import { Link } from 'react-scroll';

export default function pageSectionLinks({ text, scrollTo, className = "" }) {
    return (
        <Link
            className={className}
            to={scrollTo} smooth={true} duration={500}
            spy={true}>
            {text}
        </Link>
    )
}
