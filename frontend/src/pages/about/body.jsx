import { Container } from "@mui/material";
import "../../App.css"
import "./styles.css";

function Body() {
  return (
    <div className="aboutbody">
        <Container  //organizar container!
        sx={{ bgcolor: 'var(--cor4)', height: '100vh', borderRadius: 8, width:'135vh'}} 
        ><h1>Sobre nos</h1>
        <div>
        <img className="aboutimg" src="https://i.imgur.com/4jsdv2b.png" />
        </div>

        <h2>kkkkkkkkkkkk vini volves</h2>
        </Container>
    </div>
  );
}

export default Body;