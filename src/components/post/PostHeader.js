import React from "react"
import { SmartImage } from "../../components/SmartImage"
import Breadcrumbs from "../../components/archive/Breadcrumbs"
import SectionWrapper from "../../components/SectionWrapper"
import { PostEntryTitle } from "../../components/post/PostEntryTitle"
import { PublicationDate } from "../../components/post/PublicationDate"
import { VStack } from "@chakra-ui/react"
import { useVariable } from "../../hooks/useVariable"
import QIcon from "../../assets/icons/QIcon"

function PostHeader({ data, ctx }) {
  const { seo } = ctx
  const { containerPaddingY } = useVariable()

  return (
    <SectionWrapper
      className="light"
      containerSize="lg"
      containerStyles={{ py: 0, pt: containerPaddingY }}
    >
      <VStack flex="1" align="start" spacing={[8, 8, 24]} as="header">
        <VStack align="start" spacing={5}>
          <Breadcrumbs data={seo.page.breadcrumbs} />
          <PostEntryTitle data={data.title} />
          <PublicationDate
            data={{ date: data.date, readingTime: seo.readingTime }}
          />
        </VStack>
        <SmartImage
          img={data.featuredImage?.node}
          loading="eager"
          style={{
            borderRadius: "30px",
            overflow: "hidden",
            "@media (max-width: 768px)": { borderRadius: "20px" },
          }}
        />
      </VStack>
      <QIcon
        color="#e0db2a"
        outline
        width={["100vw", "100vw", "60vw"]}
        h={["150vw", "150vw", "60vw"]}
        position="absolute"
        top={["20%", "20%", "-10%"]}
        right="-10%"
        zIndex="-1"
        opacity="0.7"
        data-speed="0.5"
      />
    </SectionWrapper>
  )
}

export default PostHeader
