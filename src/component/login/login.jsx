import React, { Component } from 'react';
class Login extends Component{
    constructor(){
        super();
        this.state={
            heading:"LOGIN SECTION"
        }

    };
    render(){
        return(
<React.Fragment>
    <div className="row">
        <div className="col-md-12">
            <h1>{this.state.heading}</h1>
        </div>
    </div>
</React.Fragment>

        )
    }
};
export default Login;
