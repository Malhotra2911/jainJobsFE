import { TextareaAutosize, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../../../css/jobseeker/FeedbackForm.css"
import { FeedbackAction } from '../../../redux/action/CommonAction'
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify'

export const FeedbackForm = ({Feedback}) => {
    const handleClose = () => Feedback(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const UserData = useSelector(
        (state) => state.AuthReducer.user
    );

    console.log(UserData);

    const userId = UserData.USER_ID;
    const userRole = UserData.USER_ROLE;

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            toast.error("All Fields are Required");
            return false;
            
        }
        dispatch(FeedbackAction(userId,userRole,name,email,subject,message));
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }
    return (
        <div>
            <Modal
    open={Feedback}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >

            <div className="feedback_container1">
                <div className="container_feedback" 
                >
                    <div className="feedbackCloseBtn">
                        <button
                            onClick={() => {
                                Feedback(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                    <div className="feedback_heading">
                        <h3 className="feedback_form">
                            Feedback Form
                        </h3>
                    </div>
                    <div className="formtag">
                        <form action="" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder='Name'
                                className='feedbackinput'
                                required
                                id='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder='Email'
                                className='feedbackinput'
                                required
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="text"
                                required
                                id='subject'
                                className='feedbackinput'
                                placeholder='Subject'
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <TextareaAutosize
                                maxRows={7}
                                style={{ height: "85px" }}
                                aria-label="maximum height"
                                className='feedbackinputtextarea'
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Message"
                            />
                            <input onClick={handleSubmit} type="submit" className='feedback_btn' />
                        </form>
                    </div>
                </div>
            </div>
            </Modal>
        </div>
    )
}
