import "./Card.scss";
import { Link} from 'react-router-dom';

const Card = ({ video, type}) => {
  const videoId = video?._id;
  const isJpg = video?.imgUrl?.includes('.jpg');
  console.log(video)
  return (

   
    <>
    
    <Link to={`/video/${videoId}`}>
      <div className="c-container" style={{width: !type === 'big' && "300px", marginBottom: type ==="sm" ? "10px": "25px",display: type === "sm" && "flex"}}> 
        <img style={{height: type === "sm"? "120px" :"202px"}} className="th" src={ isJpg? video?.imgUrl : "https://images.unsplash.com/photo-1682685797527-63b4e495938f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
        <div className="details">
          <img style={{display: type ==='sm' && "none"}} src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="channelImg" />
          <div className="texts">
            <div className="Title">
              {video?.title}
            </div>     
            <span className="channelName">
              videoChannle
            </span>
            <span className="views">
             Al hamdulilah Views • 1 day ago
            </span>
          </div>
        </div>
      </div>
    </Link>
    </>
  )
}

export default Card