import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "normalize.css"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    //  shorthand React.Fragment
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
