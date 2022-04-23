import React from "react"
import VideoIframe from "../../../components/VideoIframe"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react"

export default function VideoLightbox({
  isOpen,
  onClose,
  youtubeVideoCurrent,
  changeVideo,
}) {
  const videoWidth = useBreakpointValue([380, 760, 800, 1080])
  const videoHeight = (videoWidth / 16) * 9 // to maintain 16:9 aspect ratio

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="rgba(30, 30, 30, 0.9)" backdropFilter="blur(10px)" />
      <ModalContent
        maxW={`${videoWidth}px`}
        h={`${videoHeight}px`}
        rounded="2xl"
      >
        <ModalBody
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={0}
          rounded="2xl"
          overflow="hidden"
        >
          <VideoIframe
            width={videoWidth}
            height={videoHeight}
            video={youtubeVideoCurrent}
          />
        </ModalBody>
        <IconButton
          icon={<FaChevronLeft />}
          bg="brandGreen.600"
          _hover={{ bg: "brandGreen.500" }}
          color="white"
          size="md"
          position="absolute"
          left="-200px"
          top="50%"
          cursor={youtubeVideoCurrent?.previous ? "pointer" : "not-allowed"}
          onClick={() => {
            if (youtubeVideoCurrent.previous === null) return
            changeVideo(youtubeVideoCurrent?.previous?.videoId)
          }}
        />
        <IconButton
          icon={<FaChevronRight />}
          bg="brandGreen.600"
          _hover={{ bg: "brandGreen.500" }}
          color="white"
          size="md"
          position="absolute"
          right="-200px"
          top="50%"
          cursor={youtubeVideoCurrent?.next ? "pointer" : "not-allowed"}
          onClick={() => {
            if (youtubeVideoCurrent.next === null) return
            changeVideo(youtubeVideoCurrent?.next?.videoId)
          }}
        />
      </ModalContent>
    </Modal>
  )
}
