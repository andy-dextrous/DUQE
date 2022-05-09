import { Button, Heading, Stack, StackDivider, VStack } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useRef } from "react"
import DIcon from "../../../assets/icons/DIcon"
import HomeBlogCard from "../../../components/archive/HomeBlogCard"
import SectionWrapper from "../../../components/SectionWrapper"
import { SmartLink } from "../../../components/SmartLink"
import { gsap, ScrollTrigger } from "../../../gsap"

function LatestBlogs() {
  const dShape = useRef()

  const data = useStaticQuery(graphql`
    query Latest_Posts {
      allWpPost(limit: 3, sort: { fields: date, order: DESC }) {
        nodes {
          title
          date(formatString: "DD MM YYYY")
          excerpt
          uri
          featuredImage {
            node {
              ...IMAGE_DATA
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        gsap.to(dShape.current, {
          x: 100,
          y: -40,
          rotation: -40,
          ease: "linear",
          scrollTrigger: {
            trigger: dShape.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      },
    })
  }, [])

  return (
    <SectionWrapper bg="dark.default" containerSize="xl">
      <Stack direction={["column", "column", "row"]} spacing={[20, 20, 40]}>
        <VStack spacing={[8, 8, 12]} align="flex-start" flex="1">
          <Heading className="jumbo" color="white">
            From the blog
          </Heading>
          <Heading as="h3" className="thin-h3" color="white">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Heading>
          <SmartLink url="/blog">
            <Button>View All</Button>
          </SmartLink>
        </VStack>
        <VStack
          flex="1"
          divider={<StackDivider borderColor="dark.800" />}
          spacing={[8, 8, 16]}
        >
          {data.allWpPost.nodes.map((post, index) => {
            return (
              <HomeBlogCard
                key={post.uri}
                startVisible={index === 0}
                post={post}
              />
            )
          })}
        </VStack>
      </Stack>
      <DIcon
        color="#e0db2a"
        height="50vw"
        width="50vw"
        opacity="0.5"
        outline
        position="absolute"
        left="-10%"
        top="5%"
        ref={dShape}
      />
    </SectionWrapper>
  )
}

export default LatestBlogs
