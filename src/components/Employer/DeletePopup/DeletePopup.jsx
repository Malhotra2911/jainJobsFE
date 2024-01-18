import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "../../../css/Employer/DeletePopup.css";
import { CircularLoding } from "../../../redux/action/AuthAction";
import {
  Get_AvilableJob,
  mycreatedpost,
} from "../../../redux/action/EmployerAction";
import axiosInstance from "../../../utils/axiosInstance";

export default function DeletePopup({ closeDel, JOB_ID }) {
  const dispatch = useDispatch();

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };

  const deletepost = () => {
    axiosInstance.post("employer/deletePost", { JOB_ID }).then((res) => {
      if (res.data.status === 1) {
        toast.success("Deleted Successfully");
        dispatch(mycreatedpost(Loading));
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
      if (res.data.status === 0) {
        toast.error("somthing went wrong!!");
      }
    });
  };

  return (
    <div className="deletepopup_container">
      <div className="dp_container">
        <div className="close_btn">
          <button onClick={() => closeDel(false)} className="close_btn">
            X
          </button>
        </div>
        <div className="dpcontainer_content">
          <img src="employer/throwaway.png" alt="" />
          <p>Are you sure you want to delete the Job ?</p>
          <div className="delete_btn">
            <button className="delete_yes" onClick={deletepost} type="button">
              Yes
            </button>
            <button
              className="delete_yes"
              onClick={() => closeDel(false)}
              type="button"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
