import { ImageText } from "../ImageText";
import { Header } from "../page";
import { Title } from "../Title";
import React from "react";
import { Footer } from "../Footer";

export default function AboutInnopolis() {
    return <>
        <Header></Header>
        <Title text={"But how can I prepare to applying?"} />
        <ImageText src={'/img/inno_prep1.jpg'}>Preparing to apply to Innopolis University involves thorough research, academic preparation, gathering necessary documents, a well-crafted application, and possibly interviews. Additionally, considering financial aspects and staying informed post-application are crucial steps in the process. Remember, each application is unique, so tailor your approach based on the specific requirements and opportunities provided by Innopolis University.</ImageText>
        <Footer />
    </>
}