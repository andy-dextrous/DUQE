import React from "react"
import SectionWrapper from "../../components/SectionWrapper"
import { graphql, Link } from "gatsby"
import VerticalCard from "../../components/common/VerticalCard"
import SearchToggle from "../../components/search/SearchToggle"
import { Pagination } from "../../components/archive/Pagination"
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Wrap,
} from "@chakra-ui/react"
import StarIcon from "../../assets/icons/StarIcon"

function PostGrid({
  posts,
  ctx,
  categories,
  currentSlug,
  title = "Categories",
}) {
  return (
    <SectionWrapper minH="auto" id="post-grid" mb={[0, 0, 40]}>
      <Container h="100%" maxW={["container.lg", "container.lg", "100%"]}>
        <VStack spacing={3} mb={12} align="start">
          {title && (
            <Heading
              as="h3"
              pb={4}
              fontSize={["xl", "xl", "2xl", "3xl", "3xl"]}
            >
              {title}
            </Heading>
          )}
          <Wrap>
            <Link to="/insights/">
              <Button
                color="brandBlue.900"
                fontSize={["10px", "10px", "sm"]}
                variant="pill"
                borderColor={!currentSlug ? "gray.500" : "none"}
              >
                All
              </Button>
            </Link>
            {categories.map(cat => {
              return (
                <Link to={cat.node.uri} key={cat.node.id}>
                  <Button
                    color="brandBlue.900"
                    variant="pill"
                    fontSize={["10px", "10px", "sm"]}
                    borderColor={
                      currentSlug === cat.node.slug ? "gray.500" : "none"
                    }
                  >
                    {cat.node.name}
                  </Button>
                </Link>
              )
            })}
            <SearchToggle />
          </Wrap>
        </VStack>
        <SimpleGrid as="ul" columns={{ base: 1, lg: 2 }} spacing={[24, 24, 40]}>
          {posts.map(post => {
            return (
              <Link to={post.uri} key={post.id}>
                <Box position="relative">
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
        <Pagination ctx={ctx} anchor="#post-grid" />
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
