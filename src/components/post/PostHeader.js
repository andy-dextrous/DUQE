import React from "react"
import { SmartImage } from "../../components/SmartImage"
import Breadcrumbs from "../../components/archive/Breadcrumbs"
import SectionWrapper from "../../components/SectionWrapper"
import { PostEntryTitle } from "../../components/post/PostEntryTitle"
import { PublicationDate } from "../../components/post/PublicationDate"
import { Image, VStack } from "@chakra-ui/react"

function PostHeader({ data, ctx }) {
  const { seo } = ctx

  return (
    <SectionWrapper
      className="light"
      containerSize="lg"
      containerStyles={{ py: 0, pt: [20, 20, 32, 48, 60] }}
    >
      <VStack flex="1" align="start" spacing={8} as="header">
        <VStack align="start" spacing={8} as="header">
          <Breadcrumbs data={seo.page.breadcrumbs} />
          <PostEntryTitle data={data.title} />
          <PublicationDate
            data={{ date: data.date, readingTime: seo.readingTime }}
          />
        </VStack>
        <SmartImage img={data.featuredImage?.node} loading="eager" />
      </VStack>
      <Image
        src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651108536/DUQE/Q.svg"
        position="absolute"
        top="0"
        right="0px"
        opacity="50%"
        zIndex="-1"
        data-speed="0.7"
      />
    </SectionWrapper>
  )
}

export default PostHeader
