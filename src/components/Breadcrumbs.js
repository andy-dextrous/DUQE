import React from "react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { Link } from "gatsby"

function Breadcrumbs({ data: breadcrumbs = [] }) {
  return breadcrumbs ? (
    <Breadcrumb>
      {breadcrumbs.map((breadcrumb, i) => {
        const lastCrumb = i === breadcrumbs.length - 1
        return (
          <BreadcrumbItem key={i} isCurrentPage={lastCrumb ? true : false}>
            <BreadcrumbLink
              as={Link}
              color={lastCrumb ? "gray.500" : "brandGreen.500"}
              fontWeight={lastCrumb ? "normal" : "semibold"}
              href={lastCrumb ? "#" : breadcrumb.url}
              fontSize={["sm", "sm", "md"]}
            >
              {breadcrumb.text}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  ) : (
    <></>
  )
}

export default Breadcrumbs
