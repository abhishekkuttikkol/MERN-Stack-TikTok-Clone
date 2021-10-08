import { useEffect, useState } from "react";
import "./App.css";
import Video from "./Components/Video/Video";
import Axios from './axios'

function App() {
  const [videos, setvideos] = useState([])
  useEffect(() => {
    async function getData(){
      const response = await Axios.get('/v2/posts')
      setvideos(response.data)
      return response
    }
    getData()
  }, [])
  console.log(videos)
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video)=>(
          <Video
          url={video.url}
          channel={video.channel}
          description={video.description}
          song={video.song}
          likes={video.likes}
          shares={video.shares}
          messages={video.messages}
        />
        ))}
      </div>
    </div>
  );
}

export default App;
