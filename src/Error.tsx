import React from "react"

interface ErrorProps {
    children: string
  }
  
export const Error = (props: ErrorProps) => <h2 className='error'>{props.children}</h2>