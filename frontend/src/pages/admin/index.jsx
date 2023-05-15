import React, { Component } from "react";
import AddPlaylist from "./AddPlaylist";
import Playlist from "../../components/Playlist.jsx"
import axios from "axios";

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = { playlists: [] }
    this.addPlaylist = this.addPlaylist.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
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

  addPlaylist(playlist) {
    axios.post("http://localhost:3000/addPlaylist", playlist)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    axios.get("http://localhost:3000/playlists").then((response) => {
      this.setState({ playlists: response.data });
    });
  }
  render() {
    return (
      <>
        <h1>Admin</h1>
        <h2>Add Playlist</h2>
        <AddPlaylist addPlaylist={this.addPlaylist} />
        <h2>Delete Playlist</h2>
        <div>
          <h2>Playlists</h2>
          {this.state.playlists.map((playlist) => (
            <div key={playlist.id}>
              <Playlist src={playlist.src} />
              <button onClick={() => this.handleDelete(playlist.id)}>Delete</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Admin;
