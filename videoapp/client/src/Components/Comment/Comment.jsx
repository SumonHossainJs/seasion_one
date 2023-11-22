import "./Comment.scss";

const Commet = () => {
  return (
    <div className="comment-con">
      <div className="img-con">
        <img src="https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="" />
      </div>
      <div className="c-desc">
        <div className="top">
          <span className="userName"> John doe</span>
          <span className="date">1 day ago</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, fugit ipsum? Numquam saepe, suscipit aliquam totam ab libero at dignissimos deleniti modi consequatur aut ipsa quo facilis ducimus. Velit, dignissimos?
        </div>
      </div>
    </div>
  )
}

export default Commet