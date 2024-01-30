import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("Gaurav");

  //variant 1 -> every render
  // useEffect(() => {
  //   console.log("ui rendering done");
  // });

  //variant 2 -> First render
  // useEffect(() => {
  //   console.log("ui rendering done");
  // }, []);

  //variant 3 -> first render + whenever dependency changes
  // useEffect(() => {
  //   console.log("change observed");
  // }, [name]);

  //variant 4 -> to handle unmounting of a component
  useEffect(() => {
    console.log("listener added");
    return () => {
      console.log("listener removed");
    };
  }, [text]);

  function clickHandler(event) {
    console.log(text);
    setText(event.target.value);
  }
  return (
    <div className="App">
      <input type="text" onChange={clickHandler} />
    </div>
  );
}

export default App;
