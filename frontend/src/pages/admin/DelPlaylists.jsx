import React, { Component } from "react";
import Playlist from "../../components/Playlist";
import axios from "axios";

class DelPlaylists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:3000/playlists").then((response) => {
      this.setState({ playlists: response.data });
    });
  }
  handleDelete(playlistID) {
    axios.delete(`http://localhost:3000/playlists/${playlistID}`)
      .then(response => {
        this.setState(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    const updatedPlaylists = this.state.playlists.filter(playlist => {
      return playlist.id !== playlistID
    })
    this.setState({ playlists: updatedPlaylists })
  }
  render() {
    return (
      <div>
        <h1>Playlists</h1>
        {this.state.playlists.map((playlist) => (
          <div key={playlist.id}>
            <Playlist src={playlist.src} />
            <button onClick={() => this.handleDelete(playlist.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default DelPlaylists;
