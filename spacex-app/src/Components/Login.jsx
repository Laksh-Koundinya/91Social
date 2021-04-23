import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginReq, loginUserData } from "../Redux/actionCreator";


const HomePage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole] = useState("")
  const dispatch = useDispatch();
  console.log(dispatch);
  const handleLogin = () => {
console.log(role)
    dispatch(loginUserData({email,password,role}))
  };

  return (
    <div>
      <h1>Welcome To SpaceX </h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <select onChange ={(e)=>setRole(e.target.value)}>
          <option>-------</option>
          <option value = "user">User</option>
          <option value = "admin">Admin</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export { HomePage };
