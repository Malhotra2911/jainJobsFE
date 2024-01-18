import React, { useState } from "react";
import "../../../css/Employer/JobNotPosted.css"
import JobSeekerdashboard from '../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard'
import DashboardProfile from '../../../components/JobSeeker/UserDashboardProfile/DashboardProfile'
import { Link } from "react-router-dom";
export default function TakeSubscription() {
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
                <h3>You are missing out from the premium services. </h3>
              </div>
              <div className="NoJob-btn">
                <Link to="/JobseekerSubscription">
                <button className="pstjob" >Buy Subscription</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
