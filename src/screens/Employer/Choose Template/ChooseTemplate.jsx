import React, { useState } from "react";
// import Data from './ChooseTemplateData'
import Data from "../../../mockJson/ChooseTemplateData";
import "../../../css/Employer/ChooseTemplate.css";
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddTemplate from "../AddTemplatePopup/AddTemplate";

export default function ChooseTemplate() {
  const [template, setTemplate] = useState(false);
  const navigate = useNavigate();
  const handleLoghistory = () => {
    navigate("/loghistory", { replace: "true" });
  };
  return (
    <>
      <div className="choose">
        <JobSeekerdashboard />
        <div className="column">
          <DashboardProfile />
          <div className="ChooseTemplate">
            <p className="paratemp">
              Choose the template you want to whatsapp the candidate
            </p>

            <div className="Choosetemplate">
              {/* <div className="temp-head"> */}
                <div className="choosetemp_addqn">
                  <button className="addtemp" onClick={() => setTemplate(true)}>
                    {" "}
                    <AddCircleIcon />
                    Add Template
                  </button>
                  {template && <AddTemplate addtemplatepopup={setTemplate} />}
                </div>
                <div className="back_log_btn">
                  <Link to="/activitybook" >
                    <button className="addtempb">Back</button>
                  </Link>

                  <button className="addtempl" onClick={handleLoghistory}>
                    Log History
                  </button>
                </div>
              {/* </div> */}
              <div className="temp-body">
                {Data.map((Choose, index) => (
                  <ChooseTemplateFun key={index} {...Choose} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function ChooseTemplateFun(props) {
  const { head, headmsg, subHead, submsg, bodymsg } = props;
  const navigate = useNavigate();
  const chatWhatsapp = () => {
    navigate("/whatsappmessage", { replace: "true" });
  };
  return (
    <div className="cho-temp-body" onClick={chatWhatsapp}>
      <div className="temp-body-head">
        <input type="radio" name="" id="" />
      </div>
      <div className="temp-body-msg">
        <p>
          <span>{head} : </span>
          {headmsg}
        </p>
        <p>
          <span>{subHead} : </span>
          {submsg}
        </p>
        <p>{bodymsg}</p>
      </div>
    </div>
  );
}
