import { useEffect, useState } from "react";
import "./App.css";
// import { HauntedHouseReport } from "./version1";
// import { RegionalHauntedHouseReport } from "./version3";

function App() {
  // for each haunted house, how many ghosts are there?

  return (
    <div className="App">
      <Example />
      {/* <RegionalHauntedHouseReport /> */}
      {/* <HauntedHouseReport /> */}
    </div>
  );
}

export default App;

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
