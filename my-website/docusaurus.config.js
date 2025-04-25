module.exports = {
  title: 'Nenad Writes Docs',
  tagline: 'Technical writing & docs',
  url: 'https://nenadpajovic.github.io',
  baseUrl: '/',
  organizationName: 'nenadpajovic',
  projectName: 'my-website',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Nenad Writes Docs',
      logo: { alt: 'Logo', src: 'img/logo.svg' },
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { to: '/docs/api/overview', label: 'API Reference', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/nenadpajovic', label: 'GitHub', position: 'right' },
        { href: 'https://www.linkedin.com/in/nenadpajovic', label: 'LinkedIn', position: 'right' },
      ],
    },
  },
};