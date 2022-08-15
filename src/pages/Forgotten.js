import { Grid, Paper, TextField, Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";
function Forgotten() {
    const paperStyle = { padding: 20, height: '70vh', width: 400, margin: "20px auto" };
    const btnstyle = { margin: '8px 0' };
    return (
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Find Your Account</h2>
                </Grid>
                <hr/>
                <br/>
                <br/>
                <Typography >
                         Please enter your email address or mobile number to search for your account.
                </Typography>
                <br/>
                <br/>
                <TextField label='Email address or mobile numbe'  variant="outlined" fullWidth required />
                <br/>
                <br/>
                <hr/>
                    <Button  color='primary' variant="contained" style={btnstyle} fullWidth>Search</Button>
                <br/>
                <Link to="/" >
                    <Button  color='secondary' variant="contained" style={btnstyle} fullWidth>cancel</Button>
                </Link>
               
            </Paper>
        </Grid>
    );
}

export default Forgotten;