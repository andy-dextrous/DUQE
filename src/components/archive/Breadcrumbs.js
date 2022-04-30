import React from "react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { Link } from "gatsby"

function Breadcrumbs({ data: breadcrumbs = [] }) {
  return breadcrumbs ? (
    <Breadcrumb>
      {breadcrumbs
        .filter(breadcrumb => {
          return !breadcrumb.url.includes("gatsby")
        })
        .map((breadcrumb, i) => {
          const lastCrumb = i === breadcrumbs.length - 1
          return (
            <BreadcrumbItem key={i} isCurrentPage={lastCrumb ? true : false}>
              <BreadcrumbLink
                as={Link}
                color="brandBlue.default"
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
