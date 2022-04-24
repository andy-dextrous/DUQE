import React from "react"
import {
  SeoTitleDescription,
  SeoTwitter,
  SeoOg,
  CustomHeadElements,
  SeoSchemaRaw,
  SeoSiteVerifications,
} from "./index"
import { SeoSiteSettingsContextProvider } from "./../context"

export const Seo = ({ props }) => {
  const {
    pageContext: { yoastSeo },
  } = props

  return (
    <SeoSiteSettingsContextProvider>
      <SeoTitleDescription {...props} />
      {yoastSeo && <SeoTwitter {...props} />}
      {yoastSeo && <SeoOg {...props} />}
      <SeoSchemaRaw {...props} />
      <CustomHeadElements {...props} />
      <SeoSiteVerifications />
    </SeoSiteSettingsContextProvider>
  )
}

Seo.defaultProps = {
  media: null,
  description: "",
  pageNumber: 1,
  titleTemplate: "default",
}
