import * as React from 'react';
import { TextareaAutosize, TextField } from '@mui/material'
import "../../../css/jobseeker/BlogPopup.css"
import Modal from '@mui/material/Modal';
import { BlogContent } from '../../../redux/action/JobSeekerAction';
import { useDispatch } from "react-redux"

export default function Blogpopup({ blogPopup }) {
    const handleClose = () => blogPopup(false);
    const [message, setMessage] = React.useState("");

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(BlogContent(message));
        setMessage("");
    }


    return (
        <div style={{ outline: "none" }}>
            <Modal
                open={blogPopup}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ border: "none", boxShadow: "none" }}
            >
                <div className="blog_container">
                    <div className="blog_content">
                        <div className="blog_main_content">
                            <div className="blog_box1">
                                <div className="item1">
                                    <h5 className='blog_heading'>
                                        Share your blog over here once get approval from <br />
                                        admin it will be share on the blog page
                                    </h5>
                                </div>
                                <div className="item2">
                                    <form action="" style={{ width: '100%' }} onSubmit={handleSubmit}>
                                        <TextareaAutosize
                                            maxRows={7}
                                            style={{ height: "125px" }}
                                            aria-label="maximum height"
                                            className='Bloginputtextarea'
                                            id="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </form>
                                </div>
                                <button type="submit" className='blogpopup_btn' onClick={handleSubmit}>
                                    Post
                                </button>
                            </div>
                            <div className="blog_box2">
                                <img src="jobseeker/blog_post.png" alt="_" />
                            </div>

                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    );
}

