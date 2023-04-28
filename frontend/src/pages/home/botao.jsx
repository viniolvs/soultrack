import { Button } from '@mui/material';
import {Link} from "react-router-dom"
import "./styles.css"

function BotaoHome() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/pages/feelings/feliz.jsx">
                    <Button 
                    variant="contained" 
                    sx = {{
                    bgcolor: '#FEC908',
                    color: 'black',
                    '&:hover' : { backgroundColor: '#ffd438'}
                    }}
                    >Feliz
                    </Button>
                </Link>
            </li>

            <li>
                <Link to="/pages/feelings/triste.jsx">
                    <Button 
                    variant="contained" 
                    sx = {{
                    bgcolor: '#00008E',
                    color: '#9282b6',
                    '&:hover' : { backgroundColor: '#0000AD'}
                    }}
                    >Triste
                    </Button>
                </Link>
            </li>

            <li>
                <Link to="/pages/feelings/puto.jsx">
                    <Button 
                    variant="contained" 
                    sx = {{
                    bgcolor: '#E00202',
                    color: 'black',
                    '&:hover' : { backgroundColor: '#ee0404'}
                    }}
                    >Puto
                    </Button>
                </Link>
            </li>
      </ul>
    </div>
  );
}

export default BotaoHome;