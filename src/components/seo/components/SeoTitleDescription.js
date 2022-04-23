import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { SeoSiteSettingsContext } from "./../context"
import { addPageNumber } from "./../helpers"
import slashes from "remove-trailing-slash"
import { absolutePath } from "./../helpers"

export const SeoTitleDescription = props => {
  const { title } = props.data?.wpPage
    ? props.data?.wpPage
    : props.data?.wpPost
    ? props.data?.wpPost
    : ""
  const { seo, humanPageNumber, numberOfPages } = props.pageContext

  const ctx = useContext(SeoSiteSettingsContext)

  let pageTitle = addPageNumber(
    seo?.page?.title || title || `${ctx.title} | ${ctx.description}`,
    humanPageNumber,
    numberOfPages
  )

  const pageDescription = seo?.page ? seo.page.metaDesc : ctx.description
  const canonical = seo?.page?.canonical

  return (
    <Helmet
      htmlAttributes={{
        lang: ctx?.language.replace("_", "-") || "en-US",
      }}
      title={pageTitle}
    >
      {pageDescription && <meta name="description" content={pageDescription} />}
      {pageDescription && (
        <link
          rel="canonical"
          href={absolutePath(ctx.siteUrl, slashes(canonical))}
        />
      )}
    </Helmet>
  )
}
