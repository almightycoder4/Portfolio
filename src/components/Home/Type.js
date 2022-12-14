import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            "Full Stack Developer",
            "Full Responsive Web Development",
            "MERN Stack Developer",
            "Open Source Contributor",
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
