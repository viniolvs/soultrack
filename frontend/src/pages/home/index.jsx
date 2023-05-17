import React, { Component } from "react";
import { Container, Box } from "@mui/material";
import Tags from "./tags.jsx"

class Home extends Component {
  render() {
    return (
      <div>
        <Container
          sx={{
            bgcolor: "var(--cor4)",
            height: "20vh",
            borderRadius: 8,
            width: "70vh",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: 20, marginTop: 10 }}>
            Como esta se sentindo?
          </h1>

          <Tags />
        </Container>
      </div >
    );
  }
}

export default Home;
