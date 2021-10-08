import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = () => {
  return (
    <div className="video_footer">
      <div className="video_footer_text">
        <h4>@Abhishek</h4>
        <p>This is some description</p>
        <div className="video_footer_ticker">
          <MusicNoteIcon className="video_footer_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>This is a song</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="video_footer_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
};

export default VideoFooter;
