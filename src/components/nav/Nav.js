import React from "react"
import Sidebar from "./Sidebar"
import TopBar from "./TopBar"
import Modal from "./Modal"
import Hamburger from "./Hamburger"

function Nav({ withTopBar }) {
  return (
    <>
      <Sidebar />
      <Hamburger color="white" />
      {withTopBar && <TopBar />}
      <Modal />
    </>
  )
}

export default Nav
