import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Link to='/app'>Go to the app</Link>
    </div>
  )
}

export default Homepage