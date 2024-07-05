'use strict'
'use client'

import React from 'react';
import { FlexContainer } from './FlexContainer';
import { ProjectItem } from './ProjectItem';
import { LinkElement } from './LinkElement';
import { BorderedParagraph } from './BorderedParagraph';
import { Title } from './Title';
import { JokeForm } from './JokeForm';
import Link from 'next/link';
import { Footer } from './Footer';


export interface ComicsData {
  alt: string,
  day: string,
  img: string,
  link: string,
  month: string,
  news: string,
  num: string,
  safe_title: string,
  title: string,
  transcript: string,
  year: string
}

export interface TextProps {
  text: string
}

export default function App() {
  return <>
    <div>
      <Header></Header>
      <Title text={"Hello there!"} />
      <JokeForm />
      <Title text={"Bio:"} />
      <BorderedParagraph text="My name is Salavat! And I am Innopolis University student. My field of interest is front-end and back-end development on Java. Also I like coding in Unity and problem solving on Codeforces.
  My overall GPA is 4,79. Here is the list of my projects and link to them on Github!" />
      <Title text={"Projects:"} />
      <FlexContainer>
        <ProjectItem href="https://github.com/SalavatFayzullin/BiLang" src={'/img/github.png'} alt="GitHub Logo 1" name="BiLang" desc="Minecraft plugin for easy localization" />
        <ProjectItem href="https://github.com/SalavatFayzullin/SkyWarsUp" src={'/img/github.png'} alt="GitHub Logo 1" name="SkyWarsUp" desc="High-customizable SkyWars plugin with PlaceholderAPI and Vault hooks for Paper" />
        <ProjectItem href="https://github.com/SalavatFayzullin/SkyWarsUp" src={'/img/github.png'} alt="GitHub Logo 1" name="SpaceDefense" desc="My first Unity game" />
      </FlexContainer>
      <Title text={"Social media:"} />
      <FlexContainer>
        <LinkElement borderStyle={{ backgroundColor: 'rgb(92, 164, 236)' }} href="https://t.me/IFFJEAHONGHE" src={'/img/tg.jpeg'} alt="Telegram Image" text="Go to Telegram" />
        <LinkElement borderStyle={{ backgroundColor: 'orange' }} href="https://www.google.com/intl/ru/gmail/about/" src={'/img/gmail.jpeg'} alt="Gmail Image" text="Go to Gmail" />
        <LinkElement borderStyle={{ backgroundColor: 'black' }} href="https://github.com/SalavatFayzullin" src={'/img/github.png'} alt="GitHub Image" text="Go to GitHub" />
      </FlexContainer>
      <Footer />
    </div>
  </>
}



export const Header = () => (
  <>
    <ul className='header'>
      <li className='header_item'>
        <Link href='/'>About me</Link>
      </li>
      <li className='header_item'>
        <Link href='/about_innopolis'>About Innopolis</Link>
      </li>
      <li className='header_item'>
        <Link href='/inno_preparation'>How to prepare to studying in Innopolis</Link>
      </li>
      <li className='header_item'>
      <Link href='/why_innopolis'>Why do you need to choose Innopolis?</Link>
        
      </li>
    </ul>
  </>
)