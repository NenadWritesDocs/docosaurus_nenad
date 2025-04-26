// docusaurus.config.js
module.exports = {
  title: 'Nenad Writes Docs',
  tagline: 'Technical writing & docs',
  url: 'https://nenadpajovic.github.io',
  baseUrl: '/',
  organizationName: 'nenadpajovic',
  projectName: 'my-website',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/kb_solid.svg',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/nenadpajovic/my-website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // editUrl: 'https://github.com/nenadpajovic/my-website/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],  // ← Make sure this comma is here!

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Nenad Writes Docs',
      logo: {
        alt: 'Logo',
        src: 'img/kb_solid.svg',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/NenadWritesDocs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/nenad-pajović-127272159/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    // ... any other themeConfig settings ...
  },
};
