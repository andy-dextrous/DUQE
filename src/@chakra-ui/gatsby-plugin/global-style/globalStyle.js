//-----------------------------------------------//
// Place all global CSS for every page here //
//-----------------------------------------------//

const globalCSS = {
  body: {
    color: "brandCharcoal.500",
    overflowX: "hidden",
  },
  h1: {
    fontSize: ["3xl", "3xl", "6xl"],
    fontWeight: "bold",
    lineHeight: "110%",
    letterSpacing: "-2%",
    color: "brandBlue.900",
  },
  h2: {
    fontSize: ["xl", "3xl", "3xl", "3xl", "4xl"],
    fontWeight: "bold",
    lineHeight: "shorter",
    letterSpacing: "normal",
    color: "brandBlue.900",
  },
  h3: {
    fontSize: ["xl", "1xl", "2xl", "3xl", "3xl"],
    fontWeight: "bold",
    lineHeight: "shorter",
    letterSpacing: "-2%",
    color: "brandBlue.900",
  },
  h4: {
    fontSize: ["md", "lg", "lg"],
    fontWeight: "semibold",
    lineHeight: "shorter",
    letterSpacing: "wide",
    color: "brandBlue.900",
  },
  h5: {
    fontSize: ["sm", "sm", "md"],
    fontWeight: "semibold",
    lineHeight: "shorter",
    letterSpacing: "wide",
    color: "brandBlue.900",
  },
  p: {
    letterSpacing: "wide",
    fontWeight: "normal",
    color: "gray.600",
    fontSize: ["14px", "14px", "15px", "16px", "16px"],
    lineHeight: "tall",
  },
  span: { color: "gray.600" },
  blockquote: {
    p: 6,
    rounded: "20px",
    bg: "brandGreen.500",
  },
  a: {
    color: "brandGreen.700",
    fontWeight: "medium",
    position: "relative",
  },
  li: {
    listStyle: "none",
  },
  "::selection": {
    backgroundColor: "brandGreen.500",
    color: "brandBlue.900",
  },
  "#navPopup.hidden": {
    display: "none",
  },
  ".stop-scroll": {
    overflow: "hidden",
  },
  ".hero-half-slider": {
    height: "100%",
  },

  ".hero-slider": {
    h: "100%",
    w: "100%",
    position: "relative",
    ".swiper-slide": {
      w: "100%",
    },
  },

  ".hero-half-slider .swiper-slide": {
    maxW: "100vw",
  },
  ".swiper-button-prev": {
    svg: {
      pointerEvents: "none",
    },
  },
  ".swiper-button-next": {
    svg: {
      pointerEvents: "none",
    },
  },
  ".white-svg": {
    path: {
      fill: "white",
    },
  },
  ".wsywyg": {
    ".gatsby-image-wrapper": {
      borderRadius: "0.75rem",
    },
    blockQuote: {
      p: {
        marginBottom: "unset",
      },
    },

    li: {
      listStyle: "unset",
      listStylePosition: "inside",
    },
    img: { borderRadius: "0.75rem", my: [8, 8, 20] },
    h1: {
      marginBottom: "2rem",
      color: "brandBlue.900",
    },
    ul: {
      marginBottom: "2rem",
    },
    h2: {
      fontSize: ["xl", "2xl", "3xl", "3xl", "3xl"],
      fontWeight: "bold",
      lineHeight: "shorter",
      letterSpacing: "normal",
      marginBottom: "2rem",
      color: "brandBlue.900",
    },
    p: {
      marginBottom: "2rem",
    },
    h3: {
      marginBottom: "2rem",
      color: "brandBlue.900",
    },
    h4: {
      marginBottom: "2rem",
      color: "brandBlue.900",
    },
    blockquote: {
      marginBottom: "2rem",
    },
  },
  "#modalLogo": {
    position: "fixed",
    height: ["30vh", "30vh", "40vh", "60vh"],
    right: "0",
    bottom: "0",
    maxW: ["60px", "70px", "unset"],
    svg: {
      width: "100%",
      maxW: "100%",
    },
  },
  "#fp-nav.fp-right ul li": {
    marginTop: ["0.5rem", "0.5rem", "1.3rem"],
  },

  "#fp-nav.fp-right ul li a.active span": {
    background: "var(--tactic-colors-brandYellow-500)",
  },

  "#fp-nav.fp-right ul li a:not(.active) span": {
    backgroundColor: "white",
    transform: "scale(1.5)",
    transformOrigin: "50% 50%",
  },

  ".dark #fp-nav.fp-right ul li a:not(.active) span": {
    backgroundColor: "brandCharcoal.500",
  },
  "#fp-nav": {
    display: ["none", "none", "block"],
  },
  "#footerWrap .fp-tableCell": {
    verticalAlign: "bottom",
  },
  ".titleReveal": {
    overflow: "hidden",
  },
  ".word-wrap": {
    pb: "4px",
  },
  ".primaryMenuLink": {
    transition: "all 0.1s ease-in-out",
    overflowY: "hidden",
    _hover: {
      color: "white",
      transform: "skewX(4deg) translateY(3px)",
    },
  },
  ".subMenuLink": {
    transition: "all 0.1s ease-in-out",
    _hover: {
      color: "white",
      transform: "skewX(4deg) translateY(1.5px)",
    },
  },
  ".pulse.active": {
    transform: "scale(1.5)",
  },
  ".swiper-slide.card": {
    boxShadow:
      "rgba(0, 0, 0, 0.03) 0px 20px 25px -5px, rgba(0, 0, 0, 0.02) 0px 10px 10px -5px",
    borderRadius: "var(--tactic-radii-xl)",
  },
  ".infographic-nav": {
    cursor: "pointer",
  },
  ".hidden": { visibility: "hidden" },
  footer: {
    a: {
      p: {
        transition: "all 0.05s ease",
        _hover: {
          color: "white",
        },
      },
      li: {
        transition: "all 0.05s ease",
        _hover: {
          color: "white",
        },
      },
    },
  },
  "#gatsby-focus-wrapper": {
    outline: "unset !important",
    transform: "unset !important",
  },
}

const globalStyle = {
  global: {
    ...globalCSS,
  },
}

export { globalStyle as styles }
