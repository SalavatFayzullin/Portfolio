import React, { ReactElement } from "react"

interface FlexContainerProps {
    children: ReactElement[]
}

export const FlexContainer = (props: FlexContainerProps) => <div className="cards-container" style={{ borderColor: 'black' }}>{props.children}</div>