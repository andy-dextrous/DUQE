import React from "react"
import { PostEntryContent } from "./PostEntryContent"
import { PrevNextPostNavigation } from "./PrevNextPostNavigation"
import { Image } from "../images/Image"
import Breadcrumbs from "../Breadcrumbs"
import { PostEntryTitle } from "./PostEntryTitle"
import { PostEntryExcerpt } from "./PostEntryExcerpt"
import { PublicationDate } from "./PublicationDate"
import { SocialShare } from "../social/SocialShare"
import { VStack } from "@chakra-ui/react"

export const PostEntryFull = ({ data }) => {
  return (
    <VStack flex="2" align="start" spacing={8} as="article">
      <VStack align="start" spacing={2} as="header">
        <Breadcrumbs data={breadcrumbs} />
        <PostEntryTitle data={data.title} />
        <PostEntryExcerpt data={data.excerpt} />
        <PublicationDate data={{ date: data.date, readingTime: readingTime }} />
      </VStack>
      <SocialShare url={data.uri} />
      <Image
        img={data.featuredImage.node}
        style={{ borderRadius: "0.75rem" }}
        loading="eager"
      />
      <PostEntryContent data={data.content} />
      <PrevNextPostNavigation prev={prev} next={next} />
    </VStack>
  )
}
