import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Example />
    </div>
  );
}

export default App;

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
