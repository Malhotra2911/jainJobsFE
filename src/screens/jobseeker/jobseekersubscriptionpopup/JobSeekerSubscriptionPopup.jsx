import React from "react";
import "../../../css/jobseeker/JobSeekerSubscriptionPopup.css"
import SubscriptionData from "../../../mockJson/SubscriptionData"
import { CancelOutlined, CheckCircleOutlined } from "@mui/icons-material";
import { displayRazorpay } from "../../../RazorPay/RazorPay";
import { useDispatch, useSelector } from "react-redux";
import { CircularLoding } from "../../../redux/action/AuthAction";
import { makesubscribation } from "../../../redux/action/JobSeekerAction";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";

export default function JobseekerSubscriptionPopup({ Subscription, setPopUp }) {

  const { user } = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();
  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  }

  function handlepayment(month, price) {
    var userdata = {};
    if (user.length !== 0) {
      userdata = {
        name: user[0].F_NAME + user[0].L_NAME,
        email: user[0].EMAIL,
        phone_number: user[0].PHONENO,
        AMMOUNT: price
      }
    }
    else {
      userdata = {
        name: "temp user",
        email: "test@123.in",
        phone_number: "877088956565",
        ammount: price
      }
    }

    displayRazorpay(userdata, ((data) => {
      const userdata = {
        USER_ID: user[0].USER_ID,
        AMMOUNT: price,
        PAYMENT_ID: data.razorpay_order_id,
        SUB_PLAN: 0,
        LENGTH_OF_PLAN: parseInt(month) * 30,
        TYPE_OF_PLAN: 10,
      }
      dispatch(makesubscribation(userdata, Loading));
    })
    )

  }




  return (
    <>
      <div className="subscription_popup_container">
        <div className="Subscription_popup_Page-Container">
          <div className="subscription_popup_btn">
            <button onClick={() => setPopUp(false)}>
              X
            </button>

          </div>
          <div className="Subscription_popup_Table-Container">
            <div className="TableHead">
              <h2>Benefits of Paid Services</h2>
              <div className="basic_premium_head">
                <div className="Basic">
                  <h2>Basic</h2>
                </div>
                <div className="Premium">
                  <h2>Premium</h2>
                </div>
              </div>
            </div>
            <hr
              style={{
                background: "rgba(247,112,29,0.39)",
                color: "none",
                height: "6px",
                width: "100%",
              }}
            />
            {SubscriptionData.map((TableRows, index) => (
              <TableData key={index} {...TableRows} />
            ))}
            <div className="button_subscription">
              <button type="button" onClick={() => handlepayment(1, 300)} className="btn-grp-subscription">1 Month/300 INR</button>
              <button type="button" onClick={() => handlepayment(3, 500)} className="btn-grp-subscription1">3 Month/500 INR</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TableData(props) {
  const { Subject, Basic, Premium } = props;
  return (
    <>
      <div className="Table-Subject">
        <h3>{Subject}</h3>
        <div className="both_btn">
          <div className="Basic-Button">
            <CancelOutlined
              style={{ color: "red" }}
              color={Basic ? "green" : "red"}
            />
          </div>
          <div className="Premium-Button">
            <CheckCircleOutlined
              style={{ fontWeight: "600", color: "green" }}
            />
          </div>
        </div>
      </div>
      <hr
        style={{
          background: "rgba(247,112,29,0.39)",
          color: "none",
          height: "6px",
          width: "100%",
          margin: "0px 0px 0px 0px",
        }}
      />
    </>
  );
}
