import Slider from "@mui/material/Slider";
import { styled } from 
"@mui/material/styles";

const GradientSlider = styled(Slider)(({ theme }) => ({
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
    background: "linear-gradient(45deg,rgb(72, 186, 68),rgb(51, 91, 50))", // gradient track
  },
  "& .MuiSlider-rail": {
    opacity: 0.3,
    backgroundColor: "#ddd",
  },
  "& .MuiSlider-valueLabel": {
    background: "#06d6a0",
    color: "white",
    fontWeight: "bold",
    fontFamily : "italic",
    borderRadius: 6,
    padding: "2px 6px",
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "gray",
    border: "1px solid currentColor",
    borderColor : "gray",
    "&:focus, &:hover, &.Mui-active": {
      borderColor: "#06d6a0",
      boxShadow: "0 0 8px rgba(193, 241, 228, 0.7)",
      backgroundColor: "rgb(105, 228, 165)",
    },
  },
}));

export default GradientSlider;