/**
 * Sets defaults for all theme options.
 */

const DEFAULT_OPTIONS = {
  /**** SITE IDENTITY ****/
  wordPressUrl: process.env.GATSBY_WORDPRESS_API_URL,
  siteUrl: "https://duqe.ae",
  wordPressBaseUrl: "https://duqe.me",
  siteTitle: "DUQE Free Zone",
  siteDescription: "We are DUQE",
  contact: {
    email: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    phone: "",
  },
  googleMapsLink: "",
  socialFollowLinks: [
    { name: "dribbble", url: null },
    { name: "facebook", url: "https://www.facebook.com" },
    { name: "github", url: null },
    { name: "instagram", url: "https://instagram.com" },
    { name: "linkedin", url: "https://linkedin.com" },
    { name: "medium", url: null },
    { name: "pinterest", url: null },
    { name: "reddit", url: null },
    { name: "snapchat", url: null },
    { name: "soundcloud", url: null },
    { name: "tiktok", url: null },
    { name: "twitter", url: null },
    { name: "vimeo", url: null },
    { name: "youtube", url: null },
  ],

  /**** THEME OPTIONS ****/
  gatsbySourceWordPressOptions: { presets: [] },
  pathPrefix: "",
  paginationPrefix: "page",
  addWordPressComments: false,
  addWordPressSearch: false,
  gaTrackingId: null,
  gaOptions: {},
  youTubeEmbed: true,
  youTubeChannelId: "",
  googleTagManagerId: null,
  googleTagManagerOptions: {},
  addSiteMap: false,
  siteMapOptions: {},
  archiveSidebarPosition: "right",
  pageCreateDebugOutput: false,

  useGravityForms: false,
  useNetlifyForms: false,
  usePageTransitions: false,
  developLimit: null,
  addColorModes: true,
  webfontsOptions: {},
  useTypekitFonts: false,
  widgetAreas: {
    slideMenuWidgets: [
      /*"Categories", "RecentPosts", "Tags", "SocialFollow"*/
    ],
    sidebarWidgets: ["Categories", "RecentPosts"],
  },

  /**** THEME VARIABLES ****/
  sidebarMenuWidth: 100,
  sidebarMenuMargin: 100,
  topBarHeight: 115,
  cssVarPrefix: "duqe",
  createColorPallete: true,

  /**** BUILD COMMANDS ****/
  createPages: true,
  createPosts: true,
  createCategories: true,
  createTags: false,
  createUsers: false,
  useWpRedirects: true,
  createCustomPostTypes: false,
  withApollo: true,
}

module.exports = DEFAULT_OPTIONS
