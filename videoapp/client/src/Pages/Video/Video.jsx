import "./Video.scss";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import { Card, Comment } from "../../Components/index";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  like,
  dislike,
  fetchFailure,
  fetchSuccess,
  fetchStart,
} from "../../Redux/videoSlice.js";
import { format } from "timeago.js";
import { subscription } from "../../Redux/userSlice.js";
import Recomendation from "../../Components/Recomdation/Recomendation.jsx";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();

  const [channel, setChannel] = useState({});
  const videoId = currentVideo?._id;
  console.log(videoId)

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchStart());
      try {
        const videoRes = await axios.get(
          `http://localhost:5030/video/find/${path}`
        );
        console.log(videoRes)

        if (!localStorage.getItem('viewAdded')) { 
          const view = await axios.put(
            `http://localhost:5030/video/view/${path}`
          );
          
          localStorage.setItem('viewAdded', 'true');
        }

        const channelRes = await axios.get(
          `http://localhost:5030/user/find/${videoRes.data.userId}`
        );

        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {
        dispatch(fetchFailure(err));
      }
    };
    fetchData();
  }, [path, dispatch]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('viewAdded');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleLike = async () => {

    console.log(videoId)
    if (!currentUser) {
      navigate("/login");
    } else {
      console.log(videoId)
     const res = await axios.put(
        `http://localhost:5030/user/like/${videoId}`,
        {},
        {
          withCredentials: true,
        }
      );
      console.log("log" +res)
      dispatch(like(currentUser._id));
    }
  };


  const handledisLike = async () => {
    if (!currentUser) {
      navigate("/login");
    } else {
     const res = await axios.put(
        `http://localhost:5030/user/dislike/${videoId}`,
        {},
        {
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(dislike(currentUser._id));
    }
  };

  

  return (
    <div className="v-container">
      <div className="v-content">
        <div className="videoWrapper">
          <video
            className="videoBox"
            style={{ maxHeight: "720px", width: "100%", objectFit: "cover" }}
            src={
              currentVideo?.videoUrl ||
              "https://www.youtube.com/embed/k3Vfj-e1Ma4"
            }
            controls
          ></video>
        </div>
        <div className="title">{currentVideo?.title}</div>
        <div className="details">
          <div className="info">
            {currentVideo.views} views • {format(currentVideo.createdAt)}{" "}
          </div>
          <div className="all-btns">
            <div className="btn" onClick={handleLike}>
              <ThumbUpOutlinedIcon /> {currentVideo?.likes?.length}
            </div>
            <div className="btn" onClick={handledisLike}>
              <ThumbDownOffAltOutlinedIcon /> {currentVideo?.dislikes?.length}
            </div>
            <div className="btn">
              <ReplyOutlinedIcon /> Share
            </div>
            <div className="btn">
              <AddTaskOutlinedIcon /> Save
            </div>
          </div>
        </div>

        <hr />

        <div className="channelInfo">
          <div className="channel">
            <img
              src="https://images.unsplash.com/photo-1699014446393-a1e0f2e15336?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="channelDetails">
              <h3>Channel name</h3>
              <span className="subCount">200k subscribers</span>
              <span className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                rerum velit cum. Eum unde architecto ut. Expedita harum aperiam
                molestias!
              </span>
            </div>
          </div>
          <div className="subscribe">Subscribe</div>
        </div>

        <hr />

        <div className="addComment">
          <img
            src="https://images.unsplash.com/photo-1699014446393-a1e0f2e15336?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <input type="text" placeholder=" Add your Comment" />
        </div>
        <div className="comments">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
      <Recomendation /> 
    </div>
  );
};

export default Video;
