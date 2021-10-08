import React, { useRef, useState } from "react";
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";
import "./Video.css";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
}) => {
  const [playing, setplaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setplaying(false);
    } else {
      videoRef.current.play();
      setplaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideo}
        className="video_player"
        loop
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
