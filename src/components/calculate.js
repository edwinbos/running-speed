import React, { Component } from 'react'

import './calculate.css'

class Calculate extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            distance: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            runningSpeed: 0
        }
    }

    handleChangeDistance = (event) => {
        this.setState({
            distance: event.target.value
        });
    }

    handleChangeHours = (event) => {
        let hours = 3600 * parseFloat(event.target.value);

        this.setState({
            hours: hours
        });
    }

    handleChangeMinutes = (event) => {
        let minutes = 60 * parseFloat(event.target.value);

        this.setState({
            minutes: minutes
        });
    }

    handleChangeSeconds = (event) => {
        this.setState({
            seconds: parseFloat(event.target.value)
        });
    }

    calculateRunningSpeed = (event) => {

        let time = this.state.hours + this.state.minutes + this.state.seconds;
        let avg = 3600 * (this.state.distance / time);
        let speed = (!isNaN(avg) ? avg.toFixed(2) : 0);

        this.setState({
            runningSpeed: speed
        });
    }

    render() {
        return(
            <div>
                <label for="distance">
                    <span>Distance (km)</span>
                    <input id="distance" name="distance" type="number" onChange={this.handleChangeDistance} />
                </label>
                <label for="hours">
                    <span>Hours</span>
                    <input id="hours" name="hours" type="number" onChange={this.handleChangeHours} />
                </label>
                <label for="minutes">
                    <span>Minutes</span>
                    <input id="minutes" name="minutes" type="number" onChange={this.handleChangeMinutes} />
                </label>
                <label for="seconds">
                    <span>Seconds</span>
                    <input id="seconds" name="seconds" type="number" onChange={this.handleChangeSeconds} />
                </label>
                <button type="submit" onClick={this.calculateRunningSpeed}>Calculate</button>
                <br/>
                {this.state.runningSpeed} km/u<br/>
            </div>
        )
    }
}

export default Calculate