import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // componentDidUpdate
    const changeColorOnClick = () => {
      if(color === "black") {
        setColor("red");
      }
      else {
        setColor("black");
      }
    };

    document.addEventListener("click", changeColorOnClick);

    return () => {
      // componentWillUnmount
      document.removeEventListener("click", changeColorOnClick);
    }
  }, [color]);

  useEffect(() => {
    // componentDidMount
  }, []);

  useEffect(() => {
    // componentDidMount and componentDidUpdate
  });

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCount}>Increment</button>
      <div
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          backgroundColor: color,
        }}
      >
        Change color.
      </div>
    </div>
  );
}

export default App;
