import { useState, useEffect } from "react";

function Hello() {
  function byeFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("hi! :)");
    return byeFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setshowing] = useState(false);
  const onClick = () => setshowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "show"} </button>
    </div>
  );
}

export default App;