import React from "react";
import "../../../css/Employer/Employerhomebanner1.css";
import Button from "@mui/material/Button";

export default function Employerhomebanner5() {
  return (
    // <div>
    <div className="employerheader">
      <div className="left_employee_header">
        <div className="box_b1">
          <h1 className="reducehiring">Get Flexible Payment Options</h1>
          <h3>
            Discover the benefits of Find My Next premium membership with credit
            cards, Debit cards, Paypal, UPI, wallet, and internet banking for
            Indian and International customers.{" "}
          </h3>
          <Button
            sx={{
              mt: 4,
              mb: 4,
              backgroundColor: "#F7701D",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#F7701d",
              },
            }}
            variant="contained"
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="right_employee_header">
        <div className="right_img"></div>
      </div>
    </div>
  );
}
