import React from "react";
import { useState } from "react";
import "../../../css/Employer/Activitybook.css"
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard"
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import mail from "../../Employer/Activityimg/mail.png";
import call from "../../Employer/Activityimg/call.png";
import whatsapp from "../../Employer/Activityimg/whatsapp.png";
import { useNavigate } from "react-router-dom";
import ActivityBookTable from "./ActivityBookTable";
import { useDispatch } from "react-redux";
import { CircularLoding } from "../../../redux/action/AuthAction";
import axiosInstance from "../../../utils/axiosInstance";


export default function Activitybook() {
  const [isUserDetais, setisUserDetais] = useState([])
  const navigate = useNavigate();
  const handleWhatsapp = () => {
    navigate("/choosetemplate", { replace: "true" });
  }
  const dispatch = useDispatch();
  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  }


  React.useEffect(() => {
    GetUserDetails();
  }, [])

  const GetUserDetails = () => {
    Loading(true)
    axiosInstance.get('employer/activitybook').then((res) => {
      Loading(false);
      console.log(res.data.data,"res.data.data");
      setisUserDetais(res.data.data);
    })
  }





  return (
    <div className="background_img">
      <div className="activity_container">
        <JobSeekerdashboard />
        <div
          className="All_activity_content"
        >
          <DashboardProfile />
          <div className="activity_table">
            <ActivityBookTable isUserDetais={isUserDetais} />
          </div>
        </div>
      </div>
    </div>
  );
}
