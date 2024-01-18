import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import SideBar from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { useSelector } from "react-redux";
import "./AllNotification.css";
import Swal from "sweetalert2";
import axiosInstance from "../../../utils/axiosInstance";
import { GetNotification } from "../../../redux/action/AuthAction";

export default function AllNotification() {
  const { blogposts } = useSelector((state) => state.CommonReducer);
  const [isbolog, setisbolog] = useState([]);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { user, notification } = useSelector((state) => state.AuthReducer);
  var userVerify = () => {
    if (user && user.length !== 0 && user[0].USER_ROLE == 1) {
      return true;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    if (notification && notification.length !== 0) {
      setisbolog(notification);
    }
  }, [notification]);

  React.useEffect(() => {
    axiosInstance.post("user/update-notify").then((res) => {
      dispatch(GetNotification());
    });
  }, []);

  return (
    <>
      <div className="background_img">
        <div className="activity_container">
          {userVerify() ? <SideBar /> : <JobSeekerdashboard />}

          <div className="All_activity_content">
            <DashboardProfile />
            <div className="notification_page">
              <div style={{ width: "100%" }}>
                <h2 style={{ textAlign: "center" }}>
                  {" "}
                  <u> Notification </u>{" "}
                </h2>
              </div>
              <br />

              {isbolog && isbolog.length !== 0 ? (
                isbolog.map((data, index) => (
                  <Notificationcard data={data} key={index} />
                ))
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Notificationcard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div  className="notify_card">
      <div className="itemEmp">
        <Link
          to={"/ReadNotification/" + data.NOTIFICATION_ID}
          className="titleEmp"
          style={{ textDecoration: "none" }}
        >
          <h6 className="questionnoEmp"> {data.TITLE}</h6>
        </Link>
      </div>
    </div>
  );
};
