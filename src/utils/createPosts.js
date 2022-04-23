const PageSeoFromWP = require(`./seo/pageSeoFromWP.js`)
const { paginate } = require(`gatsby-awesome-pagination`)
const normalize = require("normalize-path")

module.exports = async ({ actions, graphql }, options) => {
  const includeYoast = options.seoFromWP
  // These templates must be hardcoded to avoid a bug in gatsby-awesome-pagination
  const blogTemplatePath = `../templates/Blog.js`
  const blogTemplate = require.resolve(blogTemplatePath)
  const postTemplatePath = `../templates/Post.js`
  const postTemplate = require.resolve(postTemplatePath)

  const { postsPath, paginationPrefix, postsPerPage } = options
  const { createPage } = actions

  const GET_POSTS = `
    query GET_POSTS($limit:Int){
      allWpPost(limit: $limit, sort: {order: DESC, fields: date}) {
        edges {
          previous {
            uri
          }
          node {
            uri
            id
            ${includeYoast ? PageSeoFromWP : ``}
          }
          next {
            uri
          }
        }
      }
    }
  `

  const GET_POSTS_PAGE = `
  query GET_PAGE($uri: String) {
    wpPage(uri: { eq: $uri }) {
      title
      ${includeYoast ? PageSeoFromWP : ``}
    }
  }
  `

  const queries = [graphql(GET_POSTS)]
  if (postsPath && postsPath !== "/") {
    queries.push(graphql(GET_POSTS_PAGE, { uri: postsPath }))
  }
  const [postsQuery, postsPageQuery] = await Promise.all(queries)

  const posts = postsQuery.data.allWpPost.edges

  // Create posts
  await Promise.all(
    posts.map(post => {
      createPage({
        path: post.node.uri,
        component: postTemplate,
        context: {
          id: post.node.id,
          uri: post.node.uri,
          prev: post.previous ? post.previous.uri : null,
          next: post.next ? post.next.uri : null,
          yoastSeo: includeYoast,
          seo: {
            page: post.node.seo,
            general: options.generalSeoSettings,
          },
        },
      })
    })
  )

  if (!postsPath) return

  const pathPrefix = ({ pageNumber }) => {
    return pageNumber === 0
      ? postsPath
      : normalize(`${postsPath}/${paginationPrefix}`)
  }

  paginate({
    createPage,
    defer: true,
    pathPrefix,
    component: blogTemplate,
    items: posts,
    itemsPerPage: postsPerPage,
    context: {
      title: postsPageQuery && postsPageQuery.data.wpPage.title,
      yoastSeo: includeYoast,
      seo: {
        page: postsPageQuery && postsPageQuery.data.wpPage.seo,
        general: options.generalSeoSettings,
      },
    },
  })
}
