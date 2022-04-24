import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
} from "react"
import { Link } from "gatsby"
import { gsap, SplitText } from "../../gsap"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { MenuContext } from "../Layout"
import SectionWrapper from "../SectionWrapper"
import { VStack, Text, Heading, Stack, Box, Center } from "@chakra-ui/react"
import { SocialFollows } from "../social/SocialFollows"

function Modal() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)
  const [isActive, setIsActive] = useState(false)
  const primaryMenu = useMenuQuery("Primary")
  const subMenu = useMenuQuery("Secondary")
  const menuWrapper = useRef()
  const menuSection = useRef()
  const primaryMenuLinks = useRef()
  const primaryLinkSplit = useRef()
  const subMenuRef = useRef()
  const subLinkSplit = useRef()
  const headingRef1 = useRef()
  const headingRef2 = useRef()
  const logoRef = useRef()
  const openingTimeline = useRef(null)

  useEffect(() => {
    const height = window.innerHeight
    gsap.set(menuWrapper.current, { height: `${height}px` })
  }, [])

  useLayoutEffect(() => {
    if (!primaryLinkSplit.current) {
      const q = gsap.utils.selector(primaryMenuLinks.current)
      primaryLinkSplit.current = new SplitText(q("p"), {
        type: "lines,words",
        linesClass: "titleReveal",
      })
    }

    if (!subLinkSplit.current) {
      const r = gsap.utils.selector(subMenuRef.current)
      subLinkSplit.current = new SplitText(r("p"), {
        type: "lines,words",
        linesClass: "titleReveal",
      })
    }
  }, [])

  useLayoutEffect(() => {
    if (openingTimeline?.current) return

    const tl = gsap
      .timeline({
        immediateRender: false,
        onStart: () => {
          setIsActive(true)
        },
        onReverseComplete: () => {
          setIsActive(false)
        },
      })
      .set(
        [
          primaryLinkSplit.current,
          headingRef1.current,
          headingRef2.current,
          subLinkSplit.current,
        ],
        { autoAlpha: 0 },
        { autoAlpha: 0 }
      )
      .fromTo(
        [menuWrapper.current],
        {
          height: 0,
          skewY: 6,
        },
        {
          ease: "Power3.out",
          duration: 0.2,
          skewY: 0,
          height: "100%",
          transformOrigin: "right top",
        }
      )
      .fromTo(
        [headingRef1.current, primaryLinkSplit.current.lines],
        {
          y: 50,
          autoAlpha: 0,
        },
        {
          y: 0,
          stagger: 0.05,
          duration: 0.1,
          autoAlpha: 1,
          ease: "Power3.out",
        },
        0.1
      )
      .fromTo(
        [headingRef2.current, subLinkSplit.current.lines],
        {
          y: 50,
          autoAlpha: 0,
        },
        {
          y: 0,
          stagger: 0.05,
          duration: 0.08,
          autoAlpha: 1,
          ease: "Power3.ut",
        },
        0.1
      )
      .from(
        logoRef.current,
        {
          y: 40,
          autoAlpha: 0,
          duration: 0.5,
          ease: "Power3.out",
        },
        0.3
      )
    openingTimeline.current = tl
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      openingTimeline.current.play()
    } else {
      openingTimeline.current.reverse()
    }
  }, [isMenuOpen])

  return (
    <SectionWrapper
      zIndex="modal"
      position="fixed"
      fullW
      left="0"
      top="0"
      ml="0"
      width="100%"
      h="100%"
      minH="100%"
      className={!isActive ? "hidden" : ""}
      id="navPopup"
      py={[0, 0, 0]}
      overflow="hidden"
      ref={menuSection}
    >
      <Center
        bg="brandGreen.600"
        p={0}
        layerStyle="fillSpace"
        _before={{
          content: "''",
          width: ["90vw", "90vw", "80vw", "55vw"],
          h: "100%",
          bg: "brandGreen.500",
          opacity: 0.5,
          position: "absolute",
          left: "0",
          top: "0",
          borderBottomRightRadius: "200",
          zIndex: "-2",
        }}
        ref={menuWrapper}
      >
        <Stack
          direction={["column", "column", "column", "row"]}
          justify={["center", "center", "space-between"]}
          align={["center", "center", "center"]}
          py={[16, 8, 24]}
          px={[0, 0, 40]}
          h="100%"
          w={{ base: "100%", "2xl": "80%" }}
          m="auto"
        >
          <VStack
            as="nav"
            align="start"
            flex={["3", "2", "2", "2", "2", "3"]}
            spacing={[4, 8, 8, 12]}
            p={[8, 8, 12, 8, 16, 0]}
            justify="center"
            w="100%"
            h="100%"
          >
            <Heading
              as="h4"
              fontSize="14px"
              textTransform="uppercase"
              letterSpacing="widest"
              color="white"
              mt={[4, 4, 0]}
              ref={headingRef1}
            >
              Services
            </Heading>
            <VStack
              spacing={[2, 4]}
              align="start"
              pl={[8, 8, 0]}
              ref={primaryMenuLinks}
            >
              {primaryMenu.menuItems.nodes.map(item => {
                return (
                  <Link
                    key={item.databaseId}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Text
                      textStyle="primaryMenuLink"
                      className="primaryMenuLink"
                    >
                      {item.label}
                    </Text>
                  </Link>
                )
              })}
            </VStack>
          </VStack>
          <VStack
            as="nav"
            align="start"
            justify={["start", "start", "center"]}
            flex={["5", "5", "5", "1"]}
            spacing={[4, 8, 8, 12]}
            px={[8, 8, 12, 16, 20]}
            py={[0, 8, 12, 16, 20]}
            layerStyle="fillSpace"
          >
            <Heading
              as="h4"
              fontSize="14px"
              textTransform="uppercase"
              letterSpacing="widest"
              color="white"
              ref={headingRef2}
            >
              Navigate
            </Heading>
            <VStack pl={[8, 8, 0]} align="start" ref={subMenuRef}>
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
            <Box display={["none", "none", "block"]}>
              <SocialFollows />
            </Box>
          </VStack>
        </Stack>
      </Center>
    </SectionWrapper>
  )
}

export default Modal
