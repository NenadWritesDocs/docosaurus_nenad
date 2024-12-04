// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const remarkableAdmonitions = require('remarkable-admonitions');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nenad Writes Docs',
  tagline: 'Pet project documentation site',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://nenadwritesdocs.netlify.app/', // Your website URL
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/', // Usually '/' unless you have a subpath

  // GitHub pages deployment config.
  organizationName: 'NenadWritesDocs', // Usually your GitHub org/user name.
  projectName: 'docusaurus_nenad', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization configuration
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Custom fields
  customFields: {
    markdownPlugins: [
      // Highlight admonitions.
      remarkableAdmonitions({ icon: 'svg-inline' }),
    ],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Add any additional docs options here
        },
        blog: {
          showReadingTime: true,
          sortPosts: 'ascending',
          postsPerPage: 1,
          // Add any additional blog options here
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Include the remarkable-admonitions plugin
        markdown: {
          remarkPlugins: [remarkableAdmonitions],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card image
      image: 'img/docusaurus.mylogo.png',
      navbar: {
        title: 'Nenad Writes Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/docusaurus.mylogo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'CV and portfolio',
          },
          { to: '/blog', label: 'NYATWB', position: 'left' },
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
            items: [
              {
                label: 'CV and Portfolio',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
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
                label: 'GitHub - Docusaurus Repository',
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
    }),
};

module.exports = config;
