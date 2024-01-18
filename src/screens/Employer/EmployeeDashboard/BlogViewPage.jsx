import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import SideBar from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { useSelector } from "react-redux";
import { GetUserAction } from "../../../redux/action/AuthAction";
import "../../../css/Employer/BlogViewPage.css"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { ImageBackend } from "../../../config/Config";


export default function BlogsAndActivity() {
  const [info, setInfo] = useState(null);
  const { user } = useSelector((state) => state.AuthReducer);
  const { blogposts } = useSelector((state) => state.CommonReducer);
  const [isbolog, setisbolog] = useState([]);

  var userVerify = () => {
    if (user && user.length !== 0 && user[0].USER_ROLE == 1) {
      return true;
    } else {
      return false;
    }
  };

  const { BLOGID } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  React.useEffect(() => {
    if (blogposts && blogposts.length !== 0) {
      const filterblog = blogposts.filter(
        (data) => data.BLOG_ID == parseInt(BLOGID)
      );
      setisbolog(filterblog);
    }
  }, []);

  return (
    <>
      <div className="background_img">
        <div className="activity_container">
          {userVerify() ? <SideBar /> : <JobSeekerdashboard />}

          <div className="All_activity_content">
            <DashboardProfile />

            {isbolog &&
              isbolog.length !== 0 &&
              isbolog.map((data, index) => (
                <>
                  
                  <div
                    style={{
                      height: "80vh",
                      overflowY: "scroll",
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "1rem",
                      justifyContent: "space-around",
                      flexWrap: "wrap",
                      paddingLeft: 0,
                    }}
                  >
                    <div>
                      <img src={ImageBackend + data.IMAGE} alt="" srcset="" style={{'width':'30vw','height':'auto'}} />
                      <h2> {data.BLOG_TITLE}</h2>
                    </div>
                    <div>
                      <p className="description_blog">{data.DESCRIPTION}</p>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
