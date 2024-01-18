import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import "../../../css/Employer/UseFilterTwo.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useSelector } from "react-redux";
// import { makeStyles } from '@mui/styles';

// const useStyles=makeStyles((theme) =>({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 200
//   }
// }))

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

export default function UseFilterTwo({ onChangeText, isFilterValue }) {
  const [value, setValue] = React.useState();
  const [langvalue, setLangvalue] = React.useState();
  const { cities } = useSelector((state) => state.CommonReducer);

  const handleChangelang = (event) => {
    setLangvalue(event.target.langvalue);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const eduxation_json = [
    { TYPE_ID: 1, FIELD_DATA: "B.Tech" },
    { TYPE_ID: 2, FIELD_DATA: "M.Tech" },
    { TYPE_ID: 3, FIELD_DATA: "BE" },
    { TYPE_ID: 4, FIELD_DATA: "ME" },
    { TYPE_ID: 5, FIELD_DATA: "B.Com." },
    { TYPE_ID: 6, FIELD_DATA: "M.Com." },
  ];



  return (
    <div>
      <div className="usefilter2_container">
        <div className="usefilter2_form">
          <form>
            <div className="form-row2">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={isFilterValue.ADDRESS}
                  label="Location"
                  onChange={(e) => {
                    onChangeText("ADDRESS", e.target.value);
                  }}
                >
                  {cities &&
                    cities.length !== 0 &&
                    cities.map((item, index) => (
                      <MenuItem
                        key={index}
                        value={item.CITY_ID}
                      >{` ${item.CITY_NAME},${item.STATE_NAME},${item.COUNRTY_NAME}`}</MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
            <div className="form-row">
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                size="small"
                color="warning"
                label="Company"
                value={isFilterValue.NAME_OF_COMPANY}
                onChange={(e) =>
                  onChangeText("NAME_OF_COMPANY", e.target.value)
                }
              />
            </div>

            <div className="form-row2">
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                color="warning"
                label="Notice Period"
                value={isFilterValue.NOTICE_PERIOD}
                onChange={(e) => {
                  onChangeText("NOTICE_PERIOD", e.target.value);
                }}
              />
            </div>

            <div className="form-row2">
             <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Type Of Degree
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={parseInt(isFilterValue.TYPE_OF_EDUCATION)}
              label="Age"
              onChange={(e) =>
                onChangeText("TYPE_OF_EDUCATION", e.target.value)
              }
            >
              {eduxation_json.map((data, index) => (
                <MenuItem value={data.TYPE_ID}>{data.FIELD_DATA}</MenuItem>
              ))}
            </Select>
          </FormControl>
            </div>

            <div className="form-row2">
              <FormControl sx={{ borderColor: "#F7701D" }}>
                <InputLabel>Language Preference</InputLabel>
                <Select
                  labelId="select-demo"
                  id="language-select"
                  onChange={(e) => onChangeText("LANGUAGE", e.target.value)}
                  value={isFilterValue.LANGUAGE}
                >
                  <MenuItem value={"Hindi"}>Hindi</MenuItem>
                  <MenuItem value={"English"}>English</MenuItem>
                </Select>
              </FormControl>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
