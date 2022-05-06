import React from "react"
import SectionWrapper from "../../components/SectionWrapper"
import { graphql, Link } from "gatsby"
import VerticalCard from "../../components/common/VerticalCard"
import { Pagination } from "../../components/archive/Pagination"
import {
  Box,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react"
import StarIcon from "../../assets/icons/StarIcon"
import { Search2Icon } from "@chakra-ui/icons"

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
        <Stack spacing={3} mb={12} align="start" direction="row">
          <InputGroup flex="3">
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
            />
            <Input
              placeholder="Search Blogs"
              bg="#F6F6F6"
              border="1px solid #DEDEDE"
              color="dark.700"
            />
          </InputGroup>

          <Select
            flex="1"
            bg="#F6F6F6"
            border="1px solid #DEDEDE"
            size="lg"
            placeholder="Select Category"
            color="dark.700"
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
