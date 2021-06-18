import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player";
import { useDataLayer } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayer();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });

        spotify.getPlaylist("37i9dQZEVXbMDoHDwVN2tF").then((top50_global) => {
          dispatch({
            type: "SET_TOP_50_GLOBAL",
            top50_global: top50_global,
          });
        });

        dispatch({
          type: "SET_SPOTIFY",
          spotify: spotify,
        });
      });
    }
    console.log(token);
  }, []);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
