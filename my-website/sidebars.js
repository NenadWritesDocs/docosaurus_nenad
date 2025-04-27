// sidebars.js
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'CV',
      items: [
        'CV/NenadPajovic_CV',  // your MD doc
      ],
    },
    {
      type: 'category',
      label: 'Portfolio',
      items: [
        'Portfolio/Onboarding guide for backend developers',
        'Portfolio/Challenge your audience',
        'Portfolio/Release notes',
      ],
    },
    // ← Top-level link item
  ],
};

module.exports = sidebars;
