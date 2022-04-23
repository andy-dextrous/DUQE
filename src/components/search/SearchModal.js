import React from "react"
import { SearchForm } from "./SearchForm"
// import { VscClose } from "react-icons/vsc"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
  Box,
  Heading,
  // IconButton,
} from "@chakra-ui/react"

function SearchModal({ isOpen, onClose }) {
  const initialRef = React.useRef(null)
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        zIndex={"modal"}
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent h="full">
          <Center h="full" position="relative" m={[0, 0, 40]}>
            <Box w={["100%", "100%", "60vw"]}>
              <ModalHeader>
                <Heading>Looking for something?</Heading>
              </ModalHeader>
              <ModalCloseButton
                bg="brandYellow.600"
                _hover={{ bg: "brandGreen.500" }}
              />
              <ModalBody>
                <SearchForm ref={initialRef} />
              </ModalBody>
            </Box>
          </Center>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SearchModal
