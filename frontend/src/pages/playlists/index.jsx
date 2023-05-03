import React, { Component } from "react";
import Playlist from "../../components/Playlist";

class Playlists extends Component {
  state = {
    playlists: [],
  };
  componentDidMount() {
    fetch("http://localhost:3000/playlists")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ playlists: data });
      });
  }
  render() {
    return (
      <div>
        {this.state.playlists.map((playlist) => (
          <Playlist key={playlist.id} src={playlist.src} />
        ))}
      </div>
    );
  }
}

export default Playlists;
