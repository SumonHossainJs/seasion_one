import './Login.scss';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { loginStart, loginFailure, loginSuccess } from '../../Redux/userSlice';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignup = async (e) =>{
      e.preventDefault();
      dispatch(loginStart);
      try{
        const res = await axios.post("http://localhost:5030/signup", {name, email, password});
        dispatch(loginSuccess(res.data));
        console.log(res.data);
      }catch(err){
        dispatch(loginFailure());
      }
    }
    const handleLog = async (e) =>{
      e.preventDefault();
      dispatch(loginStart);
      try{
        const res = await axios.post("http://localhost:5030/signup", {name,  password});
        dispatch(loginSuccess(res.data));
        console.log(res.data);
      }catch(err){
        dispatch(loginFailure());
      }
    }
  
  return (
    <div className='Login-con'>
      <div className="input-con">
        <h2>Sign In</h2>
        <span>to continue Video App</span>
        <div className="log">
          <input type="text" placeholder='Username' onChange={(e) => setName(e.target.value)} />
          <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <div className="log-btn">SignIn</div>
        </div>

        Or
        <div className="log">
          <input type="text" placeholder='Username' onChange={(e) => setName(e.target.value)}/>
          <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
          <div className="log-btn" onClick={handleSignup}>SignIn</div>
        </div>
      </div>
    </div>
  )
}

export default Login