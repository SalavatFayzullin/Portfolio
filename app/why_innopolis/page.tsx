import { ImageText } from "../ImageText";
import { Header } from "../Header";
import { Title } from "../Title";
import React from "react";
import { Footer } from "../Footer";

export default function AboutInnopolis() {
    return <>
        <Header></Header>
        <Title text={"Unique Focus on Innovation and Technology"} />
        <ImageText src={'/Portfolio/img/why1.png'}>Innopolis University is uniquely positioned within Russia innovation ecosystem, focusing on technology and innovation. This specialization can provide you with advanced knowledge and practical skills in cutting-edge technologies, preparing you for careers in rapidly evolving industries.</ImageText>
        <Title text={"International Recognition and Partnerships"} />
        <ImageText src={'/img/why2.png'}>Innopolis University collaborates with leading international universities and tech companies, offering exchange programs, joint degrees, and internships. This global network can enhance your educational experience, exposing you to diverse perspectives and opportunities.</ImageText>
        <Footer />
    </>
}