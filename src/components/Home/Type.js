import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            "Full Stack  Responsive Web Development",
            "MERN Stack Developer",
            "Love to Problem Solving",
            "Love to Coading",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
        }}
      />
    </div>
  );
}

export default Type;
