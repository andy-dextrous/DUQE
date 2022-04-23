import { Button, Heading, Portal } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/layouts/SectionWrapper"

function PolygonItemInfo({ isOpen, setIsOpen, selectedItem }) {
  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <Portal>
      <SectionWrapper
        bg="gray.100"
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        visibility={isOpen ? "visible" : "hidden"}
      >
        <Heading>{selectedItem}</Heading>
        <Button onClick={handleClick}>Close</Button>
      </SectionWrapper>
    </Portal>
  )
}

export default PolygonItemInfo
