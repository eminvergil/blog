// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Emin Vergil's blog",
  tagline: "",
  url: "https://eminvergil.github.io",
  baseUrl: "/etc/home/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "eminvergil", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Home",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        {
          type: "doc",
          docId: "intro",
          // position: "middle",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    // use default color dark mode
    // disableSwitch to true
    disableSwitch: true,
    defaultDarkMode: true,
    respectPrefersColorScheme: false,
  },
  plugins: [
    "docusaurus-tailwindcss",
    // require.resolve("@cmfcmf/docusaurus-search-local"),
  ],
};

module.exports = config;
