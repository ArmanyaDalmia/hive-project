import React from "react";
import Dropdown from "./Dropdown";
import "./App.css";

function App() {
  const sampleOptions = ["Apple", "Banana", "Cherry", "Date"];

  return (
    <div className="App">
      <Dropdown options={sampleOptions} />
      <Dropdown options={sampleOptions} multiSelect={true} />
    </div>
  );
}

export default App;
