import React from "react";
import "../../../css/Employer/Employerhomebanner1.css";
import Button from "@mui/material/Button";

export default function Employerhomebanner4() {
  return (
    // <div>
    <div className="employerheader">
      <div className="left_employee_header">
        <div className="box_b1">
       
          {/* <h1 className="reducehiring">Recruit top candidates</h1> */}
          {/* <p>or</p> */}
          <h1 className="reducehiring">Hit the Right Strategy to Hire Best Candidates!</h1>

          <h3>
          LWe follow a structured hiring process to get the best candidate for your company.         </h3>
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
