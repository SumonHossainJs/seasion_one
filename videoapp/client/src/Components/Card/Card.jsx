import { useEffect, useState } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import {format} from 'timeago.js';

const Card = ({ video, type }) => {
  const [channel, setChannel] = useState({});
  const isJpg = video?.imgUrl?.includes(".jpg");
  const userId = video?.userId;

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5030/user/find/${userId}`
        );
        setChannel(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchChannel();
  }, [userId]);

  const getFirstWords = (text, count) => {
    if (!text) {
      text = "dummy text";
    } else {
      const words = text.split(" ");
     
      
      return words.slice(0, count).join(" ");
    }
  };

  return (
    <>
      <Link to={`/video/${video?._id}`}>
        <div
          className="c-container"
          style={{
            width: !type === "big" && "300px",
            marginBottom: type === "sm" ? "10px" : "25px",
            display: type === "sm" && "flex",
          }}
        >
          <img
            style={{ height: type === "sm" ? "120px" : "202px", width: type === 'sm' ? "100px" : "304px", opacity: type === "sm"? "0.5":'1' }}
            className="th"
            src={
              isJpg
                ? video?.imgUrl
                : "https://images.unsplash.com/photo-1682685797527-63b4e495938f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
          <div className="details">
            <img
              style={{ display: type === "sm" && "none" }}
              src={
                channel?.img ||
                "https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
              }
              alt=""
              className="channelImg"
            />
            <div className="texts">
              <div className="Title">
                {video?.title && video?.title.split(' ').length > 5 ? `${getFirstWords(video?.title, 5)}...` : video?.title || "Dummy Title "}
              </div>
              <span className="channelName">{channel?.name}</span>
              <span className="views">{video?.views} Views • {format(video?.createdAt)} </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
