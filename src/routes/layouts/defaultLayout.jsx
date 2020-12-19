import React, { Component } from 'react';


class DefaultLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Route path={["/", "/dashboard"]} component={Dashboard} />
        );
    }
}
 
export default DefaultLayout;