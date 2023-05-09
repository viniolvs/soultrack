import React, { Component } from "react";
import Playlist from "../../components/Playlist";
import axios from "axios";

class Playlists extends Component {
  state = {
    playlists: [],
  };
  componentDidMount() {
    // fetch("http://localhost:3000/playlists")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({ playlists: data });
    //   });
    axios.get("http://localhost:3000/playlists").then((response) => {
      this.setState({ playlists: response.data });
    });
  }
  render() {
    return (
      <div>
        <h1>Playlists</h1>
        {this.state.playlists.map((playlist) => (
          <Playlist key={playlist.id} src={playlist.src} />
        ))}
      </div>
    );
  }
}

export default Playlists;
