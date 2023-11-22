import './Navbar.scss';
import Logo from '../../assets/logo.png';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <Link to={'/'}>

      <div className="logo">
        <img src={Logo} alt="LamaTube Logo" />
        video
      </div>
      </Link>
      <div className="searchbox">
        <input type="text" placeholder='Search' />
        <SearchOutlinedIcon/>
        
      </div>
      <Link to='/login' className="btn">
        <AccountCircleOutlinedIcon/>
        Signin
      </Link>
    </nav>
  )
}

export default Navbar