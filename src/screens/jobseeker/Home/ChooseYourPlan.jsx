import React from "react";
import "../../../css/jobseeker/ChooseYourPlan.css";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom';
export default function ChooseYourPlan() {
  return (
    <>
      <div className="choose_your_plans">
        <h3 className="choose_heading">Choose your Plans</h3>
        <h4 className="choose_sub_heading">
          Discover's What's Beyond Your Limit
        </h4>
        <div className="choose_plan_content">
          <div className="choose_img">
            <img
              className="choose-img_main"
              src="jobseeker/chooseplanimg.png"
              alt="_"
            />
          </div>
          <div className="choose_plan_card">
            <div className="basic_plan_card">
              <h4 className="plan_name_heading">Basic Plans</h4>
              <p className="plan_price">1 Month / 300INR</p>
              <p className="plan_price">3 Month / 500INR</p>
              <Link to="/Signuplogin" style={{ listStyle: "none", textDecoration: "none",width:"70%" }}>
                <Button
                  sx={{
                    width: "100%",
                    background: "rgba(247, 112, 29, 0.39)",
                    boxShadow: " 0px 4px 20px rgba(0, 0, 0, 0.25)",
                    borderRadius: " 5px",
                    mt: 2,
                    textTransform: "none",
                    color: "#000000",
                    "&:hover": { backgroundColor: "#F7701D" },
                  }}
                  variant="contained"
                >
                  Try Now
                </Button>
              </Link>
            </div>
            <div className="Premium_plan_card">
              <h4 className="plan_name_heading">Premium Plans</h4>
              <p className="plan_price">1 Month / 300INR</p>
              <p className="plan_price">3 Month / 500INR</p>
              <Link to="/Signuplogin" style={{ listStyle: "none", textDecoration: "none",width:"70%" }}>
                <Button
                  sx={{
                    width: "100%",
                    background: "rgba(247, 112, 29, 0.39)",
                    boxShadow: " 0px 4px 20px rgba(0, 0, 0, 0.25)",
                    borderRadius: " 5px",
                    mt: 2,
                    textTransform: "none",
                    color: "#000000",
                    "&:hover": { backgroundColor: "#F7701D" },
                  }}
                  variant="contained"
                >
                  Try Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
