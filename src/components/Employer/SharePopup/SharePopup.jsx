import React from "react";
// import Whatsapp from "../../components/assets/whatsapp.png"
// import Text from "../../components/assets/text.png"
// import Linkedin from "../assets/linkedinn.png"
// import Facebook from "../assets/facebook.png"
import {BsFacebook} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import {IoLogoLinkedin} from 'react-icons/io'
import {FaTelegram} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
// import Telegram from "../assets/telegram.png"
import "../../../css/Employer/SharePopup.css"

export default function SharePopup({closeshare}) {
  return (
    <div className=" share_pp_container">
      <div className="share_container">
      <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeshare(false);
            }}
          >
            X
          </button>
        </div>

        <div className="s_content">
          <div className="s_heading">
            <h1>Share</h1>
          </div>
          <div className="socialmedia_Icons">
            <button className="Social-Media">
              {/* <img src={Whatsapp} /> */}
              <IoLogoWhatsapp  className="Icons_all" />
            </button>
            <button className="Social-Media">
              {/* <img src={Text} /> */}
              <GrMail  className="telegram"  />
            </button>
            <button className="Social-Media">
              {/* <img src={Linkedin} /> */}
              <IoLogoLinkedin  className="Icons_all"  />
            </button>
            <button className="Social-Media">
              {/* <img src={Facebook} /> */}
              <BsFacebook  className="facebook"  />
            </button>
            <button className="Social-Media">
              {/* <img src={Telegram} /> */}
              <FaTelegram  className="telegram"  />
            </button>
            <button className="Social-Media">
              {/* <img src={Telegram} /> */}
              <BsInstagram  className="instagram"  />
            </button>

          </div>
          <div className="share-btnn">
          <button className="share_btnn">Share</button>

          </div>
        </div>
      </div>
    </div>
  );
}
