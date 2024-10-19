import React from 'react'
import SideSection from '../components/sideSection'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const StudentLayout = () => {
  return (
    <>
        <div className=''>
            <Navbar/>
            <div className='flex '>
                <SideSection/>
                <Outlet/>
            </div>
        </div>
       
    </>
  )
}

export default StudentLayout