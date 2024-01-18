import React, { useState } from "react";
import Questions1 from "../Questions1/Questions1";
import { Questions2 } from "../Questions2/Questions2";
import { Questions3 } from "../Questions3/Questions3";
import { Questions4 } from "../Questions4/Questions4";
import { Questions5 } from "../Questions5/Questions5";
import "../../../../css/jobseeker/Questions.css";
import Button from "@mui/material/Button";
import { Audioanswer } from "../AudioAnswer/Audioanswer";
import { useNavigate } from "react-router-dom";

function Questions() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = [
    "Sign Up",
    "Personal Info",
    "Other",
    "Kalta1",
    "Kalta2",
    "audio",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Questions1
        // formData={formData} setFormData={setFormData}
        />
      );
    } else if (page === 1) {
      return (
        <Questions2
        // formData={formData} setFormData={setFormData}
        />
      );
    } else if (page === 2) {
      return (
        <Questions3
        // formData={formData} setFormData={setFormData}
        />
      );
    } else if (page === 3) {
      return (
        <Questions4
        // formData={formData} setFormData={setFormData}
        />
      );
    } else if (page === 4) {
      return (
        <Questions5
        // formData={formData} setFormData={setFormData}
        />
      );
    } else {
      return <Audioanswer />;
    }
  };
  const assign = () => {
    if (page > 0) {
      return true;
    } else {
      return false;
    }
  };
  const assign1 = () => {
    if (page > 0) {
      return true;
    } else {
      return false;
    }
  };
  const assign2 = () => {
    if (page > 1) {
      return true;
    } else {
      return false;
    }
  };
  const assign3 = () => {
    if (page > 2) {
      return true;
    } else {
      return false;
    }
  };
  const assign4 = () => {
    if (page > 3) {
      return true;
    } else {
      return false;
    }
  };
  const assign5 = () => {
    if (page > 4) {
      return true;
    } else {
      return false;
    }
  };
  const formsubmitHandleClick = () =>{
    if (page === FormTitles.length - 1) {
      alert("FORM SUBMITTED");
      navigate("/AppliedJob",{replace:"true"})

      // console.log(formData);
    } else {
      setPage((currPage) => currPage + 1);
    }

  }

  return (
    <div className="background_img">
      <div className="form-containers">
        <div className="progressbar">
          <div className={assign1() ? "proactive" : "default"}></div>
          <div className={assign2() ? "proactive" : "default"}></div>
          <div className={assign3() ? "proactive" : "default"}></div>
          <div className={assign4() ? "proactive" : "default"}></div>
          <div className={assign5() ? "proactive" : "default"}></div>
        </div>
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <Button
            sx={{
              backgroundColor: "rgba(247, 112, 29, 0.39)",
              width: "30%",
              color: "#000000",
              textTransform: "none",
              fontStyle: "none",
            }}
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </Button>
          <Button
            sx={{
              backgroundColor: "rgba(247, 112, 29, 0.39)",
              width: "30%",
              color: "#000000",
              textTransform: "none",
              fontStyle: "none",
            }}
            onClick={formsubmitHandleClick}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
