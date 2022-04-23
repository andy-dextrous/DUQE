import { Stack } from "@chakra-ui/react"
import React from "react"
import SectionWrapper from "../../../components/layouts/SectionWrapper"
import Card from "./Card"
import columnData from "./columnData"
import { useOutsideClick } from "@chakra-ui/react"

function ColumnReveal() {
  const [activePanel, setActivePanel] = React.useState()
  const container = React.useRef()

  function handleClick(e, i) {
    if (e.target.tagName === "BUTTON") return
    i === activePanel ? setActivePanel(null) : setActivePanel(i)
  }

  useOutsideClick({
    ref: container,
    handler: () => setActivePanel(null),
  })

  return (
    <SectionWrapper
      h="unset"
      pt={0}
      pb={0}
      px={4}
      sx={{
        "*": { transition: "all 0.3s ease-in-out", transformOrigin: "50% 50%" },
      }}
      _before={{
        content: "''",
        width: "100%",
        height: "50%",
        position: "absolute",
        left: "0",
        top: "0",
        borderBottomLeftRadius: ["100", "100", "200"],
        bg: "brandBlue.900",
      }}
    >
      <Stack
        direction={["column", "column", "row"]}
        h="80vh"
        spacing={0}
        pt={0}
        rounded="2xl"
        overflow="hidden"
        zIndex={2}
        ref={container}
      >
        {columnData.map((col, i) => {
          return (
            <Card
              handleClick={handleClick}
              activePanel={activePanel}
              id={i + 1}
              label={{ subtitle: `Step ${i + 1}`, title: col.title }}
              data={col}
            />
          )
        })}
      </Stack>
    </SectionWrapper>
  )
}

export default ColumnReveal
