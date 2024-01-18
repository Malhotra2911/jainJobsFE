import React, { useRef, useState, useEffect } from "react";
import "../../../css/jobseeker/DashboardProfile.css";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import CircularProgressBar from "./CircularProgressBar/CircularProgressBar";
import DropDown from "../DropDown/DropDown";
import CircularStatic from "./CircularProgressBar/CircularProgressBar";
import Avatar from "@mui/material/Avatar";
import NotificationDropDown from "../NotificationDropDown/NotificationDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FeedbackForm } from "../FeedbackForm/FeedbackForm";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import useClickOutside from "./useClickOutside.jsx";
import Chip from "@mui/material/Chip";
import useClickOutsideNotify from "./useClickOutsideNotify.jsx";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Faq from "./Faq";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import { Homepage, ImageBackend } from "../../../config/Config";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Clock from "./Clock";
import EmployerDropdown from "../../Employer/ProfileBar/EmployerDropdown";
import axiosInstance from "../../../utils/axiosInstance";
import { getBlogPosts } from "../../../redux/action/CommonAction";
import {
  CircularLoding,
  getsubscribation,
} from "../../../redux/action/AuthAction";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const DashboardProfile = () => {
  const [progress, setProgress] = React.useState(75);
  const [dropdown, setDropdown] = useState(false);
  const [drop, setDrop] = React.useState(false);
  const [notify, setNotify] = useState(false);
  const [faq, setFaq] = useState(false);
  const [isUserState, setisUserState] = useState("employer/camera.jfif");
  const ref = useRef(null);
  const ref1 = useRef(null);
  useClickOutside(ref, () => setDropdown(false));
  useClickOutsideNotify(ref1, () => setNotify(false));
  const { user, notification } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const [iscompletebar, setiscompletebar] = useState(5);
  const [iscountnot, setiscountnot] = useState(0)




  const completeprofilebar = () => {
    if (user.length !== 0) {
      let counter = 0;
      let objelength = Object.keys(user[0]).length;
      Object.entries(user[0]).forEach(([key, value]) => {
        if (
          value === "null" ||
          value === null ||
          value === undefined ||
          value === "" ||
          value === {} ||
          value === [] ||
          value === "undefined"
        ) {
          counter = counter + 1;
        }
      });
      const finalcalculate =
        ((parseInt(objelength) - parseInt(counter)) * 100) /
        parseInt(objelength);
      if (Math.floor(finalcalculate) > 85) {
        setiscompletebar(100);
      } else {
        setiscompletebar(Math.floor(finalcalculate));
      }
    }
  };

  const handleClick = () => {
    if (parseInt(user[0].USER_ROLE) === 2) {
      setDropdown(true);
    } else if (parseInt(user[0].USER_ROLE) === 1) {
      setDrop(true);
    }
  };
  const [isCreditPoint, setisCreditPoint] = useState(0);

  React.useEffect(() => {
    if (user && user.length !== 0) {
      setisUserState(ImageBackend + user[0].PROFILEPIC);
      completeprofilebar();
    }
    axiosInstance.get("jobseeker/GetCredit").then((res) => {
      try {
        setisCreditPoint(res.data.USER_CREDIT);
      } catch {
        console.log("somthing went wrong!");
      }
    });
  }, [user]);



  React.useEffect(() => {
    if (notification && notification.length !== 0) {
      const newcount = notification.filter(data => data.SEEN === false)
      setiscountnot(newcount.length);
    }
  }, [notification])



  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };

  return (
    <>
      <div className="Jobseekerdashboard-Row">
        <div className="JOBS-Section">
          <div className="Profile-Tab">
            <div className="Profile_Tab_Left">
              <div style={{ display: "flex" }}>
                <h3 className="welcome_part">Welcome:</h3>
                <h3>
                  <span style={{ color: "#F27E32" }}>JAIN</span>
                  <span style={{ color: "#15B9B8" }}>JOBS</span>
                  {/* <span style={{ color: "#F7711C" }}>NEXT</span> */}
                </h3>
              </div>
              {/* <Search
                className="search_bar"
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "2rem 2rem 2rem 2rem",
                  "&:hover": { backgroundColor: "#FFFFFF" },
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "#000000" }} />
                  <Divider orientation="vertical" flexItem />
                </SearchIconWrapper>
                <StyledInputBase
                  sx={{ color: "#000000" }}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search> */}
            </div>
            <div className="Profile_Tab_Right">
              <div
                className="Profile-Section"
                // ref={ref}
                style={{ visibility: "visible" }}
                onClick={handleClick}
              >
                <Box position="relative" display="inline-flex">
                  <CircularProgress
                    style={{ color: "#F7711C" }}
                    thickness={3}
                    size="3.5rem"
                    variant="determinate"
                    value={iscompletebar}
                  />
                  <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Avatar
                      className="profile_img"
                      sx={{ backgroundColor: "white" }}
                      src={
                        user && user.PROFILEPIC
                          ? ImageBackend + user.PROFILEPIC
                          : isUserState
                      }
                      alt=" "
                    />
                  </Box>
                </Box>
                <h5>Profile Complete: {`${iscompletebar}%`}</h5>
              </div>
              {dropdown && <DropDown Dropdown={setDropdown} />}
              {drop && <EmployerDropdown Drop={setDrop} />}

              <Link
                to="/referpage"
                style={{ textDecoration: "none", width: "20%" }}
              >
                <div className="credit_notification">
                  <Chip
                    icon={<MonetizationOnIcon />}
                    size="medium"
                    sx={{
                      width: "100%",
                      background: "white",
                      display: "flex",
                      justifyContent: "space-evenly",
                      cursor: "pointer",
                    }}
                    label={isCreditPoint ? isCreditPoint.toString() : 0}
                  />
                </div>
              </Link>
              <div
                className="notification_section"
                ref={ref1}
                onClick={() => setNotify(true)}
              >
                <Badge color="warning" badgeContent={iscountnot}>
                  <NotificationsIcon sx={{ cursor: "pointer" }} />
                </Badge>
                {notify && <NotificationDropDown />}
                {/* </div> */}
              </div>

              <div className="clock">
                <Clock />
              </div>
            </div>
          </div>
        </div>
      </div>
      {faq && <Faq FaQ={setFaq} />}
    </>
  );
};

export default DashboardProfile;
