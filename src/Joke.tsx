import React from "react"
import { Title } from "./Title"

interface JokeProps {
    title: string | undefined,
    daysAgo: string | undefined,
    date: string | undefined,
    src: string | undefined,
    alt: string | undefined
  }
  
export const Joke = (props: JokeProps) => (
    <div id="hw2">
      <Title text="Joke" />
      <h2>{props.title}</h2>
      <h2>{props.daysAgo}</h2>
      <h2>{props.date}</h2>
      <div id="joke-container">
        <img src={props.src} alt={props.alt} />
      </div>
    </div>
  )