/**
 * JDS Labs Service Portal Sidebars
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guidesSidebar: [
    {
      type: 'category',
      label: 'Element IV',
      link: {
        type: 'doc',
        id: 'element-iv/index',
      },
      items: [
        'element-iv/quickstart',
        'element-iv/manuals',
        'element-iv/firmware-update',
        'element-iv/knob-repair',
        'element-iv/board-swap',
      ],
    },
    {
      type: 'category',
      label: 'Element III Mk 2',
      link: {
        type: 'doc',
        id: 'element-iii-mk2/index',
      },
      items: [
        'element-iii-mk2/quickstart',
        'element-iii-mk2/manuals',
        'element-iii-mk2/troubleshooting',
        'element-iii-mk2/knob-grease',
      ],
    },
    {
      type: 'category',
      label: 'Atom DAC 2',
      link: {
        type: 'doc',
        id: 'atom-dac-2/index',
      },
      items: [
        'atom-dac-2/quickstart',
        'atom-dac-2/manuals',
        'atom-dac-2/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Atom Amp 2',
      link: {
        type: 'doc',
        id: 'atom-amp-2/index',
      },
      items: [
        'atom-amp-2/quickstart',
        'atom-amp-2/manuals',
        'atom-amp-2/troubleshooting',
        'atom-amp-2/board-swap',
      ],
    },
    {
      type: 'category',
      label: 'Atom Amp+',
      link: {
        type: 'doc',
        id: 'atom-amp-plus/index',
      },
      items: [
        'atom-amp-plus/quickstart',
        'atom-amp-plus/manuals',
        'atom-amp-plus/troubleshooting',
        'atom-amp-plus/board-swap',
      ],
    },
    {
      type: 'category',
      label: 'Atom Phono',
      link: {
        type: 'doc',
        id: 'atom-phono/index',
      },
      items: [
        'atom-phono/quickstart',
        'atom-phono/manuals',
        'atom-phono/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Synapse',
      link: {
        type: 'doc',
        id: 'synapse/index',
      },
      items: [
        'synapse/quickstart',
        'synapse/manuals',
        'synapse/troubleshooting',
      ],
    },
  ],
};

module.exports = sidebars;
