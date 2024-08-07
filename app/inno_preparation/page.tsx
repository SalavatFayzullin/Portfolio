import { ImageText } from "../ImageText";
import { Header } from "../Header";
import { Title } from "../Title";
import React from "react";
import { Footer } from "../Footer";

export default function AboutInnopolis() {
    return <>
        <Header></Header>
        <Title text={"But how can I prepare to applying?"} />
        <ImageText src={'https://www.innopolis.com/uploads/thumbs/sectionheadcity-a47d3f79f9-417aa2c02fe3f6f01e951af7b7ea314f.jpeg'}>Preparing to apply to Innopolis University involves thorough research, academic preparation, gathering necessary documents, a well-crafted application, and possibly interviews. Additionally, considering financial aspects and staying informed post-application are crucial steps in the process. Remember, each application is unique, so tailor your approach based on the specific requirements and opportunities provided by Innopolis University.</ImageText>
        <Footer />
    </>
}