import React from 'react'

const Footer = () => {
    return (
        <>


            <div className='container-fluid bg-dark text-light' >
                <div className='row'>
                    <div className='col-md-3'>
                        <img src="https://www.achieversit.com/assets/images/AIT-white.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veniam expedita aut qui quam repudiandae! Perferendis dolor, blanditiis consectetur, sint numquam, maxime tempora similique error iusto totam soluta voluptatem eius!</p>

                    </div>

                    <div className='col-md-3'>
                        <label htmlFor="" className='fs-5'> Company</label>
                        <ul Style='list-style:none'>
                            <li>
                                Home
                            </li>
                            <li>
                            Placements
                            </li>
                            <li>
                                Corporate training
                            </li>
                            <li>
                                Contact us
                            </li>
                            
                        </ul>

                    </div>

                    <div className='col-md-3'>
                        <label htmlFor="" className='fs-5'>Trending Courses</label>
                        <ul  Style='list-style:none'>
                            <li >
                                UI development
                            </li>
                            <li>
                            Angular Js Course
                            </li>
                            <li>
                                React js course
                            </li>
                            <li>
                                digital marketing course
                            </li>
                            <li>
                               python course
                            </li>
                        </ul>

                    </div>

                    <div className='col-md-3'>
                        <p>#63,1st floor,16th main,8th cross,BTM 1st stage,Banglore,India-560029</p>
                        <p>india:91+ 2323232323</p>
                        <p>info@achieversit.com</p>

                    </div>
                </div>
            </div>



        </>
    )
}

export default Footer