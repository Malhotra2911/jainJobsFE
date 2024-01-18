import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../../css/Employer/EditPopup.css"

export default function EditPopup({closeBtn,JOB_ID,POST_TYPE,CREATION_TYPE}) {
  const navigate = useNavigate();
  const oneditclick=()=>{
    navigate('/create-post?editpost='+JOB_ID + '&type='+POST_TYPE + '&creationtype='+ CREATION_TYPE)
  }

  return (
    <div className="editpopup_container">
              <div className="EP_container">
              <div className="close_btn">
                    <button onClick={()=> closeBtn(false)} className="close_btn">
                    X
                    </button>

                </div>

            <div className="EPcontainer_content">
                <img src="employer/editable.png" alt="" />
                <p>Are you sure you want to edit the Job ?</p>
                <div className="edit_btn">
                <button className="EDIT_yes" onClick={oneditclick}>Yes</button>
                <button className="EDIT_yes" onClick={()=> closeBtn(false)}>No</button>

                </div>
            </div>
        </div>
    </div>
  )
}
