import React from "react";
import "../../../css/Employer/WhatsappMessage.css"
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard"
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile"
import { ImWhatsapp } from "react-icons/im";
import { useNavigate } from "react-router-dom";
export default function WhatsappMessage() {
  const navigate = useNavigate();
  const handleMail = ()=>{
    navigate("/mailmessage",{replace:"true"});
  }
  return (
    <div className="Whatsapp_main_content">
      <JobSeekerdashboard />
      <div className="whatsapp_content">
        <DashboardProfile />
        <div className="WhatsappMessage">
          <div className="whatsappmessage">
            <p className="head">Chat on the whatsapp with Akash Singh</p>
            <p className="icon">
              <ImWhatsapp />
            </p>
            <button onClick={handleMail}>Continue to chat</button>
            <p className="msg">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum LOrem
              Ipsum Lorem IpsumLorem I Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum LOrem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum LOrem Ipsum Lorem
              IpsumLorem I Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              LOrem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum LOrem Ipsum Lorem IpsumLorem I Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum LOrem Ipsum Lorem
              IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum LOrem Ipsum Lorem IpsumLorem I Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum LOrem Ipsum Lorem IpsumLorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
