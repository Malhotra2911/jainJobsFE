import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import "../../../css/jobseeker/EmployerDropdown.css";
import { useNavigate } from "react-router-dom";
import ViewEmployerProfile from "../../../screens/Employer/EmployeeDashboard/ViewEmployerProfile";

const style = {
  position: "absolute",
  top: "36.7%",
  left: "75%",
  transform: "translate(-50%, -50%)",
  width: "21%",
  bgcolor: "background.paper",
  outline: "none",
  borderRadius: "7px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: " 0px 4px 40px rgba(0, 0, 0, 0.25)",
  background: "#F2F2F2",
};

export default function EmployerDropdown({ Drop }) {
  const navigate = useNavigate();
  const handleClose = () => Drop(false);
  const [opens, setOpens] = React.useState(false);

  const navigation = useNavigate();
  const _logoutfun = () => {
    var mytoken = sessionStorage.getItem("token");
    if (mytoken) {
      sessionStorage.removeItem("token");
      setTimeout(() => {
        navigation("/");
        window.location.reload();
      }, 700);
    }
  };

  const handleOnClick = () => {
    navigate("/manageemployerprofile");
  };
  const handleOnClick2 = () => {
    navigate("/viewemployerprofile");
  };
  const handleOnClick3 = () => {
    navigate("/referpage");
  };
  const handleOnClick4 = () => {
    navigate("/employertour");
  };
  const handlesubscribation = () => {
    navigate("/subscriptiondetails");
  };
  const handlecredit = () => {
    navigate("/credit-and-payments");
  };

  return (
    <div style={{ outline: "none" }}>
      <Modal
        open={Drop}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root": {
            background: "transparent",
          },
          backgroundColor: "transparent",
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <div sx={style} className="employer_dropdown_content">
          <h3 className="card_head" onClick={handleOnClick}>
            Manage Employer Profile
          </h3>
          <Divider sx={{ width: "100%", border: "1px solid #F7701D" }} />
          <h3 className="card_head" onClick={handleOnClick2}>
            View Public Profile
          </h3>
          <Divider sx={{ width: "100%", border: "1px solid #F7701D" }} />
          <h3 className="card_head" onClick={handleOnClick3}>
            Refer &amp; Credit
          </h3>
          <Divider sx={{ width: "100%", border: "1px solid #F7701D" }} />
          <h3 className="card_head" onClick={handlesubscribation}>
          Subscription
          </h3>
          <Divider sx={{ width: "100%", border: "1px solid #F7701D" }} />
          <h3 className="card_head" onClick={handlecredit}>
            Payments And Credits
          </h3>
          <Divider sx={{ width: "100%", border: "1px solid #F7701D" }} />
          <h3 className="card_head" onClick={handleOnClick4}>
            Dashboard Tour
          </h3>
          <Divider sx={{ width: "100%", border: "1px solid #F7701D" }} />
          <h3 className="card_head" onClick={_logoutfun}>
            Logout
          </h3>
        </div>
      </Modal>
    </div>
  );
}
