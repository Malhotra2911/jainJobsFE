import * as React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSelector } from "react-redux";
import { CssTextField,CustomSelect } from "../../../../css/Employer/MaterialUicss/OwnCompany";

export default function Profile1({ isFrom, setisFrom }) {
  const { user } = useSelector((state) => state.AuthReducer);
  const onChangeText = (name, value) => {
    setisFrom({ ...isFrom, [name]: value });
  };
  React.useEffect(() => {
    if (user && user.length !== 0) {
      _userdatafunction();
    }
  }, [user]);

  const _userdatafunction = () => {
    // const ACADIMIC_INFORMATION = JSON.parse(user[0].ACADIMIC_INFORMATION)
    // setisFrom({
    // });
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
    <div className="p1_main">
      <h5 style={{ textAlign: "center", color: "red" }}>
        please enter your last education detail
      </h5>
      <form
        className="p1_main_form"
        style={{ width: "100%", height: "40.2vh", overflowY: "scroll" }}
      >
        <div className="form-row">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{color: isFrom.TYPE_OF_EDUCATION ? '#F7701D' :"black"}}>
              Type Of Degree
            </InputLabel>
            <CustomSelect
              labelId="demo-simple-select-label"
              size="small"
              id="demo-simple-select"
              value={parseInt(isFrom.TYPE_OF_EDUCATION)}
              label="Type Of Degree"
              onChange={(e) =>
                onChangeText("TYPE_OF_EDUCATION", e.target.value)
              }
            >
              {eduxation_json.map((data, index) => (
                <MenuItem value={data.TYPE_ID}>{data.FIELD_DATA}</MenuItem>
              ))}
            </CustomSelect>
          </FormControl>
          <br />
          <CssTextField
            sx={{ color: " #F7701D", width: "100%" }}
            required
            id="outlined-required"
            color="warning"
            focused
            size="small"
            value={isFrom.UNIVERSITY_NAME}
            onChange={(e) => onChangeText("UNIVERSITY_NAME", e.target.value)}
            label="University Name"
          />
          <br />
          <CssTextField
            sx={{ color: " #F7701D", width: "100%" }}
            required
            id="outlined-required"
            color="warning"
            size="small"
            focused
            type="date"
            label="Year of Passing"
            placeholder="please enter year fo passing"
            value={isFrom.PASSING_YEAR}
            onChange={(e) => onChangeText("PASSING_YEAR", e.target.value)}
          />
          <br />
          <CssTextField
            sx={{ color: " #F7701D", width: "100%" }}
            required
            id="outlined-required"
            color="warning"
            size="small"
            focused
            type="text"
            label="Branch or Subject"
            // placeholder="please enter Branch or Subject"
            value={isFrom.SUBJECT_OF_PASSING}
            onChange={(e) => onChangeText("SUBJECT_OF_PASSING", e.target.value)}
          />
          <br />
          <CssTextField
            sx={{ color: " #F7701D", width: "100%" }}
            required
            id="outlined-required"
            color="warning"
            size="small"
            type="text"
            focused
            label="Percentage"
            // placeholder="please enter Branch or Subject"
            value={isFrom.PERCENTAGE}
            onChange={(e) => onChangeText("PERCENTAGE", e.target.value)}
          />
          <br />
        </div>
      </form>
    </div>
  );
}
