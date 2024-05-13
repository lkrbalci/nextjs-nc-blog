import React from "react";
import { ReactTyped } from "react-typed";

type Props = { startingText: string; text: string };

const Typewriter = ({ startingText, text }: Props) => {
  return (
    <h1>
      {startingText}
      <ReactTyped
        strings={[text]}
        typeSpeed={100}
        backSpeed={20}
        // cursorChar="_"
        showCursor={false}
      />
    </h1>
  );
};

export default Typewriter;
