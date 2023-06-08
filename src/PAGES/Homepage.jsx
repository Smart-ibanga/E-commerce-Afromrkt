import React from 'react'
import Header from '../COMPONENTS/Header/Header'
import { Outlet } from 'react-router-dom'


function Homepage() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default Homepage