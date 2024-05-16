import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setkeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setkeyword(event.target.value);
    console.log("tt");
  useEffect(() => {
    console.log("cat")
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
      {console.log("search", keyword);}
  }, [keyword]); // keyword 가 변화할 때 코드를 실행할거라고 알려줌

  return (
    <div>
      <input 
      value= {keyword}
      onChange={onChange} 
      type="text" 
      placeholder="Search here!"
      />
      <h1> {counter} </h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
