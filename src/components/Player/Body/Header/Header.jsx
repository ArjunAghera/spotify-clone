import React from "react";
import "./styleHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayer } from "../../../../DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayer();
  return (
    <div className="header">
      <div className="headerLeft">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs, or Podcasts"
        />
      </div>
      <div className="headerRight">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
