import React, { Component } from 'react'
import FuncComp from './FuncComp'

 class Counter extends Component {



    constructor(){
        super()
        // creating state with in constructor
        // this.state={
        //     count:0
        // }
    }
    state={
        count:0
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    handleReset=()=>{
        this.setState({count:this.state.count-this.state.count})
    }
    
  render() {
    // state is a object which is to manipulate the data within the component
    // state can be write in two ways one is within the constructor and other is out of constructor

    return (
      <div>
        <h1>count : {this.state.count}</h1>
+
        {/* <button onClick={this.HandleIncrement/}>increment</button>  if parameters are not there */}


        <button onClick={()=>{this.handleIncrement()}}>Increment</button>
        <button onClick={()=>{this.handleDecrement()}}>Decrement</button>
        <button onClick={()=>{this.handleReset()}}>Reset</button>

        <FuncComp count={this.state.count} incrementor={this.state.handleIncrement()}/>


      </div>
    )
  }
}

export default Counter