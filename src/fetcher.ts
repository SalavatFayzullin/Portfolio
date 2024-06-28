'use strict'

import { differenceInCalendarDays } from 'date-fns';

let date: HTMLElement | null = null, title: HTMLElement | null = null, img: HTMLImageElement | null = null, err: HTMLElement | null = null, days_ago: HTMLElement | null = null

interface ComicsData {
    alt: string,
    day: string,
    img: string,
    link: string,
    month: string,
    news: string,
    num: string,
    sate_title: string,
    title: string,
    transcript: string,
    year: string
}

function fetch_joke(event: MouseEvent): any {
    const emailElement: HTMLInputElement = document.getElementById('email') as HTMLInputElement
    const email: string = emailElement.value
    fetch('https://fwd.innopolis.university/api/hw2?email=' + email)
    .then(function(resp: Response): Promise<number> {
        return resp.json()
    })
    .then(function(resp: number): Promise<Response> {
        console.log('Your personal ID: ' + resp)
        return fetch('https://fwd.innopolis.university/api/comic?id=' + resp)
    })
    .then(function(resp: Response): Promise<ComicsData> {
        return resp.json()
    })
    .then(comics => {
        if (date != null) date.remove();
        if (title != null) title.remove();
        if (img != null) img.remove();
        if (err != null) err.remove();
        if (days_ago != null) days_ago.remove();

        const releaseDate = new Date(parseInt(comics.year), parseInt(comics.month), parseInt(comics.day))

        const diff: number = Math.abs(differenceInCalendarDays(releaseDate, new Date()))
        // console.log(`The comic was released ${diff} days ago`);

        date = document.createElement('h2')
        date.textContent = releaseDate.toLocaleDateString()
        let elem: HTMLInputElement = document.getElementById('hw2') as HTMLInputElement
        elem.prepend(date)

        days_ago = document.createElement('h2')
        days_ago.textContent = `The comic was released ${diff} days ago`
        elem.prepend(days_ago)
    
        title = document.createElement('h2')
        title.textContent = comics.sate_title
        elem.prepend(title)
    
        img = new Image() as HTMLImageElement
        img.src = comics.img
        img.alt = comics.alt
        const jokeContainer: HTMLElement = document.getElementById('joke-container') as HTMLElement
        jokeContainer.appendChild(img)
    })
    .catch(e => {
        console.log(e)
        if (date != null) date.remove();
        if (title != null) title.remove();
        if (img != null) img.remove();
        if (err != null) err.remove();
        err = document.createElement('h2')
        err.textContent = 'Error occured. Write a valid e-mail address'
        err.classList.add('error')
        const jokeInput: HTMLElement = document.getElementById('joke-input') as HTMLElement
        jokeInput.append(err)
    })
}

document.getElementById('joke-button')?.addEventListener('click', fetch_joke)