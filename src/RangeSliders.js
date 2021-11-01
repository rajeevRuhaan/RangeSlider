import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const RangeSliders = () => {
  const [inputM, setInputM] = useState([6, 20]);
  const [inputT, setInputT] = useState([6, 18]);
  const [inputW, setInputW] = useState([6, 18]);
  const [inputTh, setInputTh] = useState([6, 18]);
  const [inputF, setInputF] = useState([6, 18]);
  const [inputS, setInputS] = useState([6, 18]);
  const [inputSu, setInputSu] = useState([6, 18]);

  const updateRangeM = (e, data) => {
    setInputM(data);
  };
  const updateRangeT = (e, data) => {
    setInputT(data);
  };
  const updateRangeW = (e, data) => {
    setInputW(data);
  };
  const updateRangeTh = (e, data) => {
    setInputTh(data);
  };
  const updateRangeF = (e, data) => {
    setInputF(data);
  };
  const updateRangeS = (e, data) => {
    setInputS(data);
  };
  const updateRangeSu = (e, data) => {
    setInputSu(data);
  };

  // checkbox
  const [check, setCheck] = React.useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: true,
  });

  const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
    check;
  const handleChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <h1>Range Slider / input</h1>
      <div style={{ display: "flex" }}>
        <FormControlLabel
          control={
            <Checkbox checked={monday} onChange={handleChange} name="monday" />
          }
          label="Check to disable"
        />
        <div>
          <h3>M</h3>
        </div>
        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider
            value={inputM}
            name="Mon"
            onChange={updateRangeM}
            min={0}
            max={24}
            valueLabelDisplay="auto"
            disabled={monday}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={tuesday}
              onChange={handleChange}
              name="tuesday"
            />
          }
        />
        <div>
          <h3>T</h3>
        </div>
        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider
            value={inputT}
            name="Tue"
            onChange={updateRangeT}
            min={0}
            max={24}
            valueLabelDisplay="auto"
            disabled={tuesday}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={wednesday}
              onChange={handleChange}
              name="wednesday"
            />
          }
        />
        <div>
          <h3>W</h3>
        </div>
        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider
            value={inputW}
            name="Wed"
            onChange={updateRangeW}
            min={0}
            max={24}
            valueLabelDisplay="auto"
            disabled={wednesday}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={thursday}
              onChange={handleChange}
              name="thursday"
            />
          }
        />
        <div>
          <h3>Th</h3>
        </div>
        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider
            value={inputTh}
            name="Thu"
            onChange={updateRangeTh}
            min={0}
            max={24}
            valueLabelDisplay="auto"
            disabled={thursday}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <FormControlLabel
          control={
            <Checkbox checked={friday} onChange={handleChange} name="friday" />
          }
        />
        <div>
          <h3>F</h3>
        </div>
        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider
            value={inputF}
            name="Fri"
            onChange={updateRangeF}
            min={0}
            max={24}
            valueLabelDisplay="auto"
            disabled={friday}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={saturday}
              onChange={handleChange}
              name="saturday"
            />
          }
        />
        <div>
          <h3>S</h3>
        </div>
        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider
            value={inputS}
            name="Sat"
            onChange={updateRangeS}
            min={0}
            max={24}
            valueLabelDisplay="auto"
            disabled={saturday}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <FormControlLabel
          control={
            <Checkbox checked={sunday} onChange={handleChange} name="sunday" />
          }
        />
        <div>
          <h3>Su</h3>
        </div>
        <div style={{ width: "200px", marginLeft: "50px" }}>
          <Slider
            value={inputSu}
            name="Sun"
            onChange={updateRangeSu}
            min={0}
            max={24}
            valueLabelDisplay="auto"
            disabled={sunday}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSliders;
