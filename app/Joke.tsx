import React from "react"
import { Title } from "./Title"
import Image from "next/image"

interface JokeProps {
  title: string | undefined,
  daysAgo: string | undefined,
  date: string | undefined,
  src: string,
  alt: string
}

export const Joke = (props: JokeProps) => (
  <div id="hw2">
    <Title text="Joke" />
    <h2>{props.title}</h2>
    <h2>{props.daysAgo}</h2>
    <h2>{props.date}</h2>
    <div id="joke-container">
      <Image src={props.src} alt={props.alt} fill={true}/>
    </div>
  </div>
)