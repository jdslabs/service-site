// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JDS Labs Service Portal',
  tagline: 'Service & Repair Guides',
  favicon: 'img/favicon.ico',

  url: 'https://service.jdslabs.com',
  baseUrl: '/',

  organizationName: 'jdslabs',
  projectName: 'service-portal',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  clientModules: [
    require.resolve('./src/theme/lightbox.js'),
  ],

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
          routeBasePath: '/', // Keep docs at root paths like /element-iv/overview
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/jdslabs-social-card.jpg',
      navbar: {
        title: 'JDS Labs',
        logo: {
          alt: 'JDS Labs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://jdslabs.com',
            label: 'Shop',
            position: 'right',
          },
          {
            href: 'https://blog.jdslabs.com',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://jdslabs.com/support',
            label: 'Contact Support',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              { label: 'Element IV', to: '/element-iv' },
              { label: 'Atom Stack', to: '/atom-stack' },
              { label: 'Subjective 3', to: '/subjective-3' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'JDS Labs Shop', href: 'https://jdslabs.com' },
              { label: 'Blog', href: 'https://blog.jdslabs.com' },
              { label: 'Support', href: 'https://jdslabs.com/support' },
            ],
          },
          {
            title: 'Connect',
            items: [
              { label: 'Twitter', href: 'https://twitter.com/jaborandi' },
              { label: 'Facebook', href: 'https://facebook.com/jdslabs' },
              { label: 'Instagram', href: 'https://instagram.com/jdslabs' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} JDS Labs, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
