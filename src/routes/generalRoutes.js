import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../authPages/login/login';
import Signup from '../authPages/signup/signup';
import Dashboard from '../pages/Dashboard/dashboard';
import PrivateRoute from './component/privateRoute';


class GeneralRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Route path={["/login"]} component={Login} />
                <Route path={["/signup"]} component={Signup} />
                <PrivateRoute component={Dashboard} />
            </React.Fragment>
         );
    }
}
 
export default GeneralRoutes;