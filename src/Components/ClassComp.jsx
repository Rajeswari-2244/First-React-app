import React, { Component } from 'react'

export class ClassComp extends Component {
    constructor(props){
        super(props)
    }
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>courseName is {this.props.courseName} and duration is {this.props.duration} and personalDetails are {this.props.personalDetails[2]}</h3>
        <h4>arrOfObject is {this.props.arrOfObject[1].name}</h4>
        <h3>car is {this.props.cars.price}</h3>


      </div>
    )
  }
}

export default ClassComp