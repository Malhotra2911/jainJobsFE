import React from "react";
import "../../../css/jobseeker/Blogs.css";
import BlogsData from "../../../mockJson/BlogsData";
import { useState } from "react";
import TopHeader from "../Home/TopHeader";
import ReactPaginate from "react-paginate"
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux'
import { CircularLoding } from '../../../redux/action/AuthAction'
import { getBlogPosts } from "../../../redux/action/CommonAction";
import Button from '@mui/material/Button';
import Footer from "../Home/Footer";
import NavbarJS from "../Home/NavbarJS";
import { ImageBackend } from "../../../config/Config";



export default function Blogs() {
  const dispatch = useDispatch();
  const BlogsData = useSelector(
    (state) => state.CommonReducer.blogposts
  );
  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  }



  console.log(BlogsData);
  
  const [pageNumber, setPageNumber] = useState(0);
  
  const blogsPerPage = 6
  const pagesVisited = pageNumber * blogsPerPage

  const displayBlogs = BlogsData.slice(pagesVisited, pagesVisited + blogsPerPage)
    .map(blog => {
      const desc = blog.DESCRIPTION;
      return (
        <div className="Blogs-Card">

          <div className="Blogs-Card-Image">
            <img className="blog_img" src={ImageBackend + blog.IMAGE} alt="" />
          </div>
          <div className="Blogs-Card-Content">
            <p className="blogdate">{blog.DATE}</p>
            <h3 className="blog_title">{blog.BLOG_TITLE}</h3>
            <p className="text_description">{desc.slice(0,180)}...</p>
            <Link to={`/blogcontinue/${blog.BLOG_ID}`} style={{width:"100%"}}>
            <button className="blog_btn">Continue Reading</button>
            </Link>
          </div>
        </div>
      );


    })
  const pageCount = Math.ceil(BlogsData.length / blogsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="Blogs-Container">
        <div className="navbar_blog">
        <NavbarJS/>

        </div>
        <div className="topheaderblog">
          <TopHeader />
        </div>
        <div className="BLogs-Header">
          <div className="line">
            <img
              src="jobseeker/Line 14.png"
              alt=""
            />
          </div>
          <h2 className="head-section">Our Blogs</h2>
          <div className="line">
            <img
              src="jobseeker/Line 14.png"
              alt=""
            />
          </div>
        </div>

        <div className="Blogs-Carousel">
          <div className="Blogs-Carousel-Track">
            {displayBlogs}
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}

            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
