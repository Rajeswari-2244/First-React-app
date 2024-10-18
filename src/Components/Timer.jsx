// Timer.js
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false,
    };
  }

  // componentDidMount: This method is called after the component is rendered
  // and it will start the timer if isRunning is set to true.
  componentDidMount() {
    console.log('Timer component mounted');
  }

  // componentDidUpdate: This method is called when the component is updated,
  // and it checks if the timer should start or stop based on isRunning.
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isRunning && !prevState.isRunning) {
       
      this.startTimer();
    } else if (!this.state.isRunning && prevState.isRunning) {
      this.stopTimer();
    }
  }

  // componentWillUnmount: This method is called just before the component is destroyed,
  // and we stop the timer to avoid memory leaks.
  componentWillUnmount() {
    this.stopTimer();
    console.log('Timer component will unmount');
  }

  // Method to start the timer
  startTimer = () => {
    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  };

  // Method to stop the timer
  stopTimer = () => {
    clearInterval(this.timerInterval);
  };

  // Toggle the timer start/stop
  toggleTimer = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
  };

  // Reset the timer
  resetTimer = () => {
    this.stopTimer();
    this.setState({ time: 0, isRunning: false });
  };

  render() {
    return (
      <>
        <h2>Simple Timer</h2>
        <p>Time: {this.state.time} seconds</p>
        <button onClick={this.toggleTimer}>
          {this.state.isRunning ? 'Stop' : 'Start'}
        </button>
        {/* <button onClick={this.resetTimer}>Reset</button> */}
      </>
    );
  }
}

export default Timer;
