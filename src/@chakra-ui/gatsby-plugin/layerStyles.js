export const layerStyles = {
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
  center: { display: "flex", justifyContent: "center", alignItems: "center" },
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
    w: "150%",
    h: "100%",
    zIndex: "1",
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    bg: "linear-gradient(180deg, rgba(11, 11, 11, 0) 32.43%, #0b0b0b 100%),radial-gradient(circle, rgba(11,11,11,0) 0%, rgba(11,11,11,0) 49%, rgba(11,11,11,1) 100%)",
    opacity: 1,
  },

  // radial-gradient(63.13% 139.73% at 36.87% 47.07%, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%);

  blogSidebar: {
    spacing: 3,
    p: 0,
    align: "start",
    flex: 1,
    justify: "start",
    position: "relative",
  },
}
