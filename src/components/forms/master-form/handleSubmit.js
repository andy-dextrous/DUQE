import axios from "axios"
import Cookies from "js-cookie"
import { getParams } from "../../../utils/getParams"

export default function handleSubmit(e, fields, setSubmitted) {
  e.preventDefault()
  const isBrowser = typeof window != "undefined"
  const hutk = isBrowser ? Cookies.get("hubspotutk") : null
  const pageUri = isBrowser ? window.location.href : null
  const allFields = [...fields]

  const hiddenFields = getParams("campaignUrl")
  hiddenFields.forEach(field => {
    allFields.push({ name: getIdentifier(field.name), value: field.value })
  })

  allFields.push({ name: "web_to_lead_url__c", value: window.location.href })

  function getIdentifier(value) {
    switch (value) {
      case "utm_source":
        return "utm_source__c"
      case "utm_campaign":
        return "utm_campaign__c"
      case "utm_term":
        return "utm_term__c"
      case "utm_medium":
        return "utm_medium__c"
      case "fbclid":
        return "facebook_click_id__c"
      case "gclid":
        return "gclid__c"
      default:
        return value
    }
  }

  const body = {
    submittedAt: Date.now(),
    fields: allFields,
    context: {
      hutk,
      pageUri,
    },
  }

  const data = JSON.stringify(body)
  console.log(data)
  const config = {
    method: "post",
    url: process.env.GATSBY_MASTER_FORM_ENDPOINT,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  }

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
      setSubmitted(true)
    })
    .catch(function (error) {
      alert(error)
    })
}
