const PageSeoFromWP = require(`./seo/pageSeoFromWP.js`)

module.exports = async ({ actions, graphql }, options) => {
  const includeYoast = options.seoFromWP
  const { createPage } = actions

  const CUSTOM_POST_TYPES = `
    query GET_CUSTOM_POST_TYPES {
      allWpContentType {
        edges {
          node {
            name
            showInGraphql
            graphqlSingleName
            showUi
            uri
            hasArchive
            archivePath
          }
        }
      }
    }
  `

  const postTemplatePath = `../templates/Post.js`
  const postTemplate = require.resolve(postTemplatePath)
  const query = await graphql(CUSTOM_POST_TYPES)
  const {
    data: {
      allWpContentType: { edges: allWpPostFormat },
    },
  } = query

  const nativeTypes = ["mediaItem", "post", "page"]
  const customPostTypes = allWpPostFormat.filter(post => {
    return !nativeTypes.includes(post.node.graphqlSingleName)
  })

  const GET_POSTS = `
    query GET_${customPostTypes[0].node.graphqlSingleName.toUpperCase()}($limit:Int){
      allWp${
        customPostTypes[0].node.graphqlSingleName
      }(limit: $limit, sort: {order: DESC, fields: date}) {
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
  const { data } = await graphql(GET_POSTS)
  const customPosts =
    data[`allWp${customPostTypes[0]?.node?.graphqlSingleName}`]?.edges

  // Create posts
  await Promise.all(
    customPosts.map(post => {
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

  // if (!postsPath) {
  //   return
  // }

  // const pathPrefix = ({ pageNumber }) => {
  //   return pageNumber === 0
  //     ? postsPath
  //     : normalize(`${postsPath}/${paginationPrefix}`)
  // }

  // paginate({
  //   createPage,
  //   defer: true,
  //   pathPrefix,
  //   component: blogTemplate,
  //   items: posts,
  //   itemsPerPage: postsPerPage,
  //   context: {
  //     title: postsPageQuery && postsPageQuery.data.wpPage.title,
  //     yoastSeo: includeYoast,
  //     seo: {
  //       page: postsPageQuery && postsPageQuery.data.wpPage.seo,
  //       general: options.generalSeoSettings,
  //     },
  //   },
  // })
}
