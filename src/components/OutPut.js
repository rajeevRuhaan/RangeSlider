import { Slider } from "@material-ui/core";

const OutPut = ({ value }) => {
  const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
    value;

  return (
    <div className="output">
      <h1>Range Slider/ Output </h1>
      <div className="result">
        <h3>M</h3>

        <div className="resultSlider">
          <Slider
            value={monday.value}
            min={0}
            max={24}
            valueLabelDisplay={monday.check ? "auto" : "on"}
            disabled={monday.check}
          />
        </div>
      </div>
      {/* tuesday */}
      <div className="result">
        <h3>T</h3>

        <div className="resultSlider">
          <Slider
            value={tuesday.value}
            min={0}
            max={24}
            valueLabelDisplay={tuesday.check ? "auto" : "on"}
            disabled={tuesday.check}
          />
        </div>
      </div>
      {/* wednesday */}
      <div className="result">
        <h3>W</h3>

        <div className="resultSlider">
          <Slider
            value={wednesday.value}
            min={0}
            max={24}
            valueLabelDisplay={wednesday.check ? "auto" : "on"}
            disabled={wednesday.check}
          />
        </div>
      </div>
      {/* thursday */}
      <div className="result">
        <h3>Th</h3>

        <div className="resultSlider">
          <Slider
            value={thursday.value}
            min={0}
            max={24}
            valueLabelDisplay={thursday.check ? "auto" : "on"}
            disabled={thursday.check}
          />
        </div>
      </div>
      {/* friday */}
      <div className="result">
        <h3>F</h3>

        <div className="resultSlider">
          <Slider
            value={friday.value}
            min={0}
            max={24}
            valueLabelDisplay={friday.check ? "auto" : "on"}
            disabled={friday.check}
          />
        </div>
      </div>
      {/* saturday*/}
      <div className="result">
        <h3>S</h3>

        <div className="resultSlider">
          <Slider
            value={saturday.value}
            min={0}
            max={24}
            valueLabelDisplay={saturday.check ? "auto" : "on"}
            disabled={saturday.check}
          />
        </div>
      </div>
      {/* sunday */}
      <div className="result">
        <h3>Su</h3>

        <div className="resultSlider">
          <Slider
            value={sunday.value}
            min={0}
            max={24}
            valueLabelDisplay={sunday.check ? "auto" : "on"}
            disabled={sunday.check}
          />
        </div>
      </div>
    </div>
  );
};

export default OutPut;
