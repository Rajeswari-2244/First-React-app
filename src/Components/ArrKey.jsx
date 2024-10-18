import React,{ Component } from 'react'
class ArrKey extends Component{

    strings=[1,2,3,4,5,6,7,8]
    render(){
        return(
            <div>
                <ul>
                    {this.strings.map((data,index)=> <li key={index}>{data}</li>)}
                </ul>

    
     
                
            </div>
        )
    }
}
export default ArrKey

// import React, { Component } from 'react'

// export class ArrKey extends Component {
//   render() {
//     return (
//       <div>ArrKey</div>
//     )
//   }
// }

// export default ArrKey