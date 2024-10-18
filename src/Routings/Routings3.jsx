import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact_pg from './Contact_pg'
import Home1 from '../Components/Home1'
import About from './About'
import Footer from './Footer'
import UsestateHook from './UsestateHook'
import UseEffectHook from '../Components/UseEffectHook'

const Routings3 = () => {
  return (
    <Routes>
        <Route path='/' element={<Home1 />}/>
        <Route path='/Contact_pg' element={<Contact_pg/>}/>
        <Route path='/About'element={<About />} />
        <Route path='/usestate' element={<UsestateHook />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path='/useeffect' element={<UseEffectHook />} />
    </Routes>
  )
}

export default Routings3