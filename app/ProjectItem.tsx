import Image from "next/image"
import React from "react"

interface ProjectItemProps {
    href: string,
    src: string,
    alt: string,
    name: string,
    desc: string
}

export const ProjectItem = (props: ProjectItemProps) => (
    <div className="twitter-card" style={{ borderColor: 'black' }}>
        <a href={props.href}>
            <Image src={props.src} alt={props.alt} width={100} height={100}/>
            <p>{props.name}</p>
            <p>{props.desc}</p>
        </a>
    </div>
)