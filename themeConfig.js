/**** GLOBAL DESIGN VARIABLES ARE PULLED INTO CHAKRA FROM HERE ****/

const THEME_CONFIG = {
  /**** COLORS ****/
  brandColors: {
    brandYellow: "#E0DB2A",
    brandBlue: "#62C6C1",
    brandConcrete: "#C9C8BA",
    dark: "#0B0B0B",
  },

  /**** SPACING ****/
  sectionPaddingY: [0],
  sectionPaddingX: [5, 5, 12, 20, 24, 40, "200px"],
  containerPaddingY: [20, 20, 32, 48, 60],
  containerPaddingX: [0],
  componentSpacing: [8, 8, 8, 8, 8, 10, 12],

  /**** NAV ****/
  sidebarMenuWidth: "100px",
  topBarHeight: "115px",
  mobileNavHeight: ["70px", "70px", 0],

  /**** FOOTER ****/
  newsletterOffset: [0, 0, "224px"],
}

module.exports = THEME_CONFIG
