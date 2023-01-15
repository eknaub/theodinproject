import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("Initial");

  const clickHandler = () => {
    setHeading("clicked");
  }

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click me
      </button>
      <h1>{heading}</h1>
    </>
  )
}

export default App;
