import React from "react"
import { graphql, Link } from "gatsby"
import { Flip } from "../../gsap"

import SectionWrapper from "../../components/SectionWrapper"
import VerticalCard from "../../components/common/VerticalCard"
import StarIcon from "../../assets/icons/StarIcon"
import SearchToggle from "../../components/search/SearchToggle"
import { Pagination } from "../../components/archive/Pagination"
import { Box, Container, Select, SimpleGrid, Stack } from "@chakra-ui/react"

function PostGrid({ posts, ctx, categories }) {
  const [selectedPosts, setSelectedPosts] = React.useState(posts)

  function filterCategories(e) {
    Flip.getState(".post-item")

    const selection = Array.from(e.target).filter((option, i) => {
      return option.selected
    })
    const category = selection[0].value
    const filteredPosts = posts.filter(post => {
      return post.categories.nodes.some(cat => {
        return cat.slug === category
      })
    })
    filteredPosts.length
      ? setSelectedPosts(filteredPosts)
      : setSelectedPosts(posts)

    // Flip.from(state, {
    //   duration: 0.1,
    //   ease: "power1.inOut",
    //   absolute: true,
    // })
  }

  return (
    <SectionWrapper
      minH="auto"
      id="post-grid"
      mb={[0, 0, 40]}
      className="light"
    >
      <Container h="100%" maxW={["container.lg", "container.lg", "100%"]}>
        <Stack
          spacing={3}
          mb={12}
          align="start"
          direction={["column", "column", "column", "row"]}
        >
          <SearchToggle />
          <Select
            flex="1"
            bg="#F6F6F6"
            border="1px solid #DEDEDE"
            size="lg"
            placeholder="All categories"
            color="dark.700"
            onChange={e => {
              filterCategories(e)
            }}
          >
            {categories.map(cat => {
              return (
                <option key={cat.node.id} value={cat.node.slug}>
                  {cat.node.name}
                </option>
              )
            })}
          </Select>
        </Stack>
        <SimpleGrid
          as="ul"
          columns={{ base: 1, lg: 2 }}
          spacingY={24}
          spacingX={40}
        >
          {selectedPosts.map(post => {
            return (
              <Link to={post.uri} key={post.id}>
                <Box position="relative" className="post-item">
                  <VerticalCard
                    image={
                      post.featuredImage?.node.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    title={post.title}
                    published={post.date}
                    readTime={post.seo.readingTime}
                    excerpt={post.excerpt}
                    useGatsbyImage={true}
                    as={"li"}
                  />
                  <StarIcon
                    color="#62c6c1"
                    position="absolute"
                    right="-100px"
                    top="10%"
                    width="200px"
                    height="200px"
                  />
                </Box>
              </Link>
            )
          })}
        </SimpleGrid>

        {selectedPosts && <Pagination ctx={ctx} anchor="#post-grid" />}
      </Container>
    </SectionWrapper>
  )
}

export default PostGrid

export const query = graphql`
  fragment POSTS_QUERY on WpPostConnection {
    nodes {
      id
      uri
      slug
      title
      excerpt
      date(formatString: "DD MMMM YYYY")
      seo {
        readingTime
      }
      featuredImage {
        node {
          altText
          databaseId
          localFile {
            childImageSharp {
              gatsbyImageData
              original {
                height
                src
                width
              }
            }
          }
        }
      }
      categories {
        nodes {
          id
          slug
          name
          uri
        }
      }
      template {
        templateName
      }
      author {
        node {
          name
          slug
          uri
          avatar {
            url
          }
        }
      }
      tags {
        nodes {
          name
          slug
          uri
        }
      }
    }
  }
`
