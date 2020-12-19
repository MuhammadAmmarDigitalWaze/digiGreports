import React, { Component } from 'react';


class GeneralRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Route path={["/users/:id", "/profile/:id"]} component={User} />
            </React.Fragment>
         );
    }
}
 
export default GeneralRoutes;