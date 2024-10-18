import React from 'react'
import { useState } from 'react'

const Button2 = () => {

    const [state,setState]=useState('yellow')
    function myfun(){
        if(state==='yellow'){
        setState('red')
    }
    else{
        setState('yellow')
    }
}


  return (
    <>
    <button onClick={myfun} style={{backgroundColor:state}} on >click me</button>
    </>
  )
}

export default Button2

// function App(){
//     const [state,setState]=useState('red')
//     return(
//         <div>
//             <button style={{backgroundColor:state}}>click me</button>
//         </div>
//     )
// }
// export default App;