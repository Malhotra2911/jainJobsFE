import React from "react";
// import "./LogHistory.css";
import "../../../css/Employer/LogHistory.css"
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard"
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile"
export default function LogHistory() {
  return (
    <div className="log_history_main_content">
      <JobSeekerdashboard />
      <div className="log_history_content">
        <DashboardProfile />
        <div className="LogHistory">
          <div className="loghistory">
            <div className="log-head">
              <p>Log History</p>
            </div>
            <div className="Log-tabl">
              <table id="table">
                <tr>
                  <th className="history_box_heading">Date/Time</th>
                  <th className="history_box_heading">Template Name</th>
                  <th className="history_box_heading">Mode</th>
                  <th className="history_box_heading">Canditate Feedback</th>
                </tr>
                <tr>
                  <td className="history_box"></td>
                  <td className="history_box"></td>
                  <td className="history_box"></td>
                  <td className="history_box"></td>
                </tr>
                <tr>
                  <td className="history_box"></td>
                  <td className="history_box"></td>
                  <td className="history_box"></td>
                  <td className="history_box"></td>
                </tr>
                <tr>
                  <td className="history_box"></td>
                  <td className="history_box"></td>
                  <td className="history_box"></td>
                  <td className="history_box"></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
