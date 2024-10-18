import React, { Component } from "react";
// class Timer_main extends Component{
//     constructor(props){
//         super(props)
        
//     }
//     state={
//        time:0,
//        isRunning:false
//     }

//     componentDidMount(){
//         console.log('Timer component mounted')
//     }

//     render(){

       
        
//         return(
//             <>
//             <h1>Timer</h1>
//             <h3>time:{this.state.time}</h3>
        
//             <button className="m-5" onClick={this.start}>start</button>
//             <button className="m-5" onClick={this.stop}>stop</button>

//             </>
//         )
//     }
// }

// export default Timer_main





class Timer extends Component {
    constructor(props) {
      super(props);
      // Initialize state
      this.state = {
        time: 0,          // Timer starts at 0 seconds
        isRunning: false, // Timer is initially stopped
      };
      this.intervalId = null; // Reference for interval ID
    }
  
    // This lifecycle method runs when the component is first mounted
    componentDidMount() {
      console.log("Timer component mounted");
    }
  
    // This lifecycle method runs every time the component updates
    componentDidUpdate(prevProps, prevState) {
      // Only log when the `time` value changes
      if (prevState.time !== this.state.time) {
        console.log(`New time: ${this.state.time} seconds`);
      }
  
      // Start the timer when `isRunning` changes to true
      if (this.state.isRunning && !prevState.isRunning) {
        this.intervalId = setInterval(() => {
          this.setState((prevState) => ({
            time: prevState.time + 1, // Increment time every second
          }));
        }, 1000);
      }
  
      // Stop the timer when `isRunning` changes to false
      if (!this.state.isRunning && prevState.isRunning) {
        clearInterval(this.intervalId);
      }
    }
  
    // This lifecycle method runs when the component is about to unmount
    componentWillUnmount() {
      // Clear the interval if it is running
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      console.log("Timer component will unmount");
    }
  
    // Start the timer by setting isRunning to true
    handleStart = () => {
      this.setState({ isRunning: true });
    };
  
    // Stop the timer by setting isRunning to false
    handleStop = () => {
      this.setState({ isRunning: false });
    };
  
    render() {
      return (
        <div>
          <h2>Timer App</h2>
          <p>Time: {this.state.time} seconds</p>
          <p>Status: {this.state.isRunning ? "Running" : "Stopped"}</p>
          <button onClick={this.handleStart} disabled={this.state.isRunning}>
            Start
          </button>
          <button onClick={this.handleStop} disabled={!this.state.isRunning}>
            Stop
          </button>
        </div>
      );
    }
  }
  





