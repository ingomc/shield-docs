export const sidebar = [
  {
    label: 'Allgemeines',
    collapsed: false,
    autogenerate: { directory: 'allgemeines' },
  },
  {
    label: 'CSS-Framework',
    collapsed: true,
    items: [
      { label: 'Übersicht', link: '/css-framework/01_getting-started/' },
      {
        label: '📐 Layout',
        collapsed: true,
        autogenerate: { directory: 'css-framework/layout' },
      },
    ],
  },
  {
    label: 'Components',
    collapsed: true,
    autogenerate: { directory: 'components' },
  },
  {
    label: 'Dev-Tools',
    badge: { text: 'Experimentell', variant: 'caution' },
    collapsed: true,
    autogenerate: { directory: 'dev-tools' },
  },
];
