import { useEffect } from "react"

export default function useStopScroll(bool) {
  useEffect(() => {
    const body = document.querySelector("body")
    bool
      ? body.classList.add("stop-scroll")
      : body.classList.remove("stop-scroll")
  }, [bool])
}
