import React, { Component } from 'react';
import { Button } from '@mui/material';
import { Link } from "react-router-dom"
import axios from 'axios';
import "./styles.css"

class Tags extends Component {
  constructor(props) {
    super(props)
    this.state = { tags: [] }
  }
  componentDidMount() {
    axios.get("http://localhost:3000/tags").then((response) => {
      this.setState({ tags: response.data });
    });
    console.log(this.state.tags)
  }
  render() {
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}><button type="button">{tag}</button></li>
        ))}
      </ul>
    );
  }
}

export default Tags;
