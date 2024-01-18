// import React, { useState } from 'react'
// import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material/styles";
// import Typography from '@mui/material/Typography';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import "./Questions1.css"
// import "../../../../css/jobseeker/Questions1.css"
// import { Questions2 } from '../Questions2/Questions2';
// import { MultiStepProgressBar } from "./components/MultiStepProgressBar";
// import { Container, Row, Col, Card} from "react-bootstrap";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
// import { MultiStepForm } from "./MultiStepForm.js";
// import { questions } from "./Questions.js";




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
const Questions1 = ({ Question11 }) => {
  // const [popupSecond, setPopupSecond] = useState(false)
  const [index, setIndex] = useState(1);
  // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}

  return (
    <div className="main_container2">
      <div className="container1">

        <div className="box2">
          <form action="" style={{ width: "100%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="Job Description"
              multiline
              color="warning"
              rows={3}
              defaultValue="Default Value"
            />
          </form>
        </div>
        <div className="box4">
        </div>
      </div>
    </div>
  )
}

export default Questions1