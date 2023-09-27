import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';

function Layout() {
  const [sidebarToggle, setSidebarToggle] = useState(true)
  return (
    <>
      <Header sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <main className='main h-[94vh] '>
        <Outlet />
      </main>
    </>
  )
}

export default Layout