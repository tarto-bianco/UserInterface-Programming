import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  
  const {email, password} = user;
  const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData("/user/login", 
      {
      email,
      password
      },
      "POST")
      .then((data) => {
        if(!data.message) {
          console.log(data)
          navigate("/profile")
        }
      })
      .catch((error)=> {
        console.log(error)
      })
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email"
            name='email'
            onChange={onChange}
            value={email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            name='password'
            onChange={onChange}
            value={password}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login"/>
      </form>
    </div>
  );
}

export default Login;