import React from 'react'

const ComponentFunc =(props)=>{
    console.log(props)
    return(
        <div>
            hello i wrote by my own
            <p>My name is {props.name} currently i am pursing {props.cousrse} with {props.fee}</p>
        </div>
    )
}
export default ComponentFunc;