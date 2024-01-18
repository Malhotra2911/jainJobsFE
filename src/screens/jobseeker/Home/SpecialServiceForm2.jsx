import React from "react";
// import "../../../css/jobseeker/SpecialService.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import "../../../css/jobseeker/SpecialService.css";
import { useDispatch } from "react-redux";
import { specialService } from "../../../redux/action/JobSeekerAction";
import NavbarJS from "./NavbarJS";
import { CssTextField } from "../../../css/Employer/MaterialUicss/OwnCompany";
import SSFORM from "./SSFORM";

export default function SpecialServiceForm2() {
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
    <div>
      <div className="ss" style={{ outline: "none" }}>
        <NavbarJS/>
        <Box  className="special_service">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Personality Development Sessions{" "}
          </Typography>
          <div className="cv_content">
            <p>
              Boost your personal growth and express yourself confidently
              through our personality development sessions with your field
              experts. Acquire skills, brush up on your important attributes,
              develop your personality as unique as possible, and get an edge
              over your peers. Let our team help you develop body language,
              leadership, smart decision-making, and negotiation skills.{" "}
            </p>
          </div>
          <SSFORM/>
        </Box>
      </div>
    </div>
  );
}
