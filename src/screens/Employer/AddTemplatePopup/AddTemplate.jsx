import React from "react";
import "../../../css/Employer/AddTemplate.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

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

export default function AddTemplate({addtemplatepopup }) {
  const handleClose = () => addtemplatepopup(false);

  return (
    <div>
      <Modal
        open={addtemplatepopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="addtempmain_container">
            <div className="addtemplate_containerr">
            <div className="titleCloseBtn">
          <button
            onClick={() => {
              addtemplatepopup(false);
            }}
          >
            X
          </button>
        </div>

            <div className="addtemplate_container">
        
        <div className="addtemp_container">
          <h2>Add Template</h2>
        </div>
        <form className="T_main">
          <div className="temp_input">
            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              required
              id="outlined-required"
              color="warning"
              label="Template Name"
            />
          </div>
          <div className="temp_input">
            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              required
              id="outlined-required"
              color="warning"
              label="Subject"
            />
          </div>
          <div className="temp_input_text">
                                  <CssTextField
                        sx={{ color: " #F7701D", width: "100%" }}
                        id="outlined-multiline-static"
                        label="Summary"
                        multiline
                        color="warning"
                        rows={4}
                      />
          </div>
          <div className="template_btn">
            <Button
              className="btn_temp"
              sx={{
                backgroundColor: "rgba(247, 112, 29, 0.39)",
                width: "25%",
                color: "#000000",
                textTransform: "none",
                fontStyle: "none",
                "&:hover": {
                  backgroundColor: "rgba(247, 112, 29, 0.39)",
                },
      }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
            </div>
          
        </div>
      </Modal>
    </div>
  );
}
