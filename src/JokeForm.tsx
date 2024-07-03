import { differenceInCalendarDays } from "date-fns";
import React, { useState } from "react";
import { ComicsData } from "./App";
import { Joke } from "./Joke";
import { Error } from "./Error";

export const JokeForm = () => {
    const [showError, setShowError] = useState<boolean>(false);
    const [showComic, setShowComic] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [title, setTitle] = useState<string | undefined>(undefined);
    const [daysAgo, setDaysAgo] = useState<string | undefined>(undefined);
    const [date, setDate] = useState<string | undefined>(undefined);
    const [src, setSrc] = useState<string | undefined>(undefined);
    const [alt, setAlt] = useState<string | undefined>(undefined);
    const clickFunction = () => {
      console.log(email)
      fetch('https://fwd.innopolis.university/api/hw2?email=' + email)
        .then(function (resp: Response): Promise<number> {
          return resp.json()
        })
        .then(function (resp: number): Promise<Response> {
          console.log('Your personal ID: ' + resp)
          return fetch('https://fwd.innopolis.university/api/comic?id=' + resp)
        })
        .then(function (resp: Response): Promise<ComicsData> {
          return resp.json()
        })
        .then(comics => {
          const releaseDate = new Date(parseInt(comics.year), parseInt(comics.month), parseInt(comics.day))
          const diff: number = Math.abs(differenceInCalendarDays(releaseDate, new Date()))
          setDate(releaseDate.toLocaleDateString())
          setDaysAgo(`The comic was released ${diff} days ago`)
          setTitle(comics.safe_title)
          setSrc(comics.img)
          setAlt(comics.alt)
          setShowComic(true)
          setShowError(false)
        })
        .catch(e => {
          setShowComic(false)
          setShowError(true)
        })
    }
    return <div id="joke-input">
      <h1>Do you want a joke?</h1>
      <form onSubmit={(event: React.FormEvent) => {
        event.preventDefault()
        clickFunction()
      }}>
        <input type="text" placeholder="Input your email" id="email" value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
        <button id="joke-button" type="button" onClick={clickFunction}>Get a joke!</button>
      </form>
      {showError && <Error>Error occured. Write a valid e-mail address</Error>}
      {showComic && <Joke title={title} daysAgo={daysAgo} date={date} src={src} alt={alt} />}
    </div>
  }