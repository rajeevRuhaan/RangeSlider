import React from "react";
import { Slider } from "@material-ui/core";

const OutPut = ({ M, T, W, Th, F, S, Su }) => {
  console.log(S);
  console.log(Su);
  return (
    <div>
      <h1>Range Slider/ out put </h1>
      <div style={{ display: "flex" }}>
        <h3>M</h3>

        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider value={M} min={0} max={24} valueLabelDisplay="on" />
        </div>
      </div>
      {/* tuesday */}
      <div style={{ display: "flex" }}>
        <h3>T</h3>

        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider value={T} min={0} max={24} valueLabelDisplay="on" />
        </div>
      </div>
      {/* wednesday */}
      <div style={{ display: "flex" }}>
        <h3>W</h3>

        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider value={W} min={0} max={24} valueLabelDisplay="on" />
        </div>
      </div>
      {/* thursday */}
      <div style={{ display: "flex" }}>
        <h3>Th</h3>

        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider value={Th} min={0} max={24} valueLabelDisplay="on" />
        </div>
      </div>
      {/* friday */}
      <div style={{ display: "flex" }}>
        <h3>F</h3>

        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider value={F} min={0} max={24} valueLabelDisplay="on" />
        </div>
      </div>
      {/* saturday*/}
      <div style={{ display: "flex" }}>
        <h3>S</h3>

        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider value={S} min={0} max={24} valueLabelDisplay="on" />
        </div>
      </div>
      {/* sunday */}
      <div style={{ display: "flex" }}>
        <h3>Su</h3>

        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider value={Su} min={0} max={24} valueLabelDisplay="on" />
        </div>
      </div>
    </div>
  );
};

export default OutPut;
