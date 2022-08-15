import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Grid,AppBar, Toolbar, Typography} from '@mui/material'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgotten from './pages/Forgotten';
import Notfound from './pages/Notfound';
function App() {
  return (
    <div >
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justify="center" wrap="wrap">
            <Grid item>
              <Typography variant="h6">Sample</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Router>
        <div>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Forgotten" element={<Forgotten />} />
            <Route path="/Login" element={<Login />} />
            <Route element={<Notfound />} />
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
