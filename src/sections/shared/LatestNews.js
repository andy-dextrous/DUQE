import React from "react"
import SectionWrapper from "../../components/layouts/SectionWrapper"
import ColorCardWithImage from "../../components/cards/ColorCardWithImage.js"
import { Container } from "@chakra-ui/react"

function LatestNews(props) {
  const color = "yellow"
  const image =
    "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,w_800/v1641470257/khkat712.jpg"
  const title = "About Us"
  const content =
    "Tactic Spaces is your answer to the Great Resignation of 2022"
  const buttonText = "Learn more"
  const imageSize = "md"
  const link = "/"
  let width

  return (
    <SectionWrapper minH="auto">
      <Container h="100%" maxW={`container.${width}` || "container.lg"}>
        <ColorCardWithImage
          color={color}
          image={image}
          title={title}
          content={content}
          buttonText={buttonText}
          imageSize={imageSize}
          link={link}
        />
      </Container>
    </SectionWrapper>
  )
}

export default LatestNews
