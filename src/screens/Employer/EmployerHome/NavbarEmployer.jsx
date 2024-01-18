import React, { useState } from "react";
import "../../../css/Employer/NavbarEmployer.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import EmployerHeader from "./EmployerHeader";
import NavbarEM from "./NavbarEM";
import NavbarJS from "../../jobseeker/Home/NavbarJS";

export default function NavbarEmployer() {
  const [hamberger, setHamberger] = useState(false);
  const toggle = () => setHamberger(!hamberger);

  return (
    <>
      <div className="Navbar_section">
        <NavbarEM/>
        {/* <NavbarJS/> */}
        <EmployerHeader/>
      </div>
    </>
  );
}
