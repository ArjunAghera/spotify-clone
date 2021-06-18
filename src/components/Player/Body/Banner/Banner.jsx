import React from "react";
import "./styleBanner.css";
import { useDataLayer } from "../../../../DataLayer";

function Banner() {
  const [{ top50_global }, dispatch] = useDataLayer();
  console.log(top50_global);
  return (
    <div className="banner">
      <img src={top50_global?.images[0].url} alt="Top 50 - Global" />
      <div className="bannerInfo">
        <strong>PLAYLIST</strong>
        <h1>{top50_global?.name}</h1>
        <p>{top50_global?.description}</p>
      </div>
    </div>
  );
}

export default Banner;
