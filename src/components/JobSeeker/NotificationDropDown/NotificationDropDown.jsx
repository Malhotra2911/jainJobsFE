import React from "react";
import Button from "@mui/material/Button";

import "../../../css/jobseeker/NotificationDropDown.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export default function NotificationDropDown() {
  const navigation = useNavigate();
  const { user, notification } = useSelector((state) => state.AuthReducer);

  return (
    <>
      <div className="Notification_content">
        <div className="NotificationDropDown">
          <div className="DropDownNoti">
            {notification && notification.length !== 0 ? (
              notification.map((data) => (
                <>
                  <div className="v1-N"></div>
                  <Link to={"/"}>
                    <p>
                      {data.TITLE.length > 36
                        ? data.TITLE.substring(0, 33) + "..."
                        : data.TITLE}
                    </p>
                  </Link>
                </>
              ))
            ) : (
              <>
                <p>No Notifcation found</p>
                <div className="v1-N"></div>
              </>
            )}

            <div className="notification_btn_grp">
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  padding: ".3rem",
                  m: 1,
                  backgroundColor: "#F7701D",
                  color: "#FFFFF",
                  "&:hover": { backgroundColor: "#F7701D" },
                }}
                onClick={() => navigation("/Notification")}
              >
                View All
              </Button>
              {/* <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  padding: ".3rem",
                  m: 1,
                  backgroundColor: "#F7701D",
                  color: "#FFFFF",
                  "&:hover": { backgroundColor: "#F7701D" },
                }}
              >
                Clear All
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
