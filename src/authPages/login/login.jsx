import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { errorText:"",isError:false }
    }
    render() { 

        const classes = { paper:{ background:'yellow' } }

        return ( 
        <Grid container >
            <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
                <Paper className={classes.paper}>

                </Paper>
            </Grid>
        </Grid>  
        );
    }
}
 
export default Login;