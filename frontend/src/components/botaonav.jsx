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

      <Link to="/pages/playlists/index.jsx">
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

      <Link to="/pages/about/index.jsx">
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
    </div>
  );
}

export default Botao;
