import React from 'react'
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";


// import "../../../css/Employer/UseFilterFour.css"
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

const marksctc = [
  {
    value: 0,
    label: "0 Lakh",
  },
  {
    value: 45,
    label: "40 Lakh",
  },
  {
    value: 100,
    label: "1 Cr.",
  },
];
function valuetextctc(value) {
  return `${value} Lakh`;
}


export default function Profile5() {
    const [ctcvalue, setCtcvalue] = React.useState([0, 25]);
    const handleChangectc = (event, newValue) => {
      setCtcvalue(newValue);
    };
  
  
  
  return (
    <div>
              <form classname="p4_main"style={{width:"100%",height:"62vh"}}>
            <div className="form-row4">
          {/* <label htmlFor="dob"> Department</label>
          <input type="text" placeholder="Department" name="Name" /> */}
                                                      <CssTextField
                  sx={{ color: " #F7701D", width: "100%" }}
                  required
                  id="outlined-required"
                  color="warning"
                  label="Department"
                />

        </div>
        <div className="form-row4">
                                                      <CssTextField
                  sx={{ color: " #F7701D", width: "100%" }}
                  required
                  id="outlined-required"
                  color="warning"
                  label="Job/Title"
                />

        </div>
        <div className="form-row4">
                                                      <CssTextField
                  sx={{ color: " #F7701D", width: "100%" }}
                  required
                  id="outlined-required"
                  color="warning"
                  label="Salary/Stiphend"
                />

        </div>
        <div className="form-row4">
                                                      {/* <CssTextField
                  sx={{ color: " #F7701D", width: "100%" }}
                  required
                  id="outlined-required"
                  color="warning"
                  label="CTC"
                /> */}
                        <label htmlFor="Salary/Annum" className="label_textsalary">
                    CTC
                  </label>

                  <PrettoSlider
                    sx={{ color: "#F7701D", width: "60%", mt: 5,ml:5, height: 0.25 }}
                    getAriaLabel={() => "Temperature range"}
                    value={ctcvalue}
                    onChange={handleChangectc}
                    valueLabelDisplay="on"
                    marks={marksctc}
                    min={0}
                    max={100}
                    getAriaValueText={valuetextctc}
                  />


        </div>

        </form>

    </div>
  )
}
