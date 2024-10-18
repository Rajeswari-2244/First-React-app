import React, { Component } from 'react'

export class Contact_pg extends Component {
  state={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    firstNameErr:'',
    lastNameErr:'',
    emailErr:'',
    phoneErr:''
  }
  handleClick=(e)=>{
    e.preventDefault()
    this.validateForm()

  }

  validateForm=()=>{
    let firstNameErr='';
    let lastNameErr='';
    let emailErr='';
    let phoneErr='';

    if(this.state.firstName.length<=4){
      firstNameErr='first name should be atleast 4 characters'
    }

    if(this.state.lastName.length<=1){
      lastNameErr='last name should be atleast 1 character'
    }
    if(!this.state.email.includes('@')){
      emailErr='email should contain @'
    }

    if(this.state.phone !== 10){
      phoneErr='enter a valid number'
    }

if(firstNameErr || lastNameErr || emailErr || phoneErr){
  this.setState({firstNameErr,lastNameErr,emailErr,phoneErr})

}

  

  }

 

  handleChange=(e)=>{
    // console.log(e.target.value)
    const {name,value}=e.target
    this.setState({[name]:value})
    console.log(this.state)
  }




  render(){
    
    return (
      <div>
     

<div className='row'>
  <div className='col-md-4'></div>
  <div className='col-md-4'>
  
    <form>
    <h2 className='d-flex align-items-center justify-content-center'>Contact Us</h2>
      <div className='mt-2'>
        <input type="text" placeholder='enter your first name' 
        name='firstName'
        className='form-control'
        onChange={(e)=>this.handleChange(e)} 
        value={this.state.firstName}/>
        <p className='text-danger'>{this.state.firstNameErr}</p>
      </div>

      <div  className='mt-2'>
        <input type="text" placeholder='enter your last name' 
        name='lastName'
        className='form-control'
        onChange={(e)=>this.handleChange(e)}
        value={this.state.lastName}/>
         <p className='text-danger'>{this.state.lastNameErr}</p>
      </div>

      <div  className='mt-2'>
        <input type="email" placeholder='enter your email' 
        name='email'
        className='form-control'
        onChange={(e)=>this.handleChange(e)}
        value={this.state.email}/>
         <p className='text-danger'>{this.state.emailErr}</p>
      </div>

      <div  className='mt-2'>
        <input type="number" placeholder='enter your phone number' 
        name='phone'
        className='form-control'
        onChange={(e)=>this.handleChange(e)}
        value={this.state.phone}/>
         <p className='text-danger'>{this.state.phoneErr}</p>
      </div>
        <div className='d-flex align-items-center justify-content-center'>
      <button className='btn btn-primary mt-3 ' onClick={(e)=>{this.handleClick(e)}}>Submit</button>

      </div>
      
    </form>
  </div>
  <div className='col-md-4'></div>
  
</div>

      </div>
    )
  }
}

export default Contact_pg