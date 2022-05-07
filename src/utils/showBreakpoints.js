import { breakpoints } from "../@chakra-ui/gatsby-plugin/foundations/breakpoints"

export const showBreakpoints = bool => {
  if (bool) {
    for (let key in breakpoints) {
      console.log(`${key}: ${breakpoints[key]}`)

      const marker = document.createElement("div")
      marker.style.position = "fixed"
      marker.style.top = 0
      marker.style.left = breakpoints[key]
      marker.style.color = "red"
      marker.style.fontSize = "1rem"
      marker.style.borderLeft = "1px solid red"
      marker.style.paddingLeft = "0.5rem"
      marker.innerHTML = key
      marker.classList.add("breakpoint")
      document.body.appendChild(marker)
    }
  } else {
    const markers = document.querySelectorAll(".breakpoint")
    markers.forEach(marker => marker.remove())
  }
}
