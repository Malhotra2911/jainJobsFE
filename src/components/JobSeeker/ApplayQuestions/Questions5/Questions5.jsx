import React, { useState } from "react";
// import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { CssTextField } from "../../../../css/Employer/MaterialUicss/OwnCompany";
// import "../../../../css/jobseeker/Questions5.css";

export const Questions5 = ({ questions5 }) => {
  return (
    <div>
      <div className="main_contentq5">
        <div className="container1">
          {/* <h1>Hi Kaltsa</h1> */}
          {/* <div className="box1">
            <div className="items"></div>
            <div className="items"></div>
            <div className="items"></div>
            <div className="items"></div>
            <div className="items"></div>
          </div> */}
          <div className="box2">
            {/* <h2 component="h1" style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: "400", fontSize: "25px", lineHeight: "15px", color: "#000000" }} className='q1text' variant="h5">
              Q5. &nbsp; Tell me about yourself ?
            </h2> */}
            <form action="" style={{width:"100%",display:'flex',alignItems:"center",justifyContent:"center"}}>
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
          <div className="box4"></div>
        </div>
      </div>
    </div>
  );
};
