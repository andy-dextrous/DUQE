import { useEffect, useContext } from "react"
import { SmoothContext } from "../components//SmoothWrapper"

export default function useStopScroll(bool) {
  const smootherInstance = useContext(SmoothContext)

  useEffect(() => {
    if (!smootherInstance) return
    smootherInstance.paused(bool ? true : false)
  }, [bool, smootherInstance])

  useEffect(() => {
    const body = document.querySelector("body")
    bool
      ? body.classList.add("stop-scroll")
      : body.classList.remove("stop-scroll")
  }, [bool])
}
