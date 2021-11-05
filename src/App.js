import React from "react";
import "./App.css";
import RangeSliders from "./components/RangeSliders";
import OutPut from "./components/OutPut";

function App() {
  const [value, setValue] = React.useState({
    monday: { value: [6, 20], check: true },
    tuesday: { value: [6, 20], check: true },
    wednesday: { value: [6, 20], check: true },
    thursday: { value: [6, 20], check: true },
    friday: { value: [6, 20], check: true },
    saturday: { value: [6, 20], check: true },
    sunday: { value: [6, 20], check: true },
  });

  return (
    <>
      <RangeSliders value={value} setValue={setValue} />
      <hr />
      <OutPut value={value} />
    </>
  );
}

export default App;
