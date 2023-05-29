import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./SignUp.css";

function SignUp() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // after signup navigated to the home page
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("User");
    if (auth) {
      navigate("/");
    }
  });

  // API from frontend to backend
  const collectData = async () => {
    console.log(name);
    console.log(email);
    console.log(password);

    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
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

  // rendering html componenet
  return (
    <div className="signup">
      <h1 className="heading">Register </h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter Name"
          className="input-name"
          onChange={(e) => setname(e.target.value)}
          value={name}
        ></input>
        <input
          type="text"
          placeholder="Enter E-mail"
          className="input-email"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        ></input>
        <input
          type="password"
          placeholder="Enter Password"
          className="input-password"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        ></input>

        <button type="submit" onClick={collectData}>
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default SignUp;
