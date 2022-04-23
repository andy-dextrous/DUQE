const path = require("path")
const PageSeoFromWP = require(`./seo/pageSeoFromWP.js`)

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
          ACF_gravityFormId {
            formId
          }
          ${includeYoast ? PageSeoFromWP : ``}
        }
      }
    }
  `

  function getPageTemplate(wpTemplateName) {
    let templateComponent = path.resolve(
      `./src/templates/${
        wpTemplateName !== "Default" ? wpTemplateName : "SimplePage"
      }.js`
    )
    return templateComponent
  }

  const { createPage } = actions
  const pagesQuery = await graphql(GET_PAGES)
  const pages = pagesQuery.data.allWpPage.nodes

  // Create all site pages from templates matching WP Template names
  await Promise.all(
    pages.map(page => {
      const {
        template,
        seo,
        isFrontPage,
        isPostsPage,
        status,
        id,
        uri,
        ACF_gravityFormId: { formId },
      } = page
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
          formId: formId,
          seo: {
            page: seo,
            general: options.generalSeoSettings,
          },
        },
      })
    })
  )
}
