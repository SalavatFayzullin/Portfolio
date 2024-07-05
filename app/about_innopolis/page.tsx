import React from 'react';
import { Header } from '../page';
import Image from 'next/image';
import { BorderedParagraph } from '../BorderedParagraph';
import innopolisUniversity from '../../public/img/universitet-innopolis.jpeg'
import { Title } from '../Title';
import { Footer } from '../Footer';

export default function AboutInnopolis() {
    return <>
        <Header></Header>
        <Title text={"Who are you... Innopolis?"} />
        <ImageText src={innopolisUniversity}>Innopolis University is a Russian autonomous non—profit organization of higher education in the city of Innopolis (Verkhneuslonsky district, Republic of Tatarstan) specializing in education, research and development in the field of information technology and robotics.

            Initially, the university operated in the city of Kazan, and since September 2015, the university's campus has been opened in Innopolis. Innopolis University trains developers and managers in the field of high technologies and conducts scientific research in the fields of information technology and robotics.

            The university was registered on December 10, 2012. The founders are the Russian Federation represented by the Ministry of Digital Development, Communications and Mass Media of the Russian Federation and the Republic of Tatarstan represented by the Ministry of Land and Property Relations of the Republic of Tatarstan.</ImageText>
            <Footer />
    </>
}

export const ImageText = (props: any) => {
    return <div className='fifty-fifty'>
        <Image style={{ alignSelf: 'stretch' }} src={props.src} alt='Gmail' className='fifty-fifty-element' width={500} height={400} />
        <BorderedParagraph text={props.children}></BorderedParagraph>
    </div>
}