// Presets are called layers in chakra-ui.
// To apply a preset/layer ---> <Heading as:"h1" layerStyle:'base'>

const layerStyles = {
  fillSpaceAbsolute: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
  },
  fillSpace: {
    width: "100%",
    height: "100%",
  },
  section: {
    w: "100vw",
    h: "100vh",
    maxW: "100vw",
    overflowX: "hidden",
    position: "relative",
  },
  bgImage: {
    w: "100%",
    h: "100%",
    position: "absolute",
    zIndex: "-2",
    left: "0",
    top: "0",
    objectFit: "cover",
  },
  overlay: {
    w: "100%",
    h: "100%",
    opacity: "0.3",
    zIndex: "-1",
    position: "absolute",
    top: "0",
    left: "0",
  },
  hotSpotButton: {
    width: "20px",
    height: "20px",
    bg: "brandYellow.600",
    zIndex: "2",
    rounded: "full",
    boxShadow: "sm",
    transition: "transform 0.25s ease-in-out",
    cursor: "pointer",
    _hover: {
      transform: "scale(1.5)",
    },

    "&:after": {
      content: "''",
      width: "260%",
      height: "260%",
      left: "-80%",
      top: "-80%",
      position: "absolute",
      background: "brandYellow.500",
      zIndex: "1",
      borderRadius: "full",
      opacity: 0.1,
    },
  },
  serviceHeader: {
    overflow: "visible",
    p: 0,
    m: 0,
    h: ["auto", "auto", `auto`],
    minH: "unset",
    _before: {
      content: "''",
      width: { base: "58vw", "2xl": "60vw" },
      height: "100vh",
      position: "absolute",
      left: "0",
      top: "0",
      borderBottomRightRadius: "200",
      zIndex: "-2",
      display: ["none", "none", "block"],
    },
    "&.green": {
      _before: {
        bg: "brandGreen.600",
      },
      h4: {
        color: "white",
      },
      h2: {
        color: ["unset", "unset", "brandBlue.900"],
      },
      ".fadeTextLeft": {
        color: "brandGreen.300",
      },
      p: {
        color: "brandBlue.900",
      },
    },
    "&.yellow": {
      _before: {
        bg: "brandYellow.600",
      },
      h4: {
        color: ["white", "white", "brandBlue.900"],
      },
      h2: {
        color: ["unset", "unset", "brandBlue.900"],
      },
      ".fadeTextLeft": {
        color: "brandYellow.200",
      },
      p: {
        color: "brandBlue.900",
      },
    },
    "&.chestnut": {
      _before: {
        bg: "brandChestnut.400",
      },
      h4: {
        color: "white",
      },
      h2: {
        color: ["unset", "unset", "brandBlue.900"],
      },

      p: {
        color: "brandBlue.900",
      },
    },
    "&.blue": {
      _before: {
        bg: "brandBlue.900",
      },
      ".fadeTextLeft": {
        opacity: "0.02",
      },
      h4: {
        color: ["white", "white", "brandGreen.500"],
      },
      h2: {
        color: ["unset", "unset", "brandGreen.500"],
      },

      p: {
        color: ["unset", "unset", "white"],
      },
    },
    mb: [0, 0, 20, 20, 30, 40],
  },
  blogSidebar: {
    spacing: 3,
    p: 0,
    align: "start",
    flex: 1,
    justify: "start",
    position: "relative",
  },
}

export { layerStyles }
