import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Botao() {
  return (
    <div>
      <Link to="/">
        <Button
          variant="contained"
          sx={{
            bgcolor: "var(--cor4)",
            color: "var(--cor2)",
            "&:hover": { backgroundColor: "var(--cor4h)" },
          }}
        >
          Home
        </Button>
      </Link>

      <Link to="/playlists">
        <Button
          variant="contained"
          sx={{
            bgcolor: "var(--cor2)",
            color: "black",
            "&:hover": { backgroundColor: "var(--cor2h)" },
          }}
        >
          Playlists
        </Button>
      </Link>

      <Link to="/about">
        <Button
          variant="contained"
          sx={{
            bgcolor: "var(--cor2)",
            color: "black",
            "&:hover": { backgroundColor: "var(--cor2h)" },
          }}
        >
          About
        </Button>
      </Link>

      <Link to="/admin">
        <Button
          variant="contained"
          sx={{
            bgcolor: "var(--cor2)",
            color: "black",
            "&:hover": { backgroundColor: "var(--cor2h)" },
          }}
        >
          Admin
        </Button>
      </Link>
    </div>
  );
}

export default Botao;
