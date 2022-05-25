import { Box } from "@chakra-ui/react"
import React, { useEffect, useRef } from "react"
import { getParams } from "../../utils/getParams"

const HubSpotForm = props => {
  const form = useRef()
  const { region, portalId, formId, ...styles } = props

  useEffect(() => {
    const script = document.createElement("script")
    script.setAttribute("type", "text/javascript")
    script.src = "https://js.hsforms.net/forms/v2.js"
    document.body.appendChild(script)

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: "#hubspotForm",
        })
      }
    })
  }, [])

  return (
    <Box {...styles}>
      <Box id="hubspotForm" ref={form}></Box>
    </Box>
  )
}

export default HubSpotForm
