import React from "react";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import TextField from "@mui/material/TextField";
import "../../../css/Employer/UseFilterOne.css";
import { styled } from "@mui/material/styles";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Slider from "@mui/material/Slider";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CssTextField = styled(TextField)({
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
const PrettoSlider = styled(Slider)({
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

const marks = [
  {
    value: 0,
    label: "0 Lakh",
  },
  {
    value: 40,
    label: "40 Lakh",
  },
  {
    value: 100,
    label: "1 Cr.",
  },
];
function valuetext(value) {
  return `${value} Lakh`;
}

const markslast = [
  {
    value: 0,
    label: "0 Lakh",
  },
  {
    value: 20,
    label: "20 Lakh",
  },
  {
    value: 50,
    label: "50 Lakh",
  },
];
function valuetextlast(value) {
  return `${value} Lakh`;
}

export default function UseFilterOne({ onChangeText, isFilterValue }) {
  const [value, setValue] = React.useState([]);
  const [lastvalue, setLastvalue] = React.useState([0, 10]);
  const [datevalue, setDatevalue] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (e, newValue) => {
    onChangeText("PREV_COMPANY_SALARY", e.target.value);
  };

  const handleChangelast = (e, newValue) => {
    onChangeText("EXPECTED_SALARY", e.target.value);
  };

  return (
    <div>
      <div className="usefilter1_container">
        <div className="usefilter1_form">
          <form>
            <div className="linkedin_LI">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-warning-label">Post type</InputLabel>
                <Select
                  labelId="demo-warining-select-label"
                  id="outlined-required"
                  value={isFilterValue.POSTTYPE}
                  label="post type"
                  onChange={(e) => onChangeText("LINKEDIN", e.target.value)}
                >
                  <MenuItem value={1}>Instant hiring</MenuItem>
                  <MenuItem value={2}>Combo hiring</MenuItem>
                  <MenuItem value={3}>Create my own plan</MenuItem>
                  <MenuItem value={4}>Fmn bid</MenuItem>
                  <MenuItem value={5}>pay per click</MenuItem>
                </Select>
              </FormControl>
            </div>
            <br />

            <div className="linkedin_LI">
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                size="small"
                color="warning"
                label="Linkedin Profile"
                value={isFilterValue.LINKEDIN}
                onChange={(e) => onChangeText("LINKEDIN", e.target.value)}
              />
            </div>
            <br />

            <div className="linkedin_LI">
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                size="small"
                type="number"
                color="warning"
                label="Experience"
                value={isFilterValue.EXPERIANCE}
                onChange={(e) => onChangeText("EXPERIANCE", e.target.value)}
              />
            </div>
            <br />
            <div className="linkedin_LI">
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                size="small"
                color="warning"
                label="Dob"
                type="date"
                value={isFilterValue.DOB}
                onChange={(e) => onChangeText("DOB", e.target.value)}
              />
            </div>

            <div className="form-row">
              <label htmlFor="Salary/Annum" className="label_textsalary">
                Last Drawn Salary{" "}
              </label>
              <PrettoSlider
                sx={{
                  color: "#F7701D",
                  width: "60%",
                  mt: 5,
                  ml: 5,
                  height: 0.25,
                }}
                getAriaLabel={() => "Temperature range"}
                value={isFilterValue.PREV_COMPANY_SALARY}
                onChange={handleChange}
                valueLabelDisplay="on"
                marks={marks}
                min={0}
                max={100}
                getAriaValueText={valuetext}
              />
            </div>

            <div className="form-row">
              <label htmlFor="Salary/Annum" className="label_textsalary">
                Expected Salary{" "}
              </label>

              <PrettoSlider
                sx={{
                  color: "#F7701D",
                  width: "60%",
                  mt: 5,
                  ml: 5,
                  height: 0.25,
                }}
                getAriaLabel={() => "Temperature range"}
                value={isFilterValue.EXPECTED_SALARY}
                onChange={handleChangelast}
                valueLabelDisplay="on"
                marks={markslast}
                min={0}
                max={50}
                getAriaValueText={valuetextlast}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
