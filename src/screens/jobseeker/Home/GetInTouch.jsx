import React, { useState } from "react";
import "../../../css/jobseeker/GetInTouch.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux"
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { ContactAction } from "../../../redux/action/CommonAction";
import { toast } from "react-toastify";

const CssTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    fontWeight: "600",
    fontsize: "25px"
  },
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

const GetInTouch = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("All Fields are required!");
      return false;
      
    }
    dispatch(ContactAction(name, email, message))
    setName("");
    setEmail("");
    setMessage("");
  }
  
  return (
    <>
      <div className="contact_container" id="contact">
        <div className="left_contact_content">
          <div className="contact_img">
          </div>
          <div className="left_contact">
            <h3 className="contact_heading">Contact Information</h3>
            <div className="message_link_box">
              <CallIcon sx={{ transform: "scale(1.5)" }} />
              <h3 className="message_sub_head">9752149055</h3>
            </div>
            <div className="message_link_box">
              <EmailIcon sx={{ transform: "scale(1.5)" }} />
              <h3 className="message_sub_head">support@fmn.in</h3>
            </div>
            <div className="message_link_box">
              <LocationOnIcon sx={{ transform: "scale(1.5)" }} />
              <h3 className="message_sub_head">Ahmedabad, India</h3>
            </div>
          </div>
        </div>
        <div className="right_contact">
          <form action="" className="right_contact_form" onSubmit={handleSubmit}>
            <div className="input_div">
              <CssTextField
                sx={{ height: "5rem" }}
                id="standard-basic"
                label="Your Name"
                required
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CssTextField
                id="standard-basic"
                label="Your Email"
                type="email"
                required
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_div">
              <CssTextField
                sx={{ width: "100%" }}
                id="filled-multiline-static"
                label="Message"
                required
                multiline
                rows={4}
                variant="standard"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button
              sx={{
                width: "50%",
                height: "3rem",
                background: "#F7701D",
                boxShadow: " 0px 4px 20px rgba(0, 0, 0, 0.25)",
                borderRadius: " 5px",
                mt: 2,
                mb: 2,
                textTransform: "none",
                color: "#000000",
                "&:hover": { backgroundColor: "#F7701D" },
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
