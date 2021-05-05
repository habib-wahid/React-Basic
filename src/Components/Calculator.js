import React, { Component } from 'react';
import BoilingVerdick from './BoilingVerdick';

export class Calculator extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            temperature:''
        };
    }

    handleChange(e){
        this.setState({
            temperature:e.target.value
        });
    }
    render() {

        const temperature = this.state.temperature;

        return (
            <div>
                <fieldset>
                    <p>Enter temperature in Celsius:</p>
                    <input value={temperature} onChange={this.handleChange} />
                    <BoilingVerdick celcius={parseFloat(temperature)} />
                </fieldset>
            </div>
        );
    }
}

export default Calculator
