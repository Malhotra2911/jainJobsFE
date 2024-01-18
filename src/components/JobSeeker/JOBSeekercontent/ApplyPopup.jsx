import React from "react";
import { useState } from "react";
// import vq from "../../components/assets/FaqImage.png";
import "../../../css/jobseeker/Faq.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import FormLabel from "@mui/material/FormLabel";
import Fab from "@mui/material/Fab";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axiosInstance";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#F7701D",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#F7701D",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#F7701D",
    },
    "&:hover fieldset": {
      borderColor: " #F7701D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F7701D",
    },
  },
});

export default function ApplyPopup({ Apply, jobque, SubmitAnswer }) {
  const [selected, setSelected] = useState(null);
  const handleClose = () => Apply(false);
  const [text, setText] = useState(false);
  const [file, setFile] = useState(false);

  const [AState, setAState] = useState({});
  const [isteststate, setisteststate] = useState([]);
  const [isDisablebtn, setisDisablebtn] = useState(false);

  const onchangeAnswer = (name, value) => {
    setAState({ ...AState, [name]: value });
  };
  const onChangeFile = (name, value) => {
    setAState({ ...AState, [name]: value });
  };

  const textType = () => {
    setText(true);
    setFile(false);
  };
  const fileType = () => {
    setText(false);
    setFile(true);
  };

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  function getExtension(filename) {
    var parts = filename.split(".");
    return parts[parts.length - 1];
  }

  const checkfilevideotype = (e, name, value) => {
    if (e.target.files[0].size > 2048) {
      toast.error("file size should be less then 2 mb");
      return false;
    }
    if (
      getExtension(e.target.value) === "mp3" ||
      getExtension(e.target.value) === "mp4"
    ) {
      onChangeFile(name, value);
    } else {
      toast.error("please upload audio or video answer");
      return false;
    }
  };

  const submitForm = () => {
    if (jobque.length === Object.keys(AState).length) {
      Object.keys(AState).forEach(function (key) {
        if (AState[key].type === 1 || AState[key].type === 2) {
          let formdata = new FormData();
          formdata.append("image", AState[key].Ans);
          axiosInstance.post("user/uploadimage", formdata).then((res) => {
            try {
              AState[key].Ans = res.data;
            } catch (error) {
              toast.error("somting went wrong");
              return false;
            }
          });
        }
      });

      setTimeout(() => {
        SubmitAnswer(AState);
      }, 3000);
      setisDisablebtn(true);
    } else {
      toast.error("Please Answer All The Quesition");
    }
  };

  return (
    <>
      <Modal
        open={Apply}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="faq_container">
          <div className="faq_board">
            <div className="faqCloseBtn">
              <button
                onClick={() => {
                  Apply(false);
                }}
              >
                X
              </button>
            </div>

            <div className="faq_Container">
              <div className="faq_container_content">
                <div className="faqup_container">
                  <div className="faqup_left">
                    <h2>Hi, Answer all the</h2>
                    <h2>Questions ?</h2>
                  </div>
                  <div className="faqup_right">
                    <img src="jobseeker/FaqImage.png" alt="_" />
                  </div>
                </div>
              </div>

              <div className="accordion">
                {jobque &&
                  jobque.map((item, i) => (
                    <div className="item">
                      <div className="title" onClick={() => toggle(i)}>
                        <div className="sub_title">
                          <h6 className="questionno">
                            {parseInt(i) + parseInt(1)}.
                          </h6>
                          <h6 className="title_heading">
                            {item.QUESITION_TITLE}
                          </h6>
                          <span>{selected === i ? "" : ""}</span>
                        </div>
                        <span>
                          {selected === i ? (
                            <ExpandLessIcon />
                          ) : (
                            <ExpandMoreIcon />
                          )}
                        </span>
                      </div>
                      <div
                        className={selected === i ? "content show" : "content"}
                      >
                        <div className="answer_field">
                          {parseInt(item.QUESITION_TYPE) === 0 && (
                            <CssTextField
                              sx={{ color: " #F7701D", width: "70%" }}
                              required
                              id="outlined-required"
                              size="small"
                              type="email"
                              color="warning"
                              label="Enter Your answer here"
                              onChange={(e) => {
                                onchangeAnswer(`${i + parseInt(1)}`, {
                                  Que: item.QUESITION_TITLE,
                                  Ans: e.target.value,
                                  type: 0,
                                });
                              }}
                            />
                          )}

                          {parseInt(item.QUESITION_TYPE) === 1 && (
                            <Button
                              color="warning"
                              variant="contained"
                              sx={{ borderRadius: "1rem" }}
                              aria-label="upload picture"
                              component="label"
                            >
                              <input
                                onChange={(e) =>
                                  checkfilevideotype(e, `${i + parseInt(1)}`, {
                                    Que: item.QUESITION_TITLE,
                                    Ans: e.target.files[0],
                                    type: 1,
                                  })
                                }
                                style={{
                                  borderRadius: "1.5rem 1.5rem 1.5rem 1.5rem",
                                  border: "none",
                                  outline: "none",
                                }}
                                accept="audio/*|video/*"
                                // accept="image/*"
                                type="file"
                              />
                              <CloudDownloadIcon sx={{ mr: 1 }} />
                            </Button>
                          )}

                          {parseInt(item.QUESITION_TYPE) === 2 && (
                            <Button
                              color="warning"
                              variant="contained"
                              sx={{ borderRadius: "1rem" }}
                              aria-label="upload picture"
                              component="label"
                            >
                              <input
                                // onChange={(e) => {
                                //   onChangeFile(`${i + parseInt(1)}`, {
                                //     Que: item.QUESITION_TITLE,
                                //     Ans: e.target.files[0],
                                //     type: 1,
                                //   });
                                // }}

                                onChange={(e) =>
                                  checkfilevideotype(e, `${i + parseInt(1)}`, {
                                    Que: item.QUESITION_TITLE,
                                    Ans: e.target.files[0],
                                    type: 1,
                                  })
                                }
                                style={{
                                  borderRadius: "1.5rem 1.5rem 1.5rem 1.5rem",
                                  border: "none",
                                  outline: "none",
                                }}
                                accept="audio/*|video/*"
                                type="file"
                              />
                              <CloudDownloadIcon sx={{ mr: 1 }} />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <Button
                type="buttton"
                variant="contained"
                color="warning"
                className="profile_btn"
                onClick={submitForm}
                disabled={isDisablebtn}
                sx={{
                  width: "30%",
                  mt: 2,
                  mb: 2,
                  display: "flex",
                  margin: "2rem auto 2rem auto",
                  textTransform: "none",
                  color: "#FFFFFF",
                  // backgroundColor: "orange",
                  borderRadius: "1.5rem",
                  "&:hover": {
                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                    color: "#000000",
                  },
                }}
              >
                Submit Answer
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
