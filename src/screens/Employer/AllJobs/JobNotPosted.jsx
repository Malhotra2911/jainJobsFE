import React, { useState } from "react";
import "../../../css/Employer/JobNotPosted.css"
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "./../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { Link } from "react-router-dom";
export default function JobNotPosted() {
  return (
    <div className="background_img">
      <div className="Job_not_posted">
        <JobSeekerdashboard />
        <div
          className="Job_NotPosted_content"
        >
          <DashboardProfile />
          <div className="JobNotPosted">
            <div className="jobnotposted">
              <div className="NoJob-img">
                <img src="employer/NoJob.png" alt="NOJOBPOSTING" />
              </div>
              <div className="NoJob-Heading">
                <h2>You have not posted any jobs </h2>
              </div>
              <div className="NoJob-btn">
                <Link to="/createjobpost">
                <button className="pstjob" >Post a Job</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
