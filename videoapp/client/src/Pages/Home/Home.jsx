import "./Home.scss";
import {Card} from '../../Components/index.js';
import { useEffect, useState } from "react";
import axios from 'axios';

const Home = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`http://localhost:5030/video/random`);
      setvideos(res.data);
    };
    fetchVideos();
  }, []);

  return (
    <div className='videoShowcase'>
       {videos.map((video) => (
        <Card key={video._id} video={video}/>
      ))}
    </div>
  )
}

export default Home