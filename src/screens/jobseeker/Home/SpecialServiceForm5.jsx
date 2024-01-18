import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import "../../../css/jobseeker/SpecialService.css";
import { useDispatch } from "react-redux";
import { specialService } from "../../../redux/action/JobSeekerAction";
import NavbarJS from "./NavbarJS";
import SSFORM from "./SSFORM";


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

export default function SpecialServiceForm5() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobno, setMobNo] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(specialService(name, email, mobno));
    alert(name, email, mobno);
    setName("");
    setEmail("");
    setMobNo("");
  };

  return (
    <div className ="ss" style={{ outline: "none" }}>
        <NavbarJS/>
      <Box  className="special_service">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Motivation and Confidence Boost Up Sessions{" "}
        </Typography>
        <div className="cv_content">
          <p>
            Further your professional development by enhancing your confidence.
            Change your mindset for the better and eliminate negative language.
            Attend our motivation and confidence boost sessions organized by
            industry experts. It will have a positive influence on increasing
            your confidence and can improve your performance at the workplace.{" "}
          </p>
        </div>
        <SSFORM/>
      </Box>
    </div>
  );
}
