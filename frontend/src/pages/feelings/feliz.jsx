import { Container } from "@mui/material";
import "../../App.css";
import Playlist from "../../components/Playlist";

export default function Feliz() {
  return (
    <div>
      <Container //organizar container!
        sx={{
          bgcolor: "var(--cor4)",
          height: "130vh",
          borderRadius: 8,
          width: "135vh",
        }}
      >
        <h1 style={{ textAlign: "center", marginTop: 10 }}>Alegriaaaaaa</h1>

        <Playlist src="https://open.spotify.com/embed/playlist/4IuAswMJUgkNTRB81JlZVH?utm_source=generator&theme=0" />
        <Playlist src="https://open.spotify.com/embed/playlist/2oyxSQWOqGc4VCf3PClkbh?utm_source=generator&theme=0" />
      </Container>
    </div>
  );
}
