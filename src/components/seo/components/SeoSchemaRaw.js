import React from "react"
import { Helmet } from "react-helmet"

export const SeoSchemaRaw = props => {
  return (
    <Helmet>
      {props.pageContext?.seo?.page?.schema?.raw && (
        <script type="application/ld+json">
          {props.pageContext.seo.page.schema.raw}
        </script>
      )}
    </Helmet>
  )
}
