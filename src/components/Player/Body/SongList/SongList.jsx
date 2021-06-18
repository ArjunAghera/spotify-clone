import React from "react";
import "./styleSongList.css";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow/SongRow";
import { useDataLayer } from "../../../../DataLayer";

function SongList({ spotify }) {
  const [{ top50_global, item, playing }, dispatch] = useDataLayer();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXbMDoHDwVN2tF`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="songList">
      <div className="songListHeader">
        <PlayCircleFilledWhiteIcon fontSize="large" className="songListIcon" />
        <FavoriteIcon className="songListIcon iconLight" />
        <MoreHorizIcon className="songListIcon iconLight" />
      </div>
      <div className="songListMain">
        {top50_global?.tracks.items.map((item, id) => (
          <SongRow playSong={playSong} key={id} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default SongList;
