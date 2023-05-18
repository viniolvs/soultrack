import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import Playlist from "../../components/Playlist";

export default function Tag() {
  let { tag } = useParams()
  const [playlists, setPlaylists] = React.useState([])
  React.useEffect(() => {
    axios.get(`http://localhost:3000/tags/${tag}`)
      .then(response => {
        setPlaylists(response.data);
      });
  }, []);
  return (
    <div>
      <h2>{tag}</h2>
      {
        playlists.map((playlist) => (
          <Playlist key={playlist.id} src={playlist.src} />
        ))
      }
    </div>
  )
}

