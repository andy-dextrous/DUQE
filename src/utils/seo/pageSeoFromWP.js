const PageSeoFromWP = `seo {
      metaDesc
      metaKeywords
      metaRobotsNoindex
      metaRobotsNofollow
      opengraphAuthor
      opengraphDescription
      schema {
        articleType
        pageType
        raw
      }
      breadcrumbs {
        text
        url
      }
      canonical
      opengraphType
      opengraphTitle
      opengraphModifiedTime
      opengraphUrl
      twitterDescription
      twitterTitle
      cornerstone
      title
      opengraphImage {
        localFile {
          childImageSharp {
            original {
              src
              height
              width
            }
          }
        }
      }
      twitterImage {
        localFile {
          childImageSharp {
            original {
              src
              height
              width
            }
          }
        }
      }
    }
  `

module.exports = PageSeoFromWP
