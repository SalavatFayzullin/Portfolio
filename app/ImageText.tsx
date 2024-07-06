import React from 'react';
import { BorderedParagraph } from './BorderedParagraph';
import Image from 'next/image';

export const ImageText = (props: any) => {
    return <div className='fifty-fifty'>
        <Image style={{ alignSelf: 'stretch' }} src={props.src} alt='Gmail' className='fifty-fifty-element' width={500} height={400} />
        <BorderedParagraph text={props.children}></BorderedParagraph>
    </div>
}