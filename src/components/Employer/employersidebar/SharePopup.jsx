import React from "react";
import Whatsapp from "../assets/whatsapp.png"
import Text from "../assets/text.png"
import Linkedin from "../assets/linkedinn.png"
import Facebook from "../assets/facebook.png"
import Telegram from "../assets/telegram.png"
import  "./SharePopup.css"

export default function SharePopup({Share}) {
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
            <h1>Share</h1>
          </div>
          <div className="socialmedia_Icons">
            <button className="Social-Media">
              <img src={Whatsapp} />
            </button>
            <button className="Social-Media">
              <img src={Text} />
            </button>
            <button className="Social-Media">
              <img src={Linkedin} />
            </button>
            <button className="Social-Media">
              <img src={Facebook} />
            </button>
            <button className="Social-Media">
              <img src={Telegram} />
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
