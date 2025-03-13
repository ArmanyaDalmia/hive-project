import React from "react";
import Dropdown from "./Dropdown";
import "./App.css";

function App() {
  const sampleOptions = ["Option1", "Option2", "Option3", "Option4"];

  return (
    <div className="App">
      <Dropdown options={sampleOptions} />
      <Dropdown options={sampleOptions} multiSelect={true} />
    </div>
  );
}

export default App;
