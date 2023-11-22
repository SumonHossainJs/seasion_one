import "./Video.scss";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import { Card, Comment } from "../../Components/index";



const Video = () => {
  return (
    <div className="v-container">
      <div className="v-content">
        <div className="videoWrapper">
        <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
         
         
        </div>
        <div className="title">
          Test Video
        </div>
        <div className="details">
          <div className="info">95,648,56 views • jun 22, 2023 </div>
          <div className="all-btns">
            <div className="btn">
                <ThumbUpOutlinedIcon/> 123
            </div>
            <div className="btn">
                <ThumbDownOffAltOutlinedIcon/> Dislike
            </div>
            <div className="btn">
                <ReplyOutlinedIcon/> Share
            </div>
            <div className="btn">
                <AddTaskOutlinedIcon/> Save
            </div>

          </div>
        </div>

        <hr />

        <div className="channelInfo">
          <div className="channel">
            <img src="https://images.unsplash.com/photo-1699014446393-a1e0f2e15336?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="channelDetails">
              <h3>Channel name</h3>
              <span className="subCount">
                200k subscribers
              </span>
              <span className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est rerum velit cum. Eum unde architecto ut. Expedita harum aperiam molestias!
              </span>
            </div>
          </div>
          <div className="subscribe">Subscribe</div>
        </div>

        <hr />

        <div className="addComment">
          <img src="https://images.unsplash.com/photo-1699014446393-a1e0f2e15336?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <input type="text" placeholder=" Add your Comment" />
        </div>
        <div className="comments">
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
        </div>
      </div>
      <div className="recomendation">

        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
      </div>

    </div>
  )
}

export default Video