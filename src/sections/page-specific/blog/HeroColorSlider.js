import React from "react"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import FullWColorSlider from "../../../components/sliders/FullWColorSlider"

function HeroColorSlider() {
  const data = [
    {
      title: "Office Design Trends",
      subTitle: "Category",
      image:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/q_auto:eco/v1643249756/armchair.png",
      excerpt: "Our award-winning interior designers bring your vision to life",
      bg: "yellow",
      path: "/services/interior-design",
    },
    {
      title: "Productivity Boosters",
      subTitle: "Category",
      image:
        "https://res.cloudinary.com/andrew-scrivens-guitar-lessons/image/upload/v1641523542/plant.png",
      excerpt:
        "Improving your team's overall productivity doesn't need to be difficult with the goal of constant 1% gains",
      bg: "green",
      path: "/services/leasing",
    },
    {
      title: "Ergonomics",
      subTitle: "Category",
      image:
        "https://andrews177.sg-host.com/wp-content/uploads/2022/02/Herman-Miller-1.png",
      excerpt: "We fit out your office",
      bg: "chestnut",
      path: "/services/fitouts",
    },
  ]

  const sliderHeight = 65

  return (
    <SectionWrapper
      fullW
      isFirstSection
      p={0}
      m={0}
      h={["auto", "auto", `auto`]}
      minH="unset"
      className="white-bg"
      overflow="visible"
      _before={{
        content: "''",
        width: { base: "58vw", "2xl": "60vw" },
        height: "100%",
        bg: "brandBlue.900",
        position: "absolute",
        left: "0",
        top: "0",
        borderBottomRightRadius: "200",
        zIndex: "-2",
        display: ["none", "none", "block"],
      }}
    >
      <FullWColorSlider data={data} sliderHeight={sliderHeight} />
    </SectionWrapper>
  )
}

export default HeroColorSlider
