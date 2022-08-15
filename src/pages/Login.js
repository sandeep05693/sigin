import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, FormControlLabel, Checkbox } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import { Link } from "react-router-dom";

const Login = () => {

    const paperStyle = { padding: 20, height: '70vh', width: 400, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    return (
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>

                <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required />
                <br />
                <br />
                <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required />
                <br />
                <br />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button  color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <br />
                <br />
                <Typography >
                    <Link to="/Forgotten" >
                         Forgot password ?
                    </Link>
                </Typography>
                <br />
                <br />
                <Typography > Do you have an account ?
                    <Link to="/Signup" >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login