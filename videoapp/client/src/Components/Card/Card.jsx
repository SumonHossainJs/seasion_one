import "./Card.scss";
import { Link} from 'react-router-dom';

const Card = ({ video, type}) => {
  console.log(video);
  console.log(type)
  return (
    <>
    
    <Link to={`video/test`}>
      <div className="c-container" style={{width: !type === 'big' && "300px", marginBottom: type ==="sm" ? "10px": "25px",display: type === "sm" && "flex"}}>
        <img style={{height: type === "sm"? "120px" :"202px"}} className="th" src="https://images.unsplash.com/photo-1698681889353-d39a24b78bac?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" alt="" />
        <div className="details">
          <img style={{display: type ==='sm' && "none"}} src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="channelImg" />
          <div className="texts">
            <div className="Title">
              Al hamdulilha Subhan allah
            </div>
            <span className="channelName">
              videoChannle
            </span>
            <span className="views">
              3451 Views • 1 day ago
            </span>
          </div>
        </div>
      </div>
    </Link>
    </>
  )
}

export default Card