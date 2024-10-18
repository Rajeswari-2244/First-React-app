import React, { Component } from 'react'

 class Mounting extends Component {
    constructor(){
        super()
        console.log("constructor executed")
    }
    state={
        Mounting :[]
    }

    static getDerivedStateFromProps(props,state){
        console.log("static get derived state from props is exectued")
        return null
    }

    componentDidMount(){
        console.log('component did mount is executed')
    }
  render() {

    console.log('render executed')
    return (
      <><h1>Mounting</h1></>
    )
  }
}

export default Mounting