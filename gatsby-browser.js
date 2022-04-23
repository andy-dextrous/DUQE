import * as React from "react"
import { ApolloProvider } from "@apollo/client"
import Wrapper from "./src/components/search/context"

import { client } from "./lib/apolloClient"

export const wrapRootElement = ({ element }, pluginOptions) => (
  <ApolloProvider client={client}>
    <Wrapper element={element} {...pluginOptions} />
  </ApolloProvider>
)
