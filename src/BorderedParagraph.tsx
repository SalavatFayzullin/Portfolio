import React from "react";
import { TextProps } from "./App";

export const BorderedParagraph = (props: TextProps) => (
    <div className="bordered-paragraph">
      {props.text}
    </div>
  )