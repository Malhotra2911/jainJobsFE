import React, { useState } from "react";
import "../../../css/Employer/UseFilterThree.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
// import { createTheme } from "@mui/material/styles";
// import { ThemeProvider } from "@mui/material/styles";

// const theme = {
//   overrides: {
//     MuiRadio: {
//       root: {
//         color: '#F7701D',
//       },
//       colorSecondary: {
//         '&$checked': {
//           color: '#F7701D',
//         },
//       },
//     },
//   },
// }

// const muiTheme = createTheme(theme)

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

export default function UseFilterThree({ onChangeText, isFilterValue }) {
  const [category, setCategory] = useState("no");
  return (
    <div>
      <div className="usefilter3_container">
        <div className="usefilter3_form">
          <form>
            <div className="checkboxRS">
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#898787" }}
                >
                  Ready to relocate
                </FormLabel>
                <RadioGroup
                  value={isFilterValue.RELOCATE}
                  onChange={(e) => {
                    onChangeText("RELOCATE", e.target.value);
                  }}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value={1}
                    control={<Radio sx={{ color: "#F7701D" }} />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value={0}
                    control={<Radio sx={{ color: "#F7701D" }} />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="checkboxRS">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  prefer shift
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={parseInt(isFilterValue.PREFER_SHIFT)}
                  onChange={(e) => {
                    onChangeText("PREFER_SHIFT", e.target.value);
                  }}
                >
                  <FormControlLabel
                    value={0}
                    control={
                      <Radio
                        sx={{
                          color: "#F7701D",
                          "&$checked": { color: "#F7701D" },
                        }}
                      />
                    }
                    label="Night"
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio sx={{ color: "#F7701D" }} />}
                    label="Day"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="form-row3">
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#898787" }}
                >
                  Job Type
                </FormLabel>
                <RadioGroup
                  value={isFilterValue.WORKTYPE_TYPE}
                  onChange={(e) =>
                    onChangeText("WORKTYPE_TYPE", e.target.value)
                  }
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="ON_SITE"
                    control={<Radio sx={{ color: "#F7701D" }} />}
                    label="On-site"
                  />
                  <FormControlLabel
                    value="WORK_FROM_HOME"
                    control={<Radio sx={{ color: "#F7701D" }} />}
                    label="WFH"
                  />
                  <FormControlLabel
                    value="HYBRID"
                    control={<Radio sx={{ color: "#F7701D" }} />}
                    label="Hybrid"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="form-row3">
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                color="warning"
                label="JOB_POSITON"
                value={isFilterValue.JOB_POSITON}
                onChange={(e) => onChangeText("JOB_POSITON", e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
