function getBrandColourPallete(THEME_CONFIG) {
  const { brandColours } = THEME_CONFIG
  const colourKeys = Object.entries(brandColours)
  const colourShadeArray = colourKeys.map(key => {
    return [key[0], extractColorRange(key[1])]
  })
  return Object.fromEntries(colourShadeArray)
}

function hexToHSL(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  let r = parseInt(result[1], 16)
  let g = parseInt(result[2], 16)
  let b = parseInt(result[3], 16)

  ;(r /= 255), (g /= 255), (b /= 255)
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h,
    s,
    l = (max + min) / 2

  if (max == min) {
    h = s = 0 // achromatic
  } else {
    let d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  s = s * 100
  s = Math.round(s)
  l = l * 100
  l = Math.round(l)
  h = Math.round(360 * h)

  let colorInHSL = h + "," + s + "," + l

  return colorInHSL
}
function hslToHex(h, s, l) {
  h /= 360
  s /= 100
  l /= 100
  let r, g, b
  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }
  const toHex = x => {
    const hex = Math.round(x * 255).toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function extractColorRange(brandColour) {
  const initialValue = hexToHSL(brandColour)
  const lightness = parseInt(initialValue.split(",")[2])
  const chakraUIMapping = [
    [50, 95],
    [100, 90],
    [200, 80],
    [300, 70],
    [400, 60],
    [500, 50],
    [600, 40],
    [700, 30],
    [800, 20],
    [900, 10],
  ]

  const colorRange = chakraUIMapping.map((shade, i) => {
    if (Math.round(lightness / 10) * 10 === shade[1]) {
      return initialValue
    } else {
      return initialValue.replace(lightness, shade[1])
    }
  })

  const hexValues = colorRange.map(hsl => {
    const ints = hsl?.split(",").map(str => parseInt(str))
    if (!ints) return
    if (ints[2] === lightness) {
      return brandColour.toLowerCase()
    } else {
      return hslToHex(ints[0], ints[1], ints[2])
    }
  })

  const output = hexValues.map((hex, i) => {
    return [chakraUIMapping[i][0], hex]
  })
  output.push(["default", brandColour.toLowerCase()])
  return Object.fromEntries(new Map(output))
}

module.exports = getBrandColourPallete
