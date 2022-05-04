const path = require("path")
const PageSeoFromWP = require(`./seo/pageSeoFromWP.js`)
const THEME_CONFIG = require("../../themeConfig")

module.exports = async ({ actions, graphql }, options) => {
  const includeYoast = options.seoFromWP

  const GET_PAGES = `
    query GET_PAGES {
      allWpPage(sort: { order: DESC, fields: date }) {
        nodes {
          id
          status
          uri
          isPostsPage
          isFrontPage
          template {
            templateName
          }
          ${includeYoast ? PageSeoFromWP : ``}
        }
      }
    }
  `

  function getPageTemplate(wpTemplateName) {
    const matchingGatsbyTemplate =
      wpTemplateName !== "Default" ? wpTemplateName.replace(" ", "") : "Default"

    let templateComponent = path.resolve(
      `./src/templates/${matchingGatsbyTemplate}.js`
    )
    return templateComponent
  }

  const { createPage } = actions
  const pagesQuery = await graphql(GET_PAGES)
  const pages = pagesQuery.data.allWpPage.nodes

  // Create all site pages from templates matching WP Template names
  await Promise.all(
    pages.map(page => {
      const { template, seo, isFrontPage, isPostsPage, status, id, uri } = page
      if (isPostsPage || status !== "publish") return
      if (options.pageCreateDebugOutput) {
        console.log(`[WILD_CHILD] create page: ${uri}`)
      }
      createPage({
        path: isFrontPage ? "/" : uri,
        component: getPageTemplate(template.templateName),
        context: {
          id: id,
          yoastSeo: includeYoast,
          seo: {
            page: seo,
            general: options.generalSeoSettings,
          },
          variables: THEME_CONFIG,
        },
      })
    })
  )
}
