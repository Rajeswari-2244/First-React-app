
import React,{ Component } from 'react'

class Task11 extends Component{
    state={
        count:0,
        btn_color:"blue",
        width:0,
        height:0
         }

    handleIncrement=()=>{

        this.setState({count:this.state.count+1,btn_color:"green"})
        
    }
    handleDecrement=()=>{

        this.setState({count:this.state.count-1,btn_color:"red"})

    }
    componentDidMount(){
        console.log('component did mount')
        window.addEventListener('resize',()=>{
          this.setState({width:window.innerWidth,height:window.innerHeight})

        

        })

    }
    componentDidUpdate(){
        console.log('component did update')
    }


    // componentWillUnmount(){
    //     window.removeEventListener('resize',)
    // }
    render(){
        return(
            <>
            <h1>Task11</h1>
            <h1 style={{color:this.state.btn_color }}>count:{this.state.count}</h1>
            <button onClick={this.handleIncrement}>increment</button>
            <button onClick={this.handleDecrement}>decrement</button>
            <h1>width:{this.state.width}</h1>
            <h1>height:{this.state.height}</h1>
            </>
        )
    }
}
export default Task11