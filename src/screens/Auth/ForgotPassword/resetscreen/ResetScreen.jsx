import React, { useState } from "react";
import "./ForgotPasswordpage2.css";
import { styled } from "@mui/material/styles";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../../utils/axiosInstance";
import { CssTextField } from "../../../../css/Employer/MaterialUicss/OwnCompany";

export default function ResetScreen() {
  const [isotp, setisotp] = useState(null);
  const [ispassword, setpassword] = useState(null);
  const [iscpassword, setcpassword] = useState(null);
  const { emailId } = useParams();

  const onhandlesubmit = () => {
    if (!emailId) {
      toast.error("somthing went wrong!");
      return false;
    }

    if (!isotp) {
      toast.error("please enter otp");
      return false;
    }
    if (!ispassword) {
      toast.error("please enter password");
      return false;
    }
    if (!iscpassword) {
      toast.error("please enter confirm password");
      return false;
    }
    if (ispassword !== iscpassword) {
      toast.error("please enter same password");
      return false;
    }

    if (isotp && ispassword && iscpassword) {
      axiosInstance
        .post("/user/reset-password", {
          EMAIL: emailId,
          PASSWORD: ispassword,
          OTP: isotp,
        })
        .then((res) => {
          try {
            toast.success("password change successfully");
          } catch {
            toast.error("somthing went wrong!");
          }
        });
    }
  };

  return (
    <>
      <div className="background_img">
        <div className="forgotpassword_container1">
          <div className="forgotpassword_container2">
            {/* <img src="jobseeker/fmnlogo.svg" alt="_" /> */}
            <div className="otp_container">
              <div className="forgotheading2">
                <h2>
                  {" "}
                  <u>Find My Next</u>{" "}
                </h2>
                <h3>Enter OTP</h3>
                <p style={{ textAlign: "center" }}>
                  Please enter OTP which you have recieved on <br />
                  your email address for the verification purpose
                </p>
              </div>
            </div>
            <div className="rememberpassword_container">
              <div className="forgot_input1">
                <CssTextField
                  sx={{ color: " #F7701D", width: "100%" }}
                  required
                  size="small"
                  id="outlined-required"
                  color="warning"
                  label="Enter OTP"
                  onChange={(e) => setisotp(e.target.value)}
                />
              </div>
              <h2>Reset Password</h2>
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                size="small"
                color="warning"
                label="New Password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                id="outlined-required"
                color="warning"
                size="small"
                label="ReEnter Password"
                onChange={(e) => setcpassword(e.target.value)}
              />
              <Button
                variant="contained"
                onClick={onhandlesubmit}
                sx={{
                  backgroundColor: "#F7701D",
                  width: "64%",
                  color: "#FFFFF",
                  "&:hover": { backgroundColor: "#F7701D" },
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
