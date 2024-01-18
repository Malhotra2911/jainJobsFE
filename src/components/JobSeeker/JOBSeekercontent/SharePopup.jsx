import React from "react";
import CryptoJS from "crypto-js";
import jwt_decode from "jwt-decode";
import { EncryptionKey, Homepage } from "../../../config/Config";
import "../../../css/jobseeker/SharePopup.css";
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
export default function SharePopup({ Share, JOBID }) {
  const [isShareUrl, setisShareUrl] = React.useState();

  React.useEffect(() => {
    // let token = sessionStorage.getItem('token');
    // let decodedToken = jwt_decode(token);
    // const encrypt = `fnm@${decodedToken.sub}`
    const encrypt = `fnmjob@${JOBID}`;
    var ciphertext = CryptoJS.AES.encrypt(encrypt, EncryptionKey).toString();
    setisShareUrl(Homepage + "?token=" + ciphertext);
  }, []);

  return (
    <div className=" share_pp_container">
      <div className="share_container">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              Share(false);
            }}
          >
            X
          </button>
        </div>

        <div className="s_content">
          <div className="s_heading">
            <h1 style={{ textAlign: "center" }}>Share</h1>
          </div>
          <div className="socialmedia_Icons">
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
            {/* 
            <InstapaperShareButton url={isShareUrl}>
              <InstapaperIcon round={true} />
            </InstapaperShareButton> */}

            <TwitterShareButton url={isShareUrl}>
              <TwitterIcon round={true} />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </div>
  );
}
