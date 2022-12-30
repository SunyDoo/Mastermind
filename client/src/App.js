import { useState, useEffect } from "react";
import Game from "./components/Game";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App;
