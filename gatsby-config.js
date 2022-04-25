require("dotenv").config()
const defaultOptions = require(`./defaultOptions`)

module.exports = {
  siteMetadata: {
    siteUrl: defaultOptions.siteUrl,
    title: defaultOptions.siteTitle,
    description: defaultOptions.siteDescription,
  },
  trailingSlash: "never",
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.GATSBY_WORDPRESS_API_URL,
        presets: [
          {
            presetName: `DEVELOP`,
            useIf: () =>
              process.env.NODE_ENV === `development` &&
              defaultOptions.developLimit,
            options: {
              type: {
                __all: {
                  limit: defaultOptions.developLimit,
                },
              },
            },
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,

    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allWpContentNode(filter: {nodeType: {in: ["Post", "Page"]}}) {
            nodes {
              ... on WpPost {
                uri
                modifiedGmt
              }
              ... on WpPage {
                uri
                modifiedGmt
              }
            }
          }
        }
      `,
        resolveSiteUrl: () => defaultOptions.siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allWpContentNode: { nodes: allWpNodes },
        }) => {
          const wpNodeMap = allWpNodes.reduce((acc, node) => {
            const { uri } = node
            acc[uri] = node

            return acc
          }, {})

          return allPages.map(page => {
            return { ...page, ...wpNodeMap[page.path] }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`avif`, `webp`, `auto`],
          placeholder: `none`,
          quality: 80,
          breakpoints: [391, 768, 960, 1440, 1660, 1800],
          backgroundColor: `#000000`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `@chakra-ui/gatsby-plugin`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-prettier-build`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-perf-budgets`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DUQE Free Zone`,
        short_name: `DUQE`,
        start_url: `/`,
        theme_color: `#E0DB2A`,
        display: `standalone`,
        icon: `./static/favicon.svg`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
  ],
}
