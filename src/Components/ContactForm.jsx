import React, { Component } from 'react'

export class ContactForm extends Component {
    state={
        firstName:'',
        lastName:'',
        email:'',
        phone:''

    }
    handleSubmit=(e)=>{
        e.preventDefault()
    }
  render() {
    return (
      <>

      <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
           
                <form >
                <h2>Contact Us</h2>
                    <div className='mt-3' >
                        <input type="text" 
                        placeholder='enter your firstname'
                        name='firstName'
                        className='form-control' />
                    </div>

                    <div className='mt-3' >
                        <input type="text" 
                        placeholder='enter your lastname'
                        name='lastName'
                        className='form-control' />
                    </div>

                    <div className='mt-3' >
                        <input type="email" 
                        placeholder='enter your email'
                        name='email'
                        className='form-control' />
                    </div>

                    <div className='mt-3' >
                        <input type="number" 
                        placeholder='enter your phone number'
                        name='phone'
                        className='form-control' />
                    </div>

                    <div className='mt-3 d-flex  align-items-center justify-content-center'>
                        <button className='btn btn-primary' onClick={(e)=>this.handleSubmit(e)}>submit</button>
                    </div>
                   
                </form>
            </div>
            <div className='col-md-4'></div>
        </div>
      </div>


      </>
    )
  }
}

export default ContactForm