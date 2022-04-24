import React from "react"
import Sidebar from "./Sidebar"
import TopBar from "./TopBar"
import Modal from "./Modal"
import Hamburger from "./Hamburger"

function Nav() {
  return (
    <>
      <Sidebar />
      <TopBar />
      {/* <Modal /> */}
      <Hamburger />
    </>
  )
}

export default Nav
