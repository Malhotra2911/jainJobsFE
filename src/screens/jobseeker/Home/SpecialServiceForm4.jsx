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

export default function SpecialServiceForm4() {
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
    <div className="ss" style={{ outline: "none" }}>
        <NavbarJS/>
      <Box  className="special_service">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Marketing and Advertising Session{" "}
        </Typography>
        <div className="cv_content">
          <p>
            Expand your creative knowledge through our marketing and advertising
            sessions. Get smart strategies and unique insights from our industry
            experts and begin converting qualifying leads for yourself. Learn
            more about cutting-edge marketing trends, discuss marketing
            challenges and solutions, and programmatic advertising that awaits
            us in the future.{" "}
          </p>
        </div>
        <SSFORM/>
      </Box>
    </div>
  );
}
