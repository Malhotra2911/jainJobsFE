import React from "react";
import "../../../css/Employer/Employerhomebanner1.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Employerhomebanner2() {
  return (
    // <div>
    <div className="employerheader">
      <div className="left_employee_header">
        <div className="box_b1">
          <h1 className="reducehiring">Cut Hiring Cost</h1>
          <h3>
            We understand the candidate driven market and help in easy recruitment in half the average cost.         </h3>
          <Link to="/Signuplogin" className="link_btns">
            <Button sx={{
              mt: 4,
              mb: 4,
              backgroundColor: "#F7701D",
              textTransform: "none",
              "&:hover": { backgroundColor: '#F7701d' }
            }} variant="contained">Get Started</Button>
          </Link>
        </div>
      </div>
      <div className="right_employee_header">
        <div className="right_img_boy"></div>
      </div>
    </div>
    // </div>
  );
}
