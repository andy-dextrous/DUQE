const textStyles = {
  h1: {
    fontSize: ["xl", "2xl", "6xl"],
    fontWeight: "bold",
    lineHeight: "110%",
    letterSpacing: "-2%",
  },
  h2: {
    fontSize: ["lg", "3xl", "4xl", "4xl"],
    fontWeight: "bold",
    lineHeight: "shorter",
    letterSpacing: "normal",
  },
  h3: {
    fontSize: ["xl", "1xl", "2xl", "3xl"],
    fontWeight: "bold",
    lineHeight: "shorter",
    letterSpacing: "-2%",
  },
  h4: {
    fontSize: ["md", "lg", "lg"],
    fontWeight: "semibold",
    lineHeight: "shorter",
    letterSpacing: "wide",
  },
  jumboHeading: {
    fontSize: ["4xl", "5xl", "65px"],
    fontWeight: "bold",
    lineHeight: "110%",
    letterSpacing: "-2%",
  },
  subTitle: {},
  featuredParagraph: {
    fontWeight: "medium",
    fontSize: "18px",
    pb: 6,
  },
  blockquote: {
    p: 6,
    rounded: "20px",
    bg: "brandGreen.500",
  },
  fadeTextLeft: {
    color: "gray.100",
    position: "absolute",
    opacity: "0.5",
    zIndex: "-1",
    top: ["-15vw", "-15vw", "-7vw"],
    left: ["-9vw", "-9vw", "-3vw"],
    fontSize: "220px",
    display: ["none", "none", "block"],
  },
  fadeTextCenter: {
    color: "brandGreen.300",
    position: "absolute",
    opacity: ["0.6", "0.6", "0.4"],
    zIndex: "-1",
    left: 0,
    fontSize: ["50px", "15vw", "100px", "160px", "200px", "220px"],
    fontWeight: ["extrabold", "extrabold", "extrabold", "bold"],
    justifyContent: "space-between",
    w: "100%",
    px: ["5%", "4%", "9%"],
    top: ["3%", "3%", "50px", "0"],
    textTransform: "uppercase",
  },
  fadeTextCenterGreen: {
    color: "brandGreen.200",
    position: "absolute",
    opacity: ["0.6", "0.6", "0.5"],
    zIndex: "-1",
    left: 0,
    fontSize: ["50px", "15vw", "100px", "160px", "200px", "220px"],
    fontWeight: ["extrabold", "extrabold", "extrabold", "bold"],
    justifyContent: "space-between",
    w: "100%",
    px: ["5%", "4%", "9%"],
    top: ["30px", "30px", "50px", "0", "-2%", "-5%"],
    textTransform: "uppercase",
  },
  primaryMenuLink: {
    fontWeight: "bold",
    color: "brandBlue.900",
    fontSize: ["xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
    textAlign: "left",
  },
  subMenuLink: {
    fontWeight: "medium",
    color: "brandBlue.900",
    fontSize: ["md", "md", "xl"],
    textAlign: "left",
  },
  metaTextSmall: {
    fontSize: "sm",
    color: "gray.400",
    fontWeight: "normal",
  },
}

export default textStyles
