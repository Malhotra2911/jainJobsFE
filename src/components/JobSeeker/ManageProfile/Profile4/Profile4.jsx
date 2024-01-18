import React, { useState } from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import { PrettoSlider, RadioBtn } from "../../../../css/Employer/MaterialUicss/OwnCompany";

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


export default function Profile4({ isFrom, setisFrom }) {
  const [category, setCategory] = useState("no");
  const [value, setValue] = React.useState([0, 20]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChangeText("EXPECTED_SALARY", newValue);
  };

  const onChangeText = (name, value) => {
    setisFrom({ ...isFrom, [name]: value });
  };

  React.useEffect(() => {
    // console.log(isFrom.RELOCATE);
    setCategory(parseInt(isFrom.RELOCATE));
    setValue(isFrom.EXPECTED_SALARY)
  }, [])
  

  return (
    <div>
      <form
        className="p2_main"
      >
        <div className="form_row">
          <label htmlFor="Salary/Annum" className="labeled_textsalary">
            Salary/Annum
          </label>

          <PrettoSlider
            sx={{ color: "#F7701D", width: "80%", mt: 5,ml:5,height: 0.25 }}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            marks={marks}
            min={0}
            max={100}
            getAriaValueText={valuetext}
          />
        </div>
        <div className="radioRS">
          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
            >
              Ready to relocate
            </FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => {
                onChangeText("RELOCATE", e.target.value);
                setCategory(e.target.value);
              }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value={1}
                control={<RadioBtn
                  color="warning"
                    />}
                label="Yes"
              />
              <FormControlLabel
                value={0}
                control={<RadioBtn  color="warning"
                  />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="radioRS">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"
            >
              Select shift which you want to work
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={ parseInt(isFrom.PREFER_SHIFT)}
              onChange={(e) => {
                onChangeText("PREFER_SHIFT", e.target.value);
              }}
            >
              <FormControlLabel
                value={0}
                control={
                  <RadioBtn
                  color="warning"
                  />
                }
                label="Night"
              />
              <FormControlLabel
                value={1}
                control={<RadioBtn color="warning"
                   />}
                label="Day"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </form>
    </div>
  );
}

