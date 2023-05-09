import React, { Component } from "react";
import PlaylistForm from "./PlaylistForm";

class Admin extends Component {
  render() {
    return (
      <>
        <h1>Add Playlist</h1>
        <PlaylistForm />
      </>
    );
  }
}

export default Admin;
