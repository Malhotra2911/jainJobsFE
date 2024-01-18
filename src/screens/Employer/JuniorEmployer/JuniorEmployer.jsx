import React from 'react'
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import "./JuniorEmployer.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";


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

export default function JuniorEmployer() {
  const [value, setValue] = React.useState();


  const handleChange = (event) => {
    setValue(event.target.value);
  };





  return (
    <div className='junioreemployer_admin_formcontainer'>
      <div className="junioremployer_admin">

      </div>
      <div className="junioremployer_admin_form">
      <CssTextField
          sx={{ color: " #F7701D", width: "100%" }}
          required
          id="outlined-required"
          color="warning"
          label="Name"
        />
<CssTextField
          sx={{ color: " #F7701D", width: "100%" }}
          required
          id="outlined-required"
          color="warning"
          label="Email"
        />
<CssTextField
          sx={{ color: " #F7701D", width: "100%" }}
          required
          id="outlined-required"
          color="warning"
          label="Password"
        />
<CssTextField
          sx={{ color: " #F7701D", width: "100%" }}
          required
          id="outlined-required"
          color="warning"
          label="Confirm Password"
        />
 <FormControl sx={{borderColor:"#F7701D",width:"100%"}}>
                <InputLabel>Role</InputLabel>
                <Select sx={{borderColor:"#F7701D"}}
                  labelId="select-demo"
                  id="location-select"
                  value={value}
                  onChange={handleChange}
                  // input={<OutlinedInput label="Name" />}
                  // MenuProps={MenuProps}
                >
                    <MenuItem value={"recruiter"}>Recruiter</MenuItem>
                    <MenuItem value={"hr head"}>HR Head</MenuItem>

                </Select>
              </FormControl>
              <Button
        variant="contained"
        sx={{
          backgroundColor: "#F7701D",
          width: "20%",
          color: "#FFFFF",
          "&:hover": { backgroundColor: "#F7701D" },
        }}
      >
        Submit
      </Button>
      </div>
    </div>
  )
}
