import { useEffect, useContext } from "react"
import { SmoothContext } from "../components//SmoothWrapper"

export default function useStopScroll(bool) {
  const smootherInstance = useContext(SmoothContext)

  useEffect(() => {
    if (!smootherInstance) return
    smootherInstance.paused(bool ? true : false)
  }, [bool, smootherInstance])

  useEffect(() => {
    if (smootherInstance) return
    const body = document.querySelector("body")
    if (bool) {
      // timeout masks the visible layout shift from overflow hidden on body
      setTimeout(() => {
        body.classList.add("stop-scroll")
      }, 270)
    } else {
      body.classList.remove("stop-scroll")
    }
  }, [bool])
}
