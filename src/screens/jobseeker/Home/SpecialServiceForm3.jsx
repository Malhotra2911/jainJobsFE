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
import { CssTextField } from "../../../css/Employer/MaterialUicss/OwnCompany";
import SSFORM from "./SSFORM";


export default function SpecialServiceForm3() {

  return (
    <div className="ss" style={{ outline: "none" }}>
        <NavbarJS/>
      <Box  className="special_service">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Entrepreneurship Building Sessions{" "}
        </Typography>
        <div className="cv_content">
          <p>
            Build your entrepreneurship skills by attending informative and
            insightful sessions by distinguished speakers from your field. It
            will cover industry trends, important entrepreneurial activities
            taken up by youth, building entrepreneurial resilience, developing
            entrepreneurial strategies to grow business and other skills for
            young minds.{" "}
          </p>
        </div>
        <SSFORM/>
      </Box>
    </div>
  );
}
