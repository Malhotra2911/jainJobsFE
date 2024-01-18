import React from "react";
import "../../../css/jobseeker/ReferalPage.css";
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import CryptoJS from "crypto-js";
import jwt_decode from "jwt-decode";
import {
  EncryptionKey,
  Homepage,
  ReferalEncryptionKey,
} from "../../../config/Config";
import { useSelector } from "react-redux";
import SideBar from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const ReferalPage = () => {
  const [isShareUrl, setisShareUrl] = React.useState();
  const location = useLocation();
  const navigation = useNavigate();

  function randomString(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const { user } = useSelector((state) => state.AuthReducer);

  React.useEffect(() => {
    if (user && user.length !== 0) {
      setisShareUrl(
        Homepage + "/Signuplogin?referal=fmnref@" + user[0].USER_ID);
    }
  }, []);

  const userVerify = () => {
    if (user[0].USER_ROLE == 1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="background_img">
      <div className="Refer_Job_main_Container">
        {userVerify() ? <SideBar /> : <JobSeekerdashboard />}
        <div className="Refer_Job_content">
          <DashboardProfile />
          <div className="refer_jobs">
            <div className="refer_head">
              <div className="refer_heading">
                <h2 className="wallet_heading">
                  Refer Friends &amp; Earn Credits
                </h2>
              </div>
              <div className="refer_money">
                <div className="wallent_money">
                  <p className="inr">100 INR</p>
                </div>
              </div>
            </div>
            <div className="refer_content">
              <div className="share_socially">
                <EmailShareButton url={isShareUrl}>
                  <EmailIcon round={true} />
                </EmailShareButton>

                <FacebookShareButton url={isShareUrl}>
                  <FacebookIcon round={true} />
                </FacebookShareButton>

                <LinkedinShareButton url={isShareUrl}>
                  <LinkedinIcon round={true} />
                </LinkedinShareButton>

                <TelegramShareButton url={isShareUrl}>
                  <TelegramIcon round={true} />
                </TelegramShareButton>

                <WhatsappShareButton url={isShareUrl}>
                  <WhatsappIcon round={true} />
                </WhatsappShareButton>

                <InstapaperShareButton url={isShareUrl}>
                  {/* <InstapaperIcon round={true} /> */}
                  <div
                    style={{
                      width: "66px",
                      height: "66px",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src="/jobseeker/instaicon.png"
                      alt=""
                      srcset=""
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "30px",
                      }}
                    />
                  </div>
                </InstapaperShareButton>

                <TwitterShareButton url={isShareUrl}>
                  <TwitterIcon round={true} />
                </TwitterShareButton>
              </div>
            </div>

            {/* <div>
              <CopyToClipboard text={isShareUrl}
                                onCopy={() => isShareUrl}>
                                <Button variant="contained" >copy</Button>
                            </CopyToClipboard>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
