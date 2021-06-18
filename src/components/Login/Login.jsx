import React from "react";
import "./stylelogin.css";
import logo from "../../assests/Spotify_Logo_RGB_Green.png";
import { accessUrl } from "../../spotify";

function Login() {
  return (
    <div className="login">
      <img className="logo" src={logo} alt="Spotify Logo" />
      <a href={accessUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
