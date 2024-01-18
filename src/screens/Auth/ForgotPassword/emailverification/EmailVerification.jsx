import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./ForgotPasswordpage1.css";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axiosInstance from "../../../../utils/axiosInstance";

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

export default function EmailVerification() {
  const [isemail, setemail] = React.useState(null)
  const navigation = useNavigate();
  const handlesubmit = () => {
    if (!isemail) {
      toast.error("please enter your mail")
    } else {
      axiosInstance.post('user/forgot-password', {
        EMAIL: isemail
      }).then(res => {
        toast.success(res.data.message)
      })
    }

  }

  return (
    <>
      <div className="background_img">
        <div className="forgotpassword_container1">
          <div className="forgotpassword_container">
            <img src="jobseeker/fmnlogo.svg" alt="_" />
            <div className="forgotheading">
              <h2>Reset Password</h2>
              <p style={{ textAlign: "center" }}>
                Please enter your email address and we'll send <br /> you a link to reset
                your password.
              </p>
            </div>
            <div className="forgot_input">
              <CssTextField
                sx={{ color: " #F7701D", width: "100%" }}
                required
                size="small"
                id="outlined-required"
                color="warning"
                type="email"
                label="Enter Email"
                onChange={(e) => { setemail(e.target.value) }}
              />
            </div>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F7701D", width: "20%", color: "#FFFFF", '&:hover': { backgroundColor: '#F7701D' }
              }}
              onClick={handlesubmit}
            >
              Submit
            </Button>

          </div >
        </div>
      </div>
    </>
  );
}
