import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const auth = localStorage.getItem("User");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">PRODUCT</Link>
          </li>
          <li>
            <Link to="/add">ADD PRODUCT</Link>
          </li>
          <li>
            <Link to="/profile">PROFILE</Link>
          </li>
          <li>
            <Link to="/login" onClick={logout}>
              LOGOUT
            </Link>
          </li>
          <li>
            <Link to="/cart">CART</Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-right">
          <li>
            <Link to="login">LOGIN </Link>
          </li>
          <li>
            <Link to="signup">SIGNUP</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Nav;
