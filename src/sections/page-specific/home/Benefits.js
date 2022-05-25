import React, { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "../../../gsap"
import { useVariable } from "../../../hooks"

import SectionWrapper from "../../../components/SectionWrapper"
import YellowHeading from "../../../components/common/YellowHeading"
import CorporateServices from "./CorporateServices"
import CrossIcon from "../../../assets/icons/CrossIcon"
import { Heading, VStack } from "@chakra-ui/react"

function Benefits() {
  const cross = useRef()
  const { containerPaddingY, sidebarMenuWidth, sectionPaddingX } = useVariable()
  const data = [
    {
      title: "Accounting",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1650947182/DUQE/Rectangle_21.png",
      text: "Sorting out your invoices, receipts, payable and more can be a headache when you’ve got a business to run. If you need an expert to take care of your accounting, our accountants are here to lessen your burden as an entrepreneur. ",
    },
    {
      title: "VAT Registration",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1650940026/DUQE/Rectangle_15.png",
      text: "We have a team specialising in the UAE’s VAT rules and regulations who can help you understand the VAT policies applicable to your business. If your business meets the criteria, our team can also help you to register your business for VAT. ",
    },
    {
      title: "Bank Account Opening ",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651111950/DUQE/About_Us.png",
      text: "Opening a bank account for your business can be a swift and easy process with our banking specialists to assist you. From helping you choose the bank that best suits your business requirements, to guiding you through the requirements and steps, our team will be with you every step of the way.",
    },
    {
      title: "Medical & Emirates ID",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto/v1651118247/DUQE/Corporate_Services.png",
      text: "What sets us apart from other business zones is that we have our own facilities for medical fitness tests and Emirates ID typing, so you can conveniently get it all done in one place. Save time, deal with less hassle and get more done with DUQE. ",
    },
    {
      title: "Health Insurance",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto,w_1080/v1651912082/DUQE/Agency_7_GS.jpg",
      text: " Our accountants will sort out your invoices, receipts, payments,etc. and make sure your financial records are maintained per international standards, so you have one less thing to worry about.",
    },
    {
      title: "Business Centre",
      iconUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1650950415/DUQE/accounting.svg",
      imgUrl:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/c_scale,q_auto,w_1080/v1651912101/DUQE/Agency_charlesdeluvio-Lks7vei-eAg-unsplash.jpg",
      text: "We offer a variety of flexible workspaces and you’re free to choose and book the one that suits you best – from flexi and dedicated desks, to private offices and meeting rooms.",
    },
  ]

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        gsap.to(cross.current, {
          x: -10,
          y: 20,
          rotation: 30,
          ease: "linear",
          scrollTrigger: {
            trigger: cross.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      },
      "(max-width: 767px)": function () {
        gsap.to(cross.current, {
          rotation: 30,
          ease: "linear",
          scrollTrigger: {
            trigger: cross.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      },
    })
  }, [])

  return (
    <SectionWrapper
      className="light"
      withContainer={false}
      flexDirection="column"
      pt={containerPaddingY}
      align="center"
      px={sectionPaddingX}
      _before={{
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "calc(100% - 250px)",
        zIndex: "-2",
        bg: "brandConcrete.default",
      }}
    >
      <VStack
        spacing={[8, 8, 12]}
        mb={20}
        ml={[0, 0, sidebarMenuWidth]}
        w="full"
        maxW="container.lg"
      >
        <Heading className="jumbo">
          Business setup with <YellowHeading>Benefits</YellowHeading>
        </Heading>
        <Heading as="h3" className="thin-h3">
          Keep your head in the game while we take care of the small stuff with
          our complete spectrum of value-added services that make sure you focus
          on what matters.
        </Heading>
      </VStack>
      <CrossIcon
        top={["20%", "20%", "28%"]}
        left="-10%"
        width={[200, 200, 500]}
        outline
        color="white"
        position="absolute"
        opacity={[0.6, 0.6, 1]}
        zIndex="-1"
        ref={cross}
      />
      <CorporateServices data={data} />
    </SectionWrapper>
  )
}

export default Benefits
