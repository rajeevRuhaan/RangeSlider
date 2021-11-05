import { Slider } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const RangeSliders = ({ value, setValue }) => {
  const updateRange = (key) => (e, data) => {
    setValue((prev) => ({
      ...prev,
      [key]: { value: data, check: prev[key].check },
    }));
  };

  const handleChange = (event) => {
    const key = event.target.name;
    setValue((prev) => ({
      ...prev,
      [key]: { value: prev[key].value, check: event.target.checked },
    }));
  };

  return (
    <div className="sliderInput">
      <h1>Range Slider / Input</h1>
      <p>Check to disable</p>
      {/* Monday */}
      <div className="field">
        <FormControlLabel
          control={
            <Checkbox
              checked={value.monday.check}
              onChange={handleChange}
              name="monday"
            />
          }
        />
        <div>
          <h3>M</h3>
        </div>
        <div className="fieldSlider">
          <Slider
            value={value.monday.value}
            name="Mon"
            onChange={updateRange("monday")}
            min={0}
            max={24}
            step={0.5}
            valueLabelDisplay="auto"
            disabled={value.monday.check}
          />
        </div>
      </div>
      {/* Tuesday */}
      <div className="field">
        <FormControlLabel
          control={
            <Checkbox
              checked={value.tuesday.check}
              onChange={handleChange}
              name="tuesday"
            />
          }
        />
        <div>
          <h3>T</h3>
        </div>
        <div className="fieldSlider">
          <Slider
            value={value.tuesday.value}
            name="Tue"
            onChange={updateRange("tuesday")}
            min={0}
            max={24}
            step={0.5}
            valueLabelDisplay="auto"
            disabled={value.tuesday.check}
          />
        </div>
      </div>
      {/* Wednesday */}
      <div className="field">
        <FormControlLabel
          control={
            <Checkbox
              checked={value.wednesday.check}
              onChange={handleChange}
              name="wednesday"
            />
          }
        />
        <div>
          <h3>W</h3>
        </div>
        <div className="fieldSlider">
          <Slider
            value={value.wednesday.value}
            name="Wed"
            onChange={updateRange("wednesday")}
            min={0}
            max={24}
            step={0.5}
            valueLabelDisplay="auto"
            disabled={value.wednesday.check}
          />
        </div>
      </div>
      {/* Thursday */}
      <div className="field">
        <FormControlLabel
          control={
            <Checkbox
              checked={value.thursday.check}
              onChange={handleChange}
              name="thursday"
            />
          }
        />
        <div>
          <h3>Th</h3>
        </div>
        <div className="fieldSlider">
          <Slider
            value={value.thursday.value}
            name="Thu"
            onChange={updateRange("thursday")}
            min={0}
            max={24}
            step={0.5}
            valueLabelDisplay="auto"
            disabled={value.thursday.check}
          />
        </div>
      </div>
      {/* Friday */}
      <div className="field">
        <FormControlLabel
          control={
            <Checkbox
              checked={value.friday.check}
              onChange={handleChange}
              name="friday"
            />
          }
        />
        <div>
          <h3>F</h3>
        </div>
        <div className="fieldSlider">
          <Slider
            value={value.friday.value}
            name="Fri"
            onChange={updateRange("friday")}
            min={0}
            max={24}
            step={0.5}
            valueLabelDisplay="auto"
            disabled={value.friday.check}
          />
        </div>
      </div>
      {/* Saturday */}
      <div className="field">
        <FormControlLabel
          control={
            <Checkbox
              checked={value.saturday.check}
              onChange={handleChange}
              name="saturday"
            />
          }
        />
        <div>
          <h3>S</h3>
        </div>
        <div className="fieldSlider">
          <Slider
            value={value.saturday.value}
            name="Sat"
            onChange={updateRange("saturday")}
            min={0}
            max={24}
            step={0.5}
            valueLabelDisplay="auto"
            disabled={value.saturday.check}
          />
        </div>
      </div>
      {/* Sunday */}
      <div className="field">
        <FormControlLabel
          control={
            <Checkbox
              checked={value.sunday.check}
              onChange={handleChange}
              name="sunday"
            />
          }
        />
        <div>
          <h3>Su</h3>
        </div>
        <div className="fieldSlider">
          <Slider
            value={value.sunday.value}
            name="Sun"
            onChange={updateRange("sunday")}
            min={0}
            max={24}
            step={0.5}
            valueLabelDisplay="auto"
            disabled={value.sunday.check}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSliders;
