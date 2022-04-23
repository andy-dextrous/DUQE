import React from "react"
import { Link } from "gatsby"
import { Button, Center, Flex } from "@chakra-ui/react"

export const Pagination = ({ ctx, anchor }) => {
  const { humanPageNumber, numberOfPages, seo } = ctx

  return (
    <Center w="full" pt={12}>
      <Flex>
        {Array.from({ length: numberOfPages }).map((page, i) => {
          return (
            <Link
              key={i}
              to={
                i === 0
                  ? `${seo.page.canonical}${anchor ? anchor : ""}`
                  : `${seo.page.canonical}/page/${i + 1}${anchor ? anchor : ""}`
              }
            >
              <Button
                variant="pagination"
                mr={2}
                isDisabled={i + 1 === humanPageNumber ? true : false}
              >
                {i + 1}
              </Button>
            </Link>
          )
        })}
      </Flex>
    </Center>
  )
}
