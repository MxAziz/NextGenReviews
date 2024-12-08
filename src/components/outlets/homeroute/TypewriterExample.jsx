import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterExample = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "#19202F",
        color: "white",
        padding: "40px",
      }}
    >
      <h1 className=" text-4xl font-bold">
        Welcome to <span style={{ color: "" }}>My Website</span>
      </h1>
      <h2>
        <span style={{ color: "green", fontSize: "30px" }}>
          <Typewriter
            words={["Game Reviews", "Exciting Features", "Dynamic Updates"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </span>
      </h2>
    </div>
  );
};

export default TypewriterExample;
