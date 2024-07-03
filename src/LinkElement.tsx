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
            <img src={props.src} alt={props.alt} />
            <p>{props.text}</p>
        </a>
    </div>
)