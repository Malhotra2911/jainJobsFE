import React from "react";
import "../../../css/Employer/Employerhomebanner1.css";
import Button from "@mui/material/Button";

export default function Employerhomebanner3() {
  return (
    <div className="employerheader">
      <div className="left_employee_header">
        <div className="box_b1">
       
          {/* <h1 className="reducehiring">Find the right fit </h1> */}
          {/* <p>or</p> */}
          <h1 className="reducehiring">Pick the Right Person for the Right Job!</h1>

          <h3>
          Let us help you pick the right fit for your company, considering your core business activities.   </h3>
          <Button sx={{mt:4,mb:4,backgroundColor:"#F7701D",textTransform:"none","&:hover": {
      backgroundColor: '#F7701d'
    }}} variant="contained">Get Started</Button>
        </div>
      </div>
      <div className="right_employee_header">
        <div className="right_img"></div>
      </div>
    </div>
    // </div>
  );
}
