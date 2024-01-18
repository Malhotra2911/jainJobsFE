import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Select from '@mui/material/Select'
import Slider from '@mui/material/Slider'
import Radio from "@mui/material/Radio";
export const Boxtab = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("mobile")]: {
    "& .MuiTextField-root": { m: 1, width: "100%" },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.up("tablet")]: {
    "& .MuiTextField-root": { m: 1, width: "100%" },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.up("desktop")]: {
    "& .MuiTextField-root": { m: 1, width: "80%" },
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.up("big")]: {
    "& .MuiTextField-root": { m: 1, width: "50%" },
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#F7701D",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#F7701D",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#F7701D",
    },
    "&:hover fieldset": {
      borderColor: " #F7701D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F7701D",
    },
  },
});


export const CustomSelect = styled(Select)(() => ({
  "& label.Mui-focused": {
    color: "#F7701D",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "green"
  },
  "& .MuiInputLabel-root": {
    color: "green"
  },
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#F7701D"
    },
    "&:hover fieldset": {
      borderColor: "#F7701D"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F7701D"
    }
  }
}));


export const Boxtabs = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("mobile")]: {
    "& .MuiTextField-root": { m: 1, width: "100%" },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // border: "3px solid red",
  },
  [theme.breakpoints.up("tablet")]: {
    "& .MuiTextField-root": { m: 1, width: "100%" },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // border: "3px solid red",
  },
  [theme.breakpoints.up("desktop")]: {
    "& .MuiTextField-root": { m: 1, width: "80%" },
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // border: "3px solid red",
  },
  [theme.breakpoints.up("big")]: {
    "& .MuiTextField-root": { m: 1, width: "50%" },
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // border: "3px solid red",
  },
}));

export const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#F7701D",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export const RadioBtn = styled(Radio)({
  "& 	.MuiRadio-root": {
    color: "#F7701D",
    backgroundColor: "#F7701D",
  },

  "& .Mui-checked": {
    color: "#F7701D",
  },
});
