import React, { forwardRef } from "react"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { Box, Image as ChakraImage } from "@chakra-ui/react"

export const query = graphql`
  fragment IMAGE_DATA on WpMediaItem {
    altText
    localFile {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export const SmartImage = forwardRef(
  (
    {
      img,
      alt = "",
      loading = "lazy",
      data,
      parallax,
      imgStyle = {
        width: "100%",
        height: parallax ? "180%" : "100%",
        objectFit: "cover",
        marginTop: 0,
      },
      style = {},
      ...props
    },
    ref
  ) => {
    const breakPoints = [
      "(max-width:428px)",
      "(max-width:768px)",
      "(max-width:960px)",
      "(max-width:1440px)",
      "(max-width:1660px)",
      "(max-width:1800px)",
    ]

    function getImages(img) {
      // If just a url, use chakra image
      if (typeof img === "string") {
        return img
      }

      // If an array of gatsby images is passed, use them for responsive images
      if (typeof img === "object" && Array.isArray(img)) {
        const directedImages = []

        for (let i = 1; i < img.length; i++) {
          directedImages.push({
            media: breakPoints[i - 1],
            image: getImage(img[i].localFile?.childImageSharp?.gatsbyImageData),
          })

          const data = withArtDirection(
            getImage(img[0].localFile.childImageSharp?.gatsbyImageData),
            [...directedImages]
          )

          return data
        }
      }

      // If a single gatsby image is passed, use Gatsby Image
      if (typeof img === "object" && !Array.isArray(img)) {
        const image = img.localFile.childImageSharp?.gatsbyImageData

        return image
      }
    }
    const imageRef = React.useRef(getImages(img))

    return img ? (
      typeof imageRef.current === "object" ? (
        <GatsbyImage
          loading={loading}
          image={
            Array.isArray(img) ? imageRef.current : getImage(imageRef.current)
          }
          alt={img.altText}
          imgStyle={imgStyle}
          style={style}
          // ref={ref}
          {...props}
        />
      ) : parallax ? (
        <Box {...props} overflow="hidden" ref={ref}>
          <ChakraImage
            src={imageRef.current}
            alt={alt}
            objectFit="cover"
            data-speed="auto"
            {...imgStyle}
          />
        </Box>
      ) : (
        <ChakraImage
          src={imageRef.current}
          ref={ref}
          alt={alt}
          {...props}
          objectFit="cover"
        />
      )
    ) : (
      <></>
    )
  }
)
