import React, { Component } from 'react';
import { Paper,Grid, Button } from '@material-ui/core';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';



// import background from '../../assets/login-1920x1080@80.jpg'
// import background from '../../assets/login-hd.jpg'
// import logo from '../../assets/logo-small.jpg'

import './b1-login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { errorText:"",isError:false }
    }


    componentDidMount()
    {
        document.getElementById('b1-login-container').classList.add('b1-login-container-blend1');
        setTimeout( this.changeBlendClass , 5000);
    }

    changeBlendClass()
    {
        document.getElementById('b1-login-container').classList.remove('b1-login-container-blend1');
        document.getElementById('b1-login-container').classList.add('b1-login-container-blend2');
  
    }
    
    render() { 


        return ( 
        <Grid id="b1-login-container" className="b1-login-container" container justify="center" alignItems="center" direction="row">
            <Grid  item xs={12} sm={8} lg={8} xl={6}>
                <Paper className="b1-login-paper">
                    <Grid container>

                        {/* Paper Head */}
                        <Grid item xs={false} sm={2} lg={4} xl={3}></Grid>
                        <Grid  item xs={12} sm={8} lg={4} xl={3}>
                            {/* <img src={logo} alt="DigitalWaze" width="100%" className="b1-login-paper-head-logo"/> */}
                        </Grid>
                        <Grid item xs={false} sm={2} lg={4} xl={3}>
                        </Grid>
                        {/* Paper Head */}


                        {/* Paper Body */}
                        <Grid item xs={false} sm={2} lg={4} xl={3}></Grid>
                        <Grid  item xs={12} sm={8} lg={4} xl={3}>

                            <div className="b1-login-textfield-div">
                                <TextField
                                    id="username"
                                    label="Email / Username"
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle style={{color:'white'}} />
                                        </InputAdornment>
                                    ),
                                    }}
                                    className="b1-login-textfield"
                                />
                            </div>

                            <div className="b1-login-textfield-div">
                                <TextField
                                    id="password"
                                    label="Password"
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle style={{color:'white '}} />
                                        </InputAdornment>
                                    ),
                                    }}
                                    className="b1-login-textfield"
                                />
                            </div>

                            <div className="b1-login-button-div">
                                <Button variant="contained" className="b1-login-button">
                                    Let Me In'
                                </Button>
                            </div>
                            
                        </Grid>
                        <Grid item xs={false} sm={2} lg={4} xl={3}></Grid>
                        {/* Paper Body */}                   
                        
                    </Grid>
                </Paper>
            </Grid>
        </Grid>  
        );
    }
}
 
export default Login;