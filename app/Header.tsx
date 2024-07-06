import Link from "next/link";
import React from "react";

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