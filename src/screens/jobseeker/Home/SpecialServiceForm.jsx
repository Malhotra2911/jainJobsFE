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
import { CssTextField, CustomSelect } from "../../../css/Employer/MaterialUicss/OwnCompany"
import { toast } from "react-toastify";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SSFORM from "./SSFORM";


export default function SpecialServiceForm() {
  

  return (
    <div className="ss" style={{ outline: "none" }}>
      <NavbarJS />
      <Box className="special_service">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          CV Building Session with Expert         </Typography>
        <div className="cv_content">
          <p>
            Find My Next can help you with remote assessment and tailoring ATS
            integrated resumes/CV along with impressive and effective cover
            letters. Get in touch with us and discover the latest industry
            trends, important keywords, significant highlights to include in
            your resume, and tips to write effective cover letters. Craft
            personalized smart cover letters and show your skills as a brilliant
            employee using our services.
          </p>
        </div>
        <SSFORM/>
      </Box>
    </div>
  );
}
