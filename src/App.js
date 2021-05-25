import React, { useState } from "react";


export default function App() {
  
  const [arr, setArr] = useState(["foo"]);

  return (
    <div className="App">
      <button onClick={() => setArr([...arr, "foo"])}>Add</button>
      <div>
        {arr.map((a, i) => (
          <p key={i}>{a}</p>
        ))}
      </div>
    </div>
  );
}


