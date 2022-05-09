import React, { useContext, useEffect, useRef, useLayoutEffect } from "react"
import { Link } from "gatsby"
import { gsap, ScrollTrigger } from "../../gsap"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { MenuContext } from "../Layout"
import { Search2Icon } from "@chakra-ui/icons"
import { SocialFollows } from "../social/SocialFollows"
import { useVariable } from "../../hooks"
import {
  VStack,
  Text,
  Heading,
  Stack,
  Center,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react"

function Modal() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)
  const { sectionPaddingX, mobileNavHeight } = useVariable()
  const primaryMenu = useMenuQuery("Primary")
  const subMenu = useMenuQuery("Secondary")
  const menuWrapper = useRef()
  const primaryMenuLinks = useRef()
  const subMenuRef = useRef()
  const navAnimation = useRef(null)

  useLayoutEffect(() => {
    if (!ScrollTrigger) return
    const tl = gsap.timeline({ paused: true })
    tl.fromTo(
      menuWrapper.current,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        ease: "expo.inOut",
      }
    )
    navAnimation.current = tl
  }, [])

  useEffect(() => {
    if (!navAnimation.current) return
    if (isMenuOpen) {
      navAnimation.current.play()
    } else {
      navAnimation.current.reverse()
    }
  }, [isMenuOpen])

  return (
    <Flex
      as="nav"
      px={sectionPaddingX}
      pt={mobileNavHeight}
      h="100vh"
      w="100vw"
      justify="center"
      zIndex="modal"
      position="fixed"
      visibility="hidden"
      left="0"
      top="0"
      overflow={["scroll", "scroll", "hidden"]}
      bg="rgba(11,11,11,.95)"
      sx={{ "backdrop-filter": "blur(10px)" }}
      id="navPopup"
      ref={menuWrapper}
    >
      <Box w="full" maxW="container.xl" h={["auto", "auto", "auto", "full"]}>
        <Center p={0} w="full" h={["auto", "auto", "auto", "full"]}>
          <Stack
            w="full"
            direction={["column", "column", "column", "row"]}
            justify={["center", "center", "space-between"]}
            align={["center", "center", "center"]}
            py={[16, 8, 24]}
            px={[8, 8, 0]}
            m="auto"
          >
            <VStack
              as="nav"
              w="full"
              align="flex-start"
              spacing={[4, 8, 8, 12]}
              p={[0, 0, 12, 8, 16, 0]}
              justify="center"
              flex={[4]}
            >
              <VStack
                spacing={[2, 2, 20]}
                align="start"
                pl={[0, 0, 0]}
                ref={primaryMenuLinks}
              >
                {primaryMenu.menuItems.nodes.map(item => {
                  return (
                    <Link
                      key={item.databaseId}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Text className="primaryMenuLink">{item.label}</Text>
                    </Link>
                  )
                })}
              </VStack>
            </VStack>
            <VStack
              as="nav"
              w="full"
              align="flex-start"
              justify={["flex-start", "flex-start", "flex-start"]}
              flex={[3, 3, 2]}
              spacing={[4, 4, 8, 12]}
              px={[0, 0, 12, 16, 20]}
              py={[0, 8, 12, 16, 20]}
            >
              <VStack
                pl={[0]}
                align="flex-start"
                ref={subMenuRef}
                spacing={[4, 4, 16]}
              >
                {subMenu.menuItems.nodes.map(item => {
                  return (
                    <Link
                      key={item.databaseId}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Text textStyle="subMenuLink" className="subMenuLink">
                        {item.label}
                      </Text>
                    </Link>
                  )
                })}
              </VStack>
            </VStack>
            <VStack flex="1" spacing={12} align="flex-start" w="full">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Search2Icon color="dark.400" />}
                />
                <Input
                  variant="filled"
                  placeholder="Search site"
                  color="dark.400"
                  _focus={{ bg: "white" }}
                />
              </InputGroup>
              <VStack align="flex-start" pb={[20, 20, 0]}>
                <Text color="dark.400">Other links</Text>
                <Text color="white" fontWeight="bold">
                  Privacy policy
                </Text>
                <Text color="white" fontWeight="bold">
                  Terms & conditions
                </Text>
                <Text color="white" fontWeight="bold">
                  Support
                </Text>
                <Text color="white" fontWeight="bold">
                  Contact Us
                </Text>
                <Divider py={8} />
                <SocialFollows
                  direction="row"
                  button
                  variant="circle"
                  py={12}
                />
                <VStack
                  bg="brandYellow.default"
                  p={8}
                  rounded="2xl"
                  align="flex-start"
                >
                  <Heading as="h4">Cost Calculator</Heading>
                  <Button>Cost calculator</Button>
                </VStack>
              </VStack>
            </VStack>
          </Stack>
        </Center>
        <Image
          src="https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1651118245/DUQE/Corp_Q.svg"
          position="absolute"
          top="0"
          left="0"
          zIndex="-1"
          opacity="30%"
        />
      </Box>
    </Flex>
  )
}

export default Modal
