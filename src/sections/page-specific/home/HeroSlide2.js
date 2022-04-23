import React from "react"
import { graphql } from "gatsby"
import ZoomImageTextType from "../../shared/ZoomImageTextType"

export const query = graphql`
  fragment SLIDE2_QUERY on WpPage {
    ACF_homepage_fields {
      heroImages {
        slide2 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        slide2Mob {
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

function HeroSlide2({ data }) {
  const image = {
    desktop: data.heroImages.slide2.localFile.childImageSharp.gatsbyImageData,
    mobile: data.heroImages.slide2Mob.localFile.childImageSharp.gatsbyImageData,
  }
  return (
    <ZoomImageTextType
      data={data}
      sectionIndex={1}
      subtitle="Delivering meaningful change by"
      title="Uniting insight with creativity"
      image={image}
    />
  )
}

export default HeroSlide2
