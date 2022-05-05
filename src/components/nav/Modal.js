import React, {
  useContext,
  // useEffect,
  useRef,
  // useState,
  // useLayoutEffect,
} from "react"
import { Link } from "gatsby"
// import { gsap, SplitText } from "../../gsap"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { MenuContext } from "../Layout"
import SectionWrapper from "../SectionWrapper"
import {
  VStack,
  Text,
  // Heading,
  Stack,
  // Box,
  Center,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
  Heading,
  Button,
} from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import { SocialFollows } from "../social/SocialFollows"
// import { SocialFollows } from "../social/SocialFollows"
// import useRgba from "../../hooks/useRgba"

function Modal() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)
  // const [isActive, setIsActive] = useState(false)
  const primaryMenu = useMenuQuery("Primary")
  const subMenu = useMenuQuery("Secondary")
  const menuWrapper = useRef()
  const menuSection = useRef()
  const primaryMenuLinks = useRef()
  const subMenuRef = useRef()

  // const headingRef1 = useRef()
  // const headingRef2 = useRef()

  // const openingTimeline = useRef(null)

  // useEffect(() => {
  //   const height = window.innerHeight
  //   gsap.set(menuWrapper.current, { height: `${height}px` })
  // }, [])

  // useLayoutEffect(() => {
  //   if (!primaryLinkSplit.current) {
  //     const q = gsap.utils.selector(primaryMenuLinks.current)
  //     primaryLinkSplit.current = new SplitText(q("p"), {
  //       type: "lines,words",
  //       linesClass: "titleReveal",
  //     })
  //   }

  //   if (!subLinkSplit.current) {
  //     const r = gsap.utils.selector(subMenuRef.current)
  //     subLinkSplit.current = new SplitText(r("p"), {
  //       type: "lines,words",
  //       linesClass: "titleReveal",
  //     })
  //   }
  // }, [])

  // useLayoutEffect(() => {
  //   if (openingTimeline?.current) return

  //   const tl = gsap
  //     .timeline({
  //       immediateRender: false,
  //       onStart: () => {
  //         setIsActive(true)
  //       },
  //       onReverseComplete: () => {
  //         setIsActive(false)
  //       },
  //     })
  //     .set(
  //       [
  //         primaryLinkSplit.current,
  //         headingRef1.current,
  //         headingRef2.current,
  //         subLinkSplit.current,
  //       ],
  //       { autoAlpha: 0 },
  //       { autoAlpha: 0 }
  //     )
  //     .fromTo(
  //       [menuWrapper.current],
  //       {
  //         height: 0,
  //         skewY: 6,
  //       },
  //       {
  //         ease: "Power3.out",
  //         duration: 0.2,
  //         skewY: 0,
  //         height: "100%",
  //         transformOrigin: "right top",
  //       }
  //     )
  //     .fromTo(
  //       [headingRef1.current, primaryLinkSplit.current.lines],
  //       {
  //         y: 50,
  //         autoAlpha: 0,
  //       },
  //       {
  //         y: 0,
  //         stagger: 0.05,
  //         duration: 0.1,
  //         autoAlpha: 1,
  //         ease: "Power3.out",
  //       },
  //       0.1
  //     )
  //     .fromTo(
  //       [headingRef2.current, subLinkSplit.current.lines],
  //       {
  //         y: 50,
  //         autoAlpha: 0,
  //       },
  //       {
  //         y: 0,
  //         stagger: 0.05,
  //         duration: 0.08,
  //         autoAlpha: 1,
  //         ease: "Power3.ut",
  //       },
  //       0.1
  //     )
  //     .from(
  //       logoRef.current,
  //       {
  //         y: 40,
  //         autoAlpha: 0,
  //         duration: 0.5,
  //         ease: "Power3.out",
  //       },
  //       0.3
  //     )
  //   openingTimeline.current = tl
  // }, [])

  // useEffect(() => {
  //   if (isMenuOpen) {
  //     openingTimeline.current.play()
  //   } else {
  //     openingTimeline.current.reverse()
  //   }
  // }, [isMenuOpen])

  return (
    <SectionWrapper
      id="navPopup"
      zIndex="modal"
      position="fixed"
      left="0"
      top="0"
      ml="0"
      h="100vh"
      bg="dark.default"
      visibility={isMenuOpen ? "visible" : "hidden"}
      containerSize="xl"
      containerStyles={{ py: "100px" }}
      overflow={["scroll", "scroll", "hidden"]}
      ref={menuSection}
    >
      <Center p={0} minH="100%" w="auto" ref={menuWrapper}>
        <Stack
          direction={["column", "column", "column", "row"]}
          justify={["center", "center", "space-between"]}
          align={["center", "center", "center"]}
          py={[16, 8, 24]}
          px={[8, 8, 0]}
          h="100%"
          w="100%"
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
                variant="flushed"
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
              <SocialFollows direction="row" button variant="circle" py={12} />
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
    </SectionWrapper>
  )
}

export default Modal
