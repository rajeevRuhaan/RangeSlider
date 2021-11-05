import React, { useState } from "react";
import "./App.css";
import RangeSliders from "./components/RangeSliders";
import OutPut from "./components/OutPut";
// import RangeSlider1 from "./components/RangeSlider1";

function App() {
  const [M, setM] = useState([]);
  const [T, setT] = useState([]);
  const [W, setW] = useState([]);
  const [Th, setTh] = useState([]);
  const [F, setF] = useState([]);
  const [S, setS] = useState([]);
  const [Su, setSu] = useState([]);

  return (
    <>
      <RangeSliders
        M={setM}
        T={setT}
        W={setW}
        Th={setTh}
        F={setF}
        S={setS}
        Su={setSu}
      />
      <hr />
      <OutPut M={M} T={T} W={W} Th={Th} F={F} S={S} Su={Su} />
      <hr />
      {/* <RangeSlider1 /> */}
    </>
  );
}

export default App;
