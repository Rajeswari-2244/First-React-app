import React from 'react'

const FuncComp = (props) => {
    console.log(props)
  return (
    <div>
        <h2>Function Component</h2>
        <h4>courseName :{props.courseName} and duration is {props.duration}  and fee is {props.fee} and personalDetails is {props.personalDetails[0]}</h4>
        <h3>car is {props.cars.name}</h3>
        <h2>and total models are {props.arrOfObject[0].name}</h2>
        
    </div>
  )
}

export default FuncComp