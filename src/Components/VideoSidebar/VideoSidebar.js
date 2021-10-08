import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setliked] = useState(false);
  return (
    <div className="video_sidebar">
      <div className="video_sidebar_button">
        {liked ? (
          <FavoriteIcon onClick={(e) => setliked(false)} fontSize="large" />
        ) : (
          <FavoriteBorderIcon
            onClick={(e) => setliked(true)}
            fontSize="large"
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className="video_sidebar_button">
        <MessageIcon fontSize="large" />
        <p>{shares}</p>
      </div>

      <div className="video_sidebar_button">
        <ShareIcon fontSize="large" />
        <p>{messages}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
