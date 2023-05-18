import React from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';
import "./styles.css"

function Tags() {

  const [tags, setTags] = React.useState([])
  React.useEffect(() => {
    axios.get(`http://localhost:3000/tags`)
      .then(response => {
        setTags(response.data);
      });
  }, []);
  return (
    <ul>
      {tags.map((obj, index) => (
        <li key={index}>
          <Link to={`/tags/${obj.tag}`}  > <button>{obj.tag}</button></Link>
        </li>
      ))}
    </ul>
  )
}

export default Tags;
