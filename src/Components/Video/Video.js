import React, { useRef, useState } from "react";
import "./Video.css";

const Video = () => {
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
        src="https://r3---sn-hxb54vo-238l.googlevideo.com/videoplayback?expire=1633709972&ei=NBtgYdyNI4rhgAfro47ICg&ip=91.193.212.60&id=o-AGBeR4LiWv67PyFtxgK1Q4nccTpu7sTGenAOsg6_uC7d&itag=18&source=youtube&requiressl=yes&mh=1F&mm=31%2C29&mn=sn-hxb54vo-238l%2Csn-n8v7kn76&ms=au%2Crdu&mv=m&mvi=3&pcm2cms=yes&pl=22&initcwndbps=728750&vprv=1&mime=video%2Fmp4&ns=C5aBgkmXfdL39nA8R5Si748G&gir=yes&clen=2238930&ratebypass=yes&dur=29.952&lmt=1631315853924674&mt=1633687544&fvip=3&fexp=24001373%2C24007246&c=WEB&txp=6310224&n=ggD2JJkXnrV-rd0rihw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAKe4EQuNY2lT5U0kACrx-0MX5-qdhfNB9US6IfDK8xFhAiEAqGW_Bp2IfhDO24ijFRIhMqari46W3PpDxbV0Luk1TR4%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAJrsbUKPu75UkWp0FESn1HcPs00Rvqqv7255jk8m41f2AiBuXgnXHDocER8aeJxwP_WhuQQQj5oqd8fO5Ir5CQ684Q%3D%3D"
      ></video>
    </div>
  );
};

export default Video;
