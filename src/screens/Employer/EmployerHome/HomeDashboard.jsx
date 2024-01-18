import React from "react";
import "../../../css/Employer/HomeDashboard.css"

export default function HomeDashboard() {
  return (
    <div className="homedashboard_container">
      <div className="homedashboard_heading">
        <div className="heading1">
          {" "}
          <h3>Dashboard</h3>          </div>

          <div className="heading2">
            <h4>Find the candidates who meet your bar</h4>
        </div>
      </div>
      <div className="homedashboard_content">
        <div className="homedashboard-leftcontent">
          <div className="dashboard_card">
            <div className="dashboardcard_content">
              <h5>My Job Postings:</h5>
              <p>
                This will show the multiple openings that the recruiter has paid
                for and posted
              </p>
            </div>
          </div>
          <div className="dashboard_card">
            <div className="dashboardcard_content">
              <h5>Jain Jobs BLOGS &amp; ACTIVITY:</h5>
              <p>
                This will show the multiple openings that the recruiter has paid
                for and posted
              </p>
            </div>
          </div>
          <div className="dashboard_card">
            <div className="dashboardcard_content">
              <h5>Jain Jobs FREELANCE WORLD:</h5>
              <p>
                This will show the multiple openings that the recruiter has paid
                for and posted
              </p>
            </div>
          </div>
          {/* <h4 className="head4">
            And Many more just Login and start hiring the deserving canditate
          </h4> */}
        </div>
        <div className="homedashboard_right_content">
          <img src="employer/Employeepostedjob.png" alt="" />
        </div>
      </div>
    </div>
  );
}