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
