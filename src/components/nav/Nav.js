import React from "react"
import Sidebar from "./Sidebar"
import TopBar from "./TopBar"
import Modal from "./Modal"
import Hamburger from "./Hamburger"

function Nav() {
  return (
    <>
      <Sidebar />
      <Hamburger color="white" />
      <TopBar />
      <Modal />
    </>
  )
}

export default Nav
