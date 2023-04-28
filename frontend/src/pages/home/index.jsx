import React from "react";
import { Container, Box } from "@mui/material";
import BotaoHome from "./botao";

export default function Home() {
  return (
    <div>
      <Container
        sx={{ bgcolor: 'var(--cor4)', height: '20vh', borderRadius: 8, width: '70vh' }}
      ><h1 style={{ textAlign: 'center', marginBottom: 20, marginTop: 10 }}>
          Como esta se sentindo?
        </h1>

        <Box style={{ display: "flex", justifyContent: "center", }} >
          <BotaoHome />
        </Box>
      </Container>
    </div>

  );
}
