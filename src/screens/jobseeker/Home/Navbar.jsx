import React, { useState } from "react";
import "../../../css/jobseeker/Navbar.css";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaBars } from "react-icons/fa";
import DreamJob from "./DreamJob";
import FeaturedCompanies from "./FeaturedCompanies";
import WhatCanFMNHelp from "./WhatCanFMNHelp";
import ChooseYourPlan from "./ChooseYourPlan";
import Refer from "./Refer";
import CreateCard from "./CreateCard";
import NavbarJS from "./NavbarJS";
import Services from "./Services";
import HowtoApply from "./HowtoApply";
import FeedbackCard from "./FeedbackCard";
import WhatClientSays from "./WhatClientSays";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";
import jwt_decode from "jwt-decode";
import FreelancerHeader from "./FreelancerHeader";
import UploadResume from "./UploadResume";
import TopHeader from "./TopHeader";
import PhotoAnimation from "./VerticalCrousel/PhotoAni/PhotoAni";
import PhotoAni from "./VerticalCrousel/PhotoAni/PhotoAni";
import SpecialServiceForm from "./SpecialServiceForm";
import SpecialServiceCard from "./SpecialServiceCard";


export default function Navbar() {

  
  const [hamberger, setHamberger] = useState(false);
  const [isDashboard, setDashboard] = useState(false);
  const toggle = () => setHamberger(!hamberger);
  const [isAuth, setAuth] = React.useState(false);
  const [age, setAge] = React.useState("");
  const [popup, setPopup] = React.useState(false);

  
  return (
    <>
      <div className="Navbar_content_jobseeker">
        <div className="navbar_header">
          <NavbarJS />
          <TopHeader />
        </div>
        {/* <FeaturedCompanies /> */}
        <UploadResume />
        <PhotoAni />
        {/* <ChooseYourPlan /> */}
        {/* <Services /> */}
        <HowtoApply />
        <div className="combination_feedback_what_client">
          <div className="combo_box"></div>
          <FeedbackCard />
          <WhatClientSays />
        </div>
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
}
