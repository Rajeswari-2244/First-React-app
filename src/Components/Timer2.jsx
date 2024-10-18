import React, { Component } from 'react';

class Timer2 extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      time: 0,          // Holds the elapsed time
      isRunning: false, // Tracks whether the timer is running or not
    };
    this.intervalId = null; // A property to store the interval ID for the timer
  }

  // componentDidMount: Called after the component is rendered for the first time.
  componentDidMount() {
    // No interval is started here initially. You could potentially auto-start the timer by setting the state here.
    console.log('Timer component has mounted.');
  }

  // componentDidUpdate: This lifecycle method runs after the component has updated (state or props changes).
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isRunning && !prevState.isRunning) {
      // Start the timer if it's not already running
      this.intervalId = setInterval(() => {
        this.setState((prevState) => ({
          time: prevState.time + 1 // Increment the time every second
        }));
      }, 1000);
    }

    if (!this.state.isRunning && prevState.isRunning) {
      // Stop the timer if the running state changed to false
      clearInterval(this.intervalId);
    }
  }

  // componentWillUnmount: This is called when the component is about to be removed from the DOM.
  componentWillUnmount() {
    clearInterval(this.intervalId); // Clear the interval when the component unmounts to prevent memory leaks
    console.log('Timer component is unmounting, interval cleared.');
  }

  // Method to start/stop the timer
  toggleTimer = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning // Toggle between starting and stopping the timer
    }));
  };

  // Method to reset the timer
  resetTimer = () => {
    clearInterval(this.intervalId); // Stop the timer
    this.setState({
      time: 0,          // Reset the time to 0
      isRunning: false, // Stop the timer
    });
  };

  render() {
    return (
      <div>
        <h2>Timer</h2>
        <p>Time: {this.state.time} seconds</p>
        <button onClick={this.toggleTimer}>
          {this.state.isRunning ? 'Stop' : 'Start'} {/* Dynamic button label based on isRunning state */}
        </button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default Timer2;
