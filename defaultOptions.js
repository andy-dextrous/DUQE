/**
 * Sets defaults for all theme options.
 */

const DEFAULT_OPTIONS = {
  //Site identity
  wordPressUrl: process.env.GATSBY_WORDPRESS_API_URL,
  siteUrl: "https://tacticspaces.gatsbyjs.io/",
  wordPressBaseUrl: "https://andrews177.sg-host.com/",
  siteTitle: "Tactic Spaces",
  siteDescription:
    "We are an end to end solution for creating workspaces that engage",
  contact: {
    email: "contact@tacticproperty.com.au",
    address: {
      street: "134 Merivale St",
      city: "South Brisbane",
      state: "QLD",
      zip: "4101",
    },
    phone: "0490 553 094",
  },
  googleMapsLink: "https://goo.gl/maps/wjT3T8Lervce5LTM7",
  socialFollowLinks: [
    { name: "dribbble", url: null },
    { name: "facebook", url: "https://www.facebook.com/tacticproperty/" },
    { name: "github", url: null },
    { name: "instagram", url: "https://www.instagram.com/tacticproperty" },
    {
      name: "linkedin",
      url: "https://au.linkedin.com/company/tactic-property",
    },
    { name: "medium", url: null },
    { name: "pinterest", url: null },
    { name: "reddit", url: null },
    { name: "snapchat", url: null },
    { name: "soundcloud", url: null },
    { name: "tiktok", url: null },
    { name: "twitter", url: "https://mobile.twitter.com/mel_pikos" },
    { name: "vimeo", url: null },
    {
      name: "youtube",
      url: "https://www.youtube.com/channel/UCLkBXZd2bIHrnb7KxI1jejw",
    },
  ],
  cssVarPrefix: "tactic",
  createColorPallete: true,

  //Theme options
  gatsbySourceWordPressOptions: { presets: [] },
  pathPrefix: "",
  paginationPrefix: "page",
  addWordPressComments: false,
  addWordPressSearch: false,
  gaTrackingId: null,
  gaOptions: {},
  youTubeEmbed: true,
  youTubeChannelId: "UCLkBXZd2bIHrnb7KxI1jejw",
  googleTagManagerId: null,
  googleTagManagerOptions: {},
  addSiteMap: false,
  siteMapOptions: {},
  archiveSidebarPosition: "right",
  pageCreateDebugOutput: false,

  useGravityForms: false,
  useNetlifyForms: false,
  developLimit: null,
  addColorModes: true,
  webfontsOptions: {},
  useTypekitFonts: true,
  widgetAreas: {
    slideMenuWidgets: [
      /*"Categories", "RecentPosts", "Tags", "SocialFollow"*/
    ],
    sidebarWidgets: ["Categories", "RecentPosts"],
  },

  // Build commands
  createPages: true,
  createPosts: false,
  createCategories: false,
  createTags: false,
  createUsers: false,
  useWpRedirects: true,
  createCustomPostTypes: false,
  withApollo: true,
}

module.exports = DEFAULT_OPTIONS
