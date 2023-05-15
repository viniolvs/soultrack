import React, { Component } from "react";

class AddPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "", author: "", tag: "", src: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);

  }
  handleAdd(playlist) {
    this.props.addPlaylist(playlist)
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: "" });
    const playlist = {
      name: this.state.name,
      description: this.state.description,
      author: this.state.author,
      tag: this.state.tag,
      src: this.state.src
    }
    this.handleAdd(playlist)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          cols="10"
          value={this.state.description}
          onChange={this.handleChange}
        ></textarea>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          name="author"
          id="author"
          value={this.state.author}
          onChange={this.handleChange}
          required
        />
        <label htmlFor="tag">Tag:</label>
        <input
          type="text"
          name="tag"
          id="tag"
          value={this.state.tag}
          onChange={this.handleChange}
          required
        />
        <label htmlFor="src">Spotify URL:</label>
        <input
          type="text"
          name="src"
          id="src"
          value={this.state.src}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add Playlist</button>
      </form>
    );
  }
}
export default AddPlaylist;
