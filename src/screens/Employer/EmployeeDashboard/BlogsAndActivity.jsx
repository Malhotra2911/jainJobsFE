import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import SideBar from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { useSelector } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  
  Typography,
} from "@mui/material";
import { ImageBackend } from "../../../config/Config";



export default function BlogsAndActivity() {
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

  React.useEffect(() => {
    if (blogposts && blogposts.length !== 0) {
      setisbolog(blogposts);
    }
  }, [blogposts]);


  

  return (
    <>
      <div className="background_img">
        <div className="activity_container">
          {userVerify() ? <SideBar /> : <JobSeekerdashboard />}

          <div className="All_activity_content">
            <DashboardProfile />
            <div
              style={{
                height: "80vh",
                overflowY: "scroll",
                width:"95%",
                display: "flex",
                flexDirection: "row",
                // marginTop: "1rem",
                margin:"auto",
                justifyContent: "space-around",
                flexWrap: "wrap",
                paddingLeft: 0,
              }}
            >
              {isbolog &&
                isbolog.length !== 0 &&
                isbolog.map((data, index) => (
                  <Blogcard data={data} key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Blogcard = ({ data }) => {
  const navigate = useNavigate();
  const handlepress_readmore = () => {
    navigate("/read-blogs/" + data.BLOG_ID);
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          sx={{padding:1,background:"aliceblue"}}
          image={ImageBackend + data.IMAGE}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {data.BLOG_TITLE.substring(1, 70)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.DESCRIPTION.length > 100
              ? data.DESCRIPTION.substring(1, 100) + "...."
              : data.DESCRIPTION}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handlepress_readmore}
          sx={{
            // width: "50%",
            borderRadius: "7px",
            // height: "7vh",
            textTransform: "none",
            color: "#000000",
            backgroundColor: "rgba(247, 112, 29, 0.39)",
            "&:hover": {
              backgroundColor: "rgba(247, 112, 29, 0.39)",
            },
          }}
          
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
