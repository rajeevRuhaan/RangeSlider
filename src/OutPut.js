import React from "react";
import { Slider } from "@material-ui/core";

const OutPut = () => {
  return (
    <div>
      <h1>
        Range Slider/ out put
        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider min={0} max={24} valueLabelDisplay="auto" />
        </div>
        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider min={0} max={24} valueLabelDisplay="auto" />
        </div>
      </h1>
    </div>
  );
};

export default OutPut;
