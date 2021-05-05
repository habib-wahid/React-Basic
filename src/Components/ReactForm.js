import React, { Component } from 'react'

export class ReactForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            name:'',
            address:''
        };
        
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit(event){
        alert('A form was submitted '+ this.state.name + ' '+ this.state.address);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form  onSubmit={this.handleSubmit}>

                    <div>
                        <lable>
                        Name: 
                        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                        </lable>
                    </div>
                    <br />
                  
                <div>
                  <lable>
                      Address: 
                      <input type="text" name="address" value={this.state.value1} onChange={this.handleChange} />
                  </lable>
                </div>
                <br />

                  <input type="submit" value="Submit" />
                </form>
                <br />
                
            </div>
        );
    }
}

export default ReactForm
