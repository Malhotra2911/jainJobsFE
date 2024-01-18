import * as React from "react";
import Checkbox from '@mui/material/Checkbox';

import LinearProgress, {
} from "@mui/material/LinearProgress";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getBlogPosts, updateBlogPosts } from "../../../redux/action/CommonAction";
import { CircularLoding } from '../../../redux/action/AuthAction'

export default function LinearWithValueLabel(blogid) {
  const param = useParams();
  let blog_ids = param.blog_id;

  const BlogsData = useSelector(
    (state) => state.CommonReducer.blogposts
  );

  var newBlogData = BlogsData.filter((el) => {
    return el.BLOG_ID == blog_ids;
  })

  var poll = newBlogData[0].POST_POLL;
  var likes = newBlogData[0].POST_LIKE;
  const [checked, setChecked] = React.useState(false);
  const [count, setCount] = React.useState(poll);

  const dispatch = useDispatch();

  const handleOnClick = (event) => {
    var counts = "";
    setChecked(!checked);
    if (!checked) {
      setCount(count + 1);
      // console.log(count);
      counts = count + 1;

    } else {
      setCount(count - 1);
      counts = count - 1;
    }
    
    dispatch(updateBlogPosts(counts,likes, blog_ids));
  };
  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  }


  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary" sx={{textAlign:"center"}}>
          {count}% Reader Pull this Post
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ borderRadius: "50%" }}>
          <Checkbox
            checked={checked}
            onClick={handleOnClick}
            // onClick={handleClick}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Box>
        <Box sx={{ width: "80%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            // {...props} 
            value={count}
            sx={{
              padding: ".2rem",
              backgroundColor: "#898787",
              borderRadius: ".2rem",
              ".MuiLinearProgress-bar1Determinate": { backgroundColor: "#8CDDDC" }
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
