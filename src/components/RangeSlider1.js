import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const RangeSlider1 = () => {
  const [checkboxInput, setCheckboxInput] = useState([
    { id: 1, monday: true, sliderM: [10, 15] },
  ]);
  const handleChangeC = (event) => {
    setCheckboxInput({
      ...checkboxInput,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChangeS = (event, data) => {
    setCheckboxInput({
      ...checkboxInput,
      [event.target.name]: data,
    });
  };
  console.log(checkboxInput);

  return (
    <div>
      SlideRanger1
      <div style={{ display: "flex" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxInput.monday}
              onChange={handleChangeC}
              name="monday"
            />
          }
          label="Check to disable"
        />
        <div>
          <h3>M</h3>
        </div>
        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider
            value={checkboxInput.sliderM}
            name="sliderM"
            onChange={handleChangeS}
            min={0}
            max={24}
            valueLabelDisplay="auto"
            disabled={checkboxInput.monday}
          />
        </div>
      </div>
      ;
    </div>
  );
};

export default RangeSlider1;
