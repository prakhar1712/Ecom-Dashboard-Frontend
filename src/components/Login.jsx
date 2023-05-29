import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("User");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    console.log(email);
    console.log(password);

    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
    localStorage.setItem("User", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="Login">
      <h1 className="heading">Login</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit" onClick={collectData}>
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default Login;
