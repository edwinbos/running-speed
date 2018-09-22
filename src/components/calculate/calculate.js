import React, { Component } from 'react'
import Result from '../result/result'

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
                <div class="calulate-result">
                    {this.state.runningSpeed ? <Result result={this.state.runningSpeed} /> : null }
                </div>
                <div class="calculate">
                    <div class="calculate__fields">
                        <div class="calculate__field">
                            <label for="distance">
                                <input id="distance" 
                                       name="distance" 
                                       type="number" 
                                       onChange={this.handleChangeDistance}
                                       placeholder="km"
                                />
                                <span>Distance</span>
                            </label>
                        </div>
                        <div class="calculate__field">
                            <label for="hours">
                                <input id="hours" 
                                       name="hours" 
                                       type="number" 
                                       onChange={this.handleChangeHours} 
                                       placeholder="hh"
                                />
                                <span>Hours</span>
                            </label>
                        </div>
                        <div class="calculate__field">
                            <label for="minutes">
                                <input id="minutes" 
                                       name="minutes" 
                                       type="number" 
                                       onChange={this.handleChangeMinutes}
                                       placeholder="mm"
                                />
                                <span>Minutes</span>
                            </label>
                        </div>
                        <div class="calculate__field">
                            <label for="seconds">
                                <input id="seconds" 
                                       name="seconds" 
                                       type="number" 
                                       onChange={this.handleChangeSeconds}
                                       placeholder="ss"
                                />
                                <span>Seconds</span>
                            </label>
                        </div>
                    </div>
                    
                    <button type="submit" onClick={this.calculateRunningSpeed}>Calculate</button>
                </div>
            </div>
        )
    }
}

export default Calculate