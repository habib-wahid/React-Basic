import React, { Component } from "react";

class State extends Component{

    constructor(){
        super();
        this.state = {
            message:'Learning State'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for subscribing'
        }
        )
    }

    render(){
        return(
            <div>
             <h1>{ this.state.message }</h1>
             <button onClick={() => this.changeMessage() }>  subscribe </button>
            </div>
        )
    }

}

export default State