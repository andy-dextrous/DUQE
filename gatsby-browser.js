import * as React from "react"
import { ApolloProvider } from "@apollo/client"
import Wrapper from "./src/components/search/context"

import { client } from "./lib/apolloClient"

export const wrapRootElement = ({ element }, pluginOptions) => (
  <ApolloProvider client={client}>
    <Wrapper element={element} {...pluginOptions} />
  </ApolloProvider>
)

function wrapContent() {
  if (typeof document !== "undefined") {
    const content = document.querySelector("#___gatsby")
    const smoothContent = document.createElement("div")
    const smoothWrapper = document.createElement("div")
    smoothContent.setAttribute("id", "smooth-content")
    smoothWrapper.setAttribute("id", "smooth-wrapper")
    smoothContent.appendChild(content)
    smoothWrapper.appendChild(smoothContent)
    document.body.appendChild(smoothWrapper)
  }
}

wrapContent()
