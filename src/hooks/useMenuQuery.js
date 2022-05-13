import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = menu => {
  const data = useStaticQuery(
    graphql`
      query MenuQuery {
        allWpMenu {
          edges {
            node {
              id
              databaseId
              name
              menuItems {
                nodes {
                  parentId
                  label
                  url
                  path
                  id
                  childItems {
                    nodes {
                      parentId
                      path
                      id
                      label
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const targetMenu = data.allWpMenu.edges.filter(menuData => {
    return menuData.node.name === menu
  })

  return targetMenu[0].node
}
