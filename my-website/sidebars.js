// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // Manual sidebar definition
  mySidebar: {
    // Existing and new sidebar items
    'Portfolio':[
      'Portfolio/Onboarding guide for backend developers',
      'Portfolio/Challenge your audience',]

    // Add more sidebar items as needed
  },
};

module.exports = sidebars;
