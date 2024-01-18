import React from "react";
import "../../../css/jobseeker/SubscriptionPage.css";
import SubscriptionData from "../../../mockJson/SubscriptionData";
import { CancelOutlined, CheckCircleOutlined } from "@mui/icons-material";
export default function SubscriptionPage() {
  return (
    <div className="SubscriptionPage-Container">
      <div className="SubscriptionTable-Container">
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
          <button className="btn-grp-subscription">1 Month/₹ 300.00</button>
          <button className="btn-grp-subscription1">3 Month/₹ 500.00</button>
        </div>
      </div>
    </div>
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
              // color={Premium ? "green" : "red"}
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
