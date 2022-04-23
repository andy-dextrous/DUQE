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
                  databaseId
                  title
                  path
                  label
                  parent {
                    id
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
