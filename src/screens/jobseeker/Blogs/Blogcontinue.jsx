import React from "react";
import { useState } from "react";
import Progressbar from "../Progressbar/Progressbar"
import Grid from "@mui/material/Grid";
import { useNavigate, useParams } from 'react-router-dom';
import { CircularLoding, GetUserAction } from '../../../redux/action/AuthAction'
import { useDispatch, useSelector } from 'react-redux'
import { MessageFilled } from "@ant-design/icons";
import "../../../css/jobseeker/Blogcontinue.css";
import TopHeader from "../Home/TopHeader";
import { BlogComment, getBlogPosts, updateBlogPosts } from "../../../redux/action/CommonAction";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Tooltip from '@mui/material/Tooltip';
import Favorite from '@mui/icons-material/Favorite';
import Category from "./Category";
import Footer from "../Home/Footer";
import NavbarJS from "../Home/NavbarJS";
import { toast } from "react-toastify";
import ViewComments from "./ViewComments";


export default function Blogcontinue() {

  const [isAuth, setAuth] = React.useState(false);
  // const [isToken, setToken] = React.useState();
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  React.useEffect(() => {
    var mytoken = sessionStorage.getItem("token");
    if (mytoken) {
      // let decodedToken = jwt_decode(mytoken);
      // setToken(decodedToken);
      setAuth(true);
    }
  }, []);

  const dispatch = useDispatch();
  const [ShowComments, SetShowComments] = useState(false);
  const [comment, setComment] = useState("");

  const param = useParams();
  let blog_ids = param.blog_id;


  const BlogsData = useSelector(
    (state) => state.CommonReducer.blogposts
  );

  const UsersData = useSelector(
    (state) => state.AuthReducer.user
  );


  // console.log(BlogsData)
  console.log(UsersData);

  var newBlogData = BlogsData.filter((el) => {
    return el.BLOG_ID == blog_ids;
  });

  var poll = newBlogData[0].POST_LIKE;
  var counts = newBlogData[0].POST_POLL;
  var poll_count = parseInt(poll);
  
  const [checked, setChecked] = React.useState(false);
  const [count, setCount] = React.useState(poll_count);

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  }
  const handleOnClick = (event) => {
    var likes = "";
    setChecked(!checked);
    if (!checked) {
      setCount(count + 1);
      likes = count + 1;
      
    } else {
      setCount(count - 1);
      likes = count - 1;
    }
    
    dispatch(updateBlogPosts(counts, likes, blog_ids));
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    var name = UsersData[0].F_NAME + UsersData[0].M_NAME + UsersData[0].L_NAME;
    dispatch(BlogComment(comment, name, blog_ids));
    setComment("");
  }

  const handleclick = () => {
    if (isAuth == false) {
      toast.error("Login Please");
      navigate("/Signuplogin", { replace: "true" });

    }
    SetShowComments(!ShowComments);
  };

  React.useEffect(() => {
    dispatch(GetUserAction());
    dispatch(getBlogPosts());

  }, []);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  var desc = newBlogData[0].DESCRIPTION;

  return (
    <div>
      <NavbarJS />
      <TopHeader />
      <div className="Blogs-Container-BlogSection">
        <div className="Blogs-Section-Image">
          <h1 className="Blog_Title">{newBlogData[0].BLOG_TITLE}</h1>
          <img className="blog_continue_img"
            src="jobseeker/BlogsBigImage.svg"
            alt=""
          />
        </div>

        <div className="Blogs-Section-Content">
          <div className="Blogs-Section-Content-content">
            <p className="blog_continue">{desc.slice(0, 200)}</p>
            <p className="blog_continue">{desc.slice(200, 400)}</p>
            <p className="blog_continue">{desc.slice(400, 800)}</p>
            <p className="blog_continue">{desc.slice(800, 1000)}</p>
            <p className="blog_continue">{desc.slice(1000, 1200)}</p>
            <p className="blog_continue">{desc.slice(1200, 1400)}</p>
            <p className="blog_continue">{desc.slice(1400, 1600)}</p>
            <div className="Blogs-Content-Buttons">
              <button className="content-btn-1">
                <Tooltip title={count} placement="top">
                  {/* <HeartOutlined /> */}
                  <Checkbox {...label}
                   checked={checked}
                    onClick={handleOnClick}
                    icon={<FavoriteBorder sx={{ transform: "scale(1.5)", color: "#8CDDDC" }} />}
                     checkedIcon={<Favorite sx={{ transform: "scale(1.5)", color: "#8CDDDC" }} />} />
                </Tooltip>
              </button>
              <button onClick={handleclick} className="content-btn-2">
                <MessageFilled style={{ color: "#8CDDDC" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="progressbar_blog">
        <Progressbar />
      </div>
      {ShowComments && isAuth && (
        <>
          <div className="Comments-Section">
            <ViewComments />
            <div className="PostComment">
              <form action="" style={{ width: "100%" }} onSubmit={handleSubmit}>
                <textarea
                  name="PostComment"
                  id="ID-1"
                  cols="100"
                  rows="5"
                  placeholder="Post Comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </form>
              <div className="PostComment-Button">
                <button className="Post-Btn" onClick={handleSubmit}>Post</button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="head_container">
        <div className="line">
          <img
            src="jobseeker/Line 14.png"
            alt=""
          />
        </div>
        <h2 className="head-section">Categories</h2>
        <div className="line">
          <img
            src="jobseeker/Line 14.png"
            alt=""
          />
        </div>
      </div>
      <br />
      <div className="category_container">
        <div className="categories_blogs">
          <Category />
        </div>
      </div>
      <Footer />
    </div>
  );
}
