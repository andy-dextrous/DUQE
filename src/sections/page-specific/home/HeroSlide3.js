import React from "react"
import { graphql } from "gatsby"
import ZoomImageTextType from "../../shared/ZoomImageTextType"

export const query = graphql`
  fragment SLIDE3_QUERY on WpPage {
    ACF_homepage_fields {
      heroImages {
        slide3 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        slide3Mob {
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

function HeroSlide3({ data }) {
  const image = {
    desktop: data.heroImages.slide3.localFile.childImageSharp.gatsbyImageData,
    mobile: data.heroImages.slide3Mob.localFile.childImageSharp.gatsbyImageData,
  }
  return (
    <ZoomImageTextType
      data={data}
      sectionIndex={2}
      subtitle="We believe the workspaces of tomorrow"
      title="Begin with people"
      image={image}
      rounded
    />
  )
}

export default HeroSlide3
