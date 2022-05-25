import React, { useEffect } from "react"

const HubspotContactForm = props => {
  const { region, portalId, formId } = props
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://js.hsforms.net/forms/v2.js"
    document.body.appendChild(script)
    console.log(script)

    script.addEventListener("load", () => {
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: { region },
          portalId: { portalId },
          formId: { formId },
          target: "#hubspotForm",
        })
      }
    })
  }, [])

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  )
}

export default HubspotContactForm
