import React, { Component } from "react";
import AddPlaylist from "./AddPlaylist";
import DelPlaylists from "./DelPlaylists";

class Admin extends Component {
  render() {
    return (
      <>
        <h1>Admin</h1>
        <h2>Add Playlist</h2>
        <AddPlaylist />
        <h2>Delete Playlist</h2>
        <DelPlaylists />
      </>
    );
  }
}

export default Admin;
