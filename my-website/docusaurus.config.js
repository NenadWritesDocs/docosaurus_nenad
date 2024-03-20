// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nenad Writes Docs',
  tagline: 'Pet project documentation site',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nenadwritesdocs.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NenadWritesDocs', // Usually your GitHub org/user name.
  projectName: 'docusaurus_nenad', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Add the new sidebar tab to the docs section
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          sortPosts: 'ascending',
          postsPerPage: 1,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docosaurus.mylogo.png',
    navbar: {
      title: 'Nenad Writes Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/docosaurus.mylogo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'CV and portfolio',
        },


        {to: '/blog', label: 'NYATWB', position: 'left'},
        {
          href: 'https://github.com/NenadWritesDocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
        
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/nenad-pajovi%C4%87-127272159/',
            },
            {
              label: 'Substack',
              href: 'https://substack.com/profile/85055366-lako_polako?utm_source=user-menu',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub - Docosaurus repository',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nenad Writes Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  // Put custom fields here
  customFields: {
    markdownPlugins: [
      // Highlight admonitions.
      require('remarkable-admonitions')({ icon: 'svg-inline' })
    ]
  }
};

module.exports = config;
