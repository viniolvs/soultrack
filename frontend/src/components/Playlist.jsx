import React, { Component } from "react";

class Playlist extends Component {
  render() {
    return (
      <iframe
        style={{ borderRadius: 12, marginTop: 10 }}
        src={this.props.src}
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    );
  }
}

export default Playlist;
