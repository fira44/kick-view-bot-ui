import { useState } from "react";
import { TextField, Slider } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./App.css";
import GradientSlider from "./components/gradient-slider";
function App() {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [value, setValue] = useState(0);

  return (
    <div className="container">
      <TextField
        variant="outlined"
        placeholder="Channel name"
        value={name}
        className="input"
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        variant="outlined"
        placeholder="Duration (minutes)"
        value={duration}
        className="input"
        onChange={(e) => setDuration(e.target.value)}
      />
      <div>
        <label>Viewer Count</label>
        <GradientSlider
        value={value}
        min={0}
        max={10000}
        valueLabelDisplay="on"
        onChange={(e, newValue) => setValue(newValue)}
      />
      </div>
    </div>
  );
}

export default App;
