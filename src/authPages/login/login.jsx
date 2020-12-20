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
        this.state = { errorText:"",isError:false,email:'',password:'' }
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

    handleChange = (e) =>
    {
        this.setState({[e.target.id]:e.target.value})
    }

    validations = ( ) =>
    {
        if(this.state.username.length<1)
        {
            this.setState({isError:true,errorText:'Please enter email address or username!'})
            return false;
        }

        if(this.state.username.length<3)
        {
            this.setState({isError:true,errorText:'Please enter valid email address or username!'})
            return false;
        }

        if(this.state.password.length<1)
        {
            this.setState({isError:true,errorText:'Please enter password!'})
        }

        if(this.state.password.length<8)
        {
            this.setState({isError:true,errorText:'Please enter a valid password!'})
        }

        return true;
    }


    GetAuth = ( ) =>
    {
        if(this.validations)
        {
            this.FirebaseAuth()
        }
    }

    FirebaseAuth = () =>
    {
        document.getElementById('loader-wrapper').classList.add('loader-true')
        this.setState({isLoading:true})
        // firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
        // .then((user) => {
        //     // Signed in 
        //     // ...
        // })
        // .catch((error) => {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        // });
    }
    
    render() { 


        return ( 

        <div style={{overflow:'hidden'}}>


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
                                        onChange={this.handleChange}
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
                                        onChange={this.handleChange}
                                        className="b1-login-textfield"
                                    />
                                </div>

                                <div className="b1-login-button-div">
                                    <Button variant="contained" className="b1-login-button" onClick={this.GetAuth}>
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
        </div>
        );
    }
}
 
export default Login;