import React from "react"
import { graphql } from "gatsby"
import ZoomImageTextType from "../../shared/ZoomImageTextType"

export const query = graphql`
  fragment SLIDE1_QUERY on WpPage {
    ACF_homepage_fields {
      heroImages {
        slide1 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        slide1Mob {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

function HeroSlide1({ data }) {
  const image = {
    desktop: data.heroImages.slide1.localFile.childImageSharp.gatsbyImageData,
    mobile: data.heroImages.slide1Mob.localFile.childImageSharp.gatsbyImageData,
  }
  return (
    <ZoomImageTextType
      data={data}
      sectionIndex={0}
      title=" Workspaces that engage"
      subtitle="We are an end-to end solution for creating"
      link={"/what-we-do"}
      buttonText="What we do"
      image={image}
      playOnLoad
    />
  )
}

export default HeroSlide1
