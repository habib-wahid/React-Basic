import React, { Component } from 'react'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting';

export class LoginControl extends Component {

    constructor(props){
        super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
        isLoggedIn:false
    };
    }

    handleLoginClick(){
        this.setState({
            isLoggedIn:true
        });
    }
    handleLogoutClick(){
        this.setState({
            isLoggedIn:false
        });
    }

    render() {

        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }
        else{
            button = <LoginButton onClick = {this.handleLoginClick} />;
        }

        return (
            <div>

                <Greeting isloggedIn = {isLoggedIn} />
                {button}

            </div>
        );
    }
}

export default LoginControl
