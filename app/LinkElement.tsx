import Image from "next/image"
import React from "react"

interface BackgroundColor {
    backgroundColor: string
}

interface LinkElementProps {
    borderStyle: BackgroundColor,
    href: string,
    src: string,
    alt: string,
    text: string
}

export const LinkElement = (props: LinkElementProps) => (
    <div className="twitter-card" style={props.borderStyle}>
        <a href={props.href}>
            <Image src={props.src} alt={props.alt} width={100} height={100}/>
            <p>{props.text}</p>
        </a>
    </div>
)