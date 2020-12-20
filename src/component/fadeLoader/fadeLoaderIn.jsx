

import React, { Component } from 'react';
import './fadeLoader.css'
import {Puff} from '@agney/react-loading'

class FadeLoaderIn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount()
    {
        if(this.props.isLoading===true)
        {
            this.addLoaderClass();
        }

        if(this.props.isLoading===false)
        {
            this.removeLoaderClass();
        }
    }

    componentDidUpdate(prevProps)
    {
        if(this.prevProps.isLoading!==this.props.isLoading)
        {
            if(this.props.isLoading===true)
            {
                this.addLoaderClass();
            }

            if(this.props.isLoading===false)
            {
                this.removeLoaderClass();
            }
        }
    }

    addLoaderClass = () =>
    {
        document.getElementById('loader-wrapper').classList.add('loader-true');
    }

    removeLoaderClass = () =>
    {
        document.getElementById('loader-wrapper').classList.remove('loader-true');
    }

    render()
    {
        return(

            <div id="loader-wrapper" className="loader-wrapper">
     
            </div>
            
        )
    }    

}
 
export default FadeLoaderIn;

