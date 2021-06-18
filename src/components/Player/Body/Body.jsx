import React from "react";
import "./styleBody.css";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import SongList from "./SongList/SongList";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header />
      <Banner />
      <SongList spotify={spotify} />
    </div>
  );
}

export default Body;
