import React from "react";
import { IoMail } from "react-icons/io5";
import "../../../css/Employer/MailMessage.css"
import JobSeekerdashboard from '../../../components/Employer/employersidebar/JobSeekerdashboard'
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile"
import {Link} from "react-router-dom";
export default function MailMessage() {
  return (
    <div className="mail_main_content">
      <JobSeekerdashboard />
      <div className="mail_content">
        <DashboardProfile />
        <div className="MailMessage">
          <div className="mailmessage">
            <p className="Mail-icon">
              <IoMail />
            </p>
            <button className="Mail-new">New Message</button>
            {/* <input
              type="mail"
              name=""
              id=""
              placeholder="To:"
              className="Mail-id"
            /> */}
            <div className="v1"></div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your mail Message:"
              className="Mail-msg"
            />
            <Link style={{textDecoration:"none"}} to="/activitybook">
            <button className="Mail-Btn">Send</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
