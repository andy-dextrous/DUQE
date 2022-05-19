import React from "react"
import { useVariable } from "../../../../hooks/useVariable"
import SectionWrapper from "../../../SectionWrapper"
import { FormContext } from "../Context"

function Section({ children }) {
  const { sidebarMenuWidth } = useVariable()
  const { submitted } = React.useContext(FormContext)
  return (
    <SectionWrapper
      h={[
        submitted ? "100vh" : "150vh",
        submitted ? "100vh" : "150vh",
        "130vh",
        "100vh",
      ]}
      width={["100vw", "100vw", "calc(100vw - 100px)"]}
      className="light"
      withContainer={false}
      ml={[0, 0, 0, sidebarMenuWidth]}
      px="0"
    >
      {children}
    </SectionWrapper>
  )
}

export default Section
