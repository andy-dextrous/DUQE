import { VStack } from "@chakra-ui/react"
import React from "react"
import AuthorBlogDetails from "../authors/AuthorBlogDetails"
import { WidgetsList } from "../widgets/WidgetsList"

function PostSidebar() {
  return (
    <VStack
      spacing={3}
      p={0}
      align="start"
      flex="1"
      justify="start"
      ref={containerRef}
      position="relative"
    >
      <WidgetsList />
      <AuthorBlogDetails ref={authorRef} data={data} />
    </VStack>
  )
}

export default PostSidebar
