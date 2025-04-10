import slugify from 'slugify';

const getAnchor = (str) => slugify(str).toLocaleLowerCase();

export default {
  // Pages and sections
  gallery: {
    to: 'https://www.youtube.com/@cloudnative-amsterdam',
    target: '_blank',
    external: true,
  },
  home: {
    to: '/',
  },
  schedule: {
    to: '/schedule',
    id: getAnchor('Schedule'),
    homeTo: '/schedule',
  },
  proposal: {
    to: `https://talks.cloudnative.amsterdam/cloud-native-community-days-2025/cfp`,
    id: getAnchor('proposal'),
    homeTo: null,
    external: true,
  },
  sponsors: {
    to: `/#${getAnchor('sponsors')}`,
    id: getAnchor('sponsors'),
    homeTo: null,
  },
  workshops: {
    to: '/workshops',
    id: getAnchor('Workshops'),
    homeTo: '/workshops',
  },
  team: {
    to: '/team',
  },
  tickets: {
    to: '',
    target: '_blank',
    external: true,
  },
  mission: {
    to: '/mission-statement',
    target: '_blank',
    external: true,
  },
  privacy: {
    to: '/data-privacy',
    target: '_blank',
    external: true,
  },
  conduct: {
    to: 'https://events.linuxfoundation.org/about/code-of-conduct/',
    target: '_blank',
    external: true,
  },

  // Social-links
  linkedin: {
    to: 'https://www.linkedin.com/company/cloud-native-days-netherlands/',
    target: '_blank',
    external: true,
  },
  twitter: {
    to: 'https://x.com/cloudnativeams',
    target: '_blank',
    external: true,
  },
  googlemaps: {
    to: 'https://maps.app.goo.gl/4epBb1JZJvcb78YT8',
    target: '_blank',
    external: true,
  },
  youtube: {
    to: 'https://www.youtube.com/@cloudnative-amsterdam',
    target: '_blank',
    external: true,
  },
  speakers: {
    to: `/speakers`,
    id: getAnchor('Speakers'),
    homeTo: '/speakers',
  },
};
