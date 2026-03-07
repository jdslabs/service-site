/**
 * JDS Labs Service Portal Sidebars
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guidesSidebar: [
    {
      type: 'category',
      label: 'Element IV',
      items: [
        'element-iv/quickstart',
        'element-iv/manuals',
        'element-iv/firmware-update',
        'element-iv/knob-repair',
      ],
    },
    {
      type: 'category',
      label: 'Atom DAC 2',
      items: [
        'atom-dac-2/quickstart',
        'atom-dac-2/manuals',
        'atom-dac-2/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Atom Amp 2',
      items: [
        'atom-amp-2/quickstart',
        'atom-amp-2/manuals',
        'atom-amp-2/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Atom Amp+',
      items: [
        'atom-amp-plus/quickstart',
        'atom-amp-plus/manuals',
        'atom-amp-plus/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Atom Phono',
      items: [
        'atom-phono/quickstart',
        'atom-phono/manuals',
        'atom-phono/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Synapse',
      items: [
        'synapse/quickstart',
        'synapse/manuals',
        'synapse/troubleshooting',
      ],
    },
  ],
};

module.exports = sidebars;
