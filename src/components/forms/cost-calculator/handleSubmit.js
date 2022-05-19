import axios from "axios"
import Cookies from "js-cookie"

export default function handleSubmit(e, answers, setSubmitted) {
  e.preventDefault()
  const isBrowser = typeof window !== "undefined"
  const hutk = isBrowser ? Cookies.get("hubspotutk") : null
  const pageUri = isBrowser ? window.location.href : null
  const body = {
    submittedAt: Date.now(),
    fields: answers.map(answer => {
      return {
        name: answer.handle,
        value:
          typeof answer.answer === "string"
            ? answer.answer
            : answer.answer.join(", "),
      }
    }),
    context: {
      hutk,
      pageUri,
    },
  }

  const data = JSON.stringify(body)
  const config = {
    method: "post",
    url: process.env.GATSBY_COST_CALCULATOR_ENDPOINT,
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
