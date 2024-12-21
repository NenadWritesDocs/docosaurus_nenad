// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

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

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Additional docs options
        },
        blog: {
          path: './blog', // Path to your blog folder
          routeBasePath: 'blog', // Access the blog at /blog
          showReadingTime: true,
          sortPosts: 'ascending',
          postsPerPage: 1,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // Other preset options if any
      }),
    ],
  ],

  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    navbar: {
      title: 'Nenad Writes Docs',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
        width: 32,
        height: 32,
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
  },
};

module.exports = config;
