import React from "react";
import { TextProps } from "./page";

export const BorderedParagraph = (props: TextProps) => (
    <div className="bordered-paragraph">
      {props.text}
    </div>
  )