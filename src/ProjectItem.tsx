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
            <img src={props.src} alt={props.alt} />
            <p>{props.name}</p>
            <p>{props.desc}</p>
        </a>
    </div>
)