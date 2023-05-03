import { Container } from "@mui/material";
import Playlist from "../../components/Playlist";
import "../../App.css";

export default function Triste() {
  return (
    <div>
      <Container //organizar container!
        sx={{
          bgcolor: "var(--cor4)",
          height: "100vh",
          borderRadius: 8,
          width: "135vh",
        }}
      >
        <h1 style={{ textAlign: "center", marginTop: 10 }}>
          So as que machuca
        </h1>
        <Playlist src="https://open.spotify.com/embed/playlist/3i0OrJpM223jPchB31YW0f?utm_source=generator&theme=0" />
      </Container>
    </div>
  );
}
