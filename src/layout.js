import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from "./component/footer"
import NavbarComp from './component/navbar'

function Layout() {
  return (
   <>
   <NavbarComp />

<main className="page-content">
  
    <Outlet />
</main>

 <Footer />


   </>
  )
}

export default Layout