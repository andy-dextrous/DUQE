import React, { useRef } from "react"
import { SearchForm } from "./SearchForm"
import StarIcon from "../../assets/icons/StarIcon"

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
  const initialRef = useRef(null)

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
        <ModalContent h="full" bg="brandConcrete.default" overflow="hidden">
          <Center h="full" position="relative" m={[0, 0, 40]}>
            <Box w={["100%", "100%", "60vw"]}>
              <ModalHeader>
                <Heading>Search site</Heading>
              </ModalHeader>
              <ModalCloseButton
                bg="brandYellow.default"
                size="lg"
                _hover={{ bg: "dark.default", color: "brandYellow.default" }}
              />
              <ModalBody>
                <SearchForm ref={initialRef} />
              </ModalBody>
            </Box>
          </Center>
          <StarIcon
            position="absolute"
            color="white"
            outline
            opacity="0.4"
            zIndex="-1"
            width="60vw"
            h="60vw"
            top="-20%"
            left="-20%"
            id="cross-spin"
          />
        </ModalContent>
      </Modal>
    </>
  )
}

export default SearchModal
