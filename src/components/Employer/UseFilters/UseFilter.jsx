import React, { useState } from "react";
import UseFilterOne from "./UseFilterOne";
import UseFilterTwo from "./UseFilterTwo";
import UseFilterThree from "./UseFilterThree";
import "../../../css/Employer/UseFilter.css";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function UseFilter({
  PopupPagefilter,
  isFilterValue,
  onChangeText,
  filtervalue,
  filter
}) {
  const handleClose = () =>PopupPagefilter(false);
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <UseFilterOne
          onChangeText={onChangeText}
          isFilterValue={isFilterValue}
        />
      );
    } else if (page === 1) {
      return (
        <UseFilterTwo
          onChangeText={onChangeText}
          isFilterValue={isFilterValue}
        />
      );
    } else {
      return (
        <UseFilterThree
          onChangeText={onChangeText}
          isFilterValue={isFilterValue}
        />
      );
    }
  };

 

  return (
    <div>
      <Modal
        keepMounted
        open={filter}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        sx={{ outline: "none" }}
      >
        <div className="filter_container">
          <div className="TitleCloseBtn">
            <button
              onClick={() => {
                PopupPagefilter(false);
              }}
            >
              X
            </button>
          </div>
          <div className="usefilter_form_container">
            <div className="usefilter_form_content">
              <div className="usefilter_header">
                <FilterAltIcon className="filtericon" />
                <h3 className="filterhead">
                  {page == 0 && "Filter "}
                  {page == 1 && "Filter "}
                  {page == 2 && "Filter "}
                </h3>
                <button className="skip_btn" onClick={filtervalue}>
                  submit
                </button>
              </div>
              <div className="UF_form_container">
                <div className="form_container_body">{PageDisplay()}</div>
                <div className="form_container_footer">
                  <Button
                    className="form_btn"
                    variant="contained"
                    sx={{
                      backgroundColor: "#F7701D",
                      width: "20%",
                      color: "#000000",
                      "&:hover": { backgroundColor: " rgba(140,221,220,0.5)" },
                    }}
                    onClick={() => {
                      setPage((currPage) => currPage - 1);
                    }}
                  >
                    back
                  </Button>
                  <Button
                    className="form_btn"
                    onClick={() => {
                      if (page === 2) {
                      } else {
                        setPage((currPage) => currPage + 1);
                      }
                    }}
                    variant="contained"
                    sx={{
                      backgroundColor: "rgba(140,221,220,0.5)",
                      width: "20%",
                      color: "#000000",
                      "&:hover": { backgroundColor: " rgba(140,221,220,0.5)" },
                    }}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
