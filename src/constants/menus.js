import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    // { text: 'Speakers', ...LINKS.speakers },
    // { text: 'Schedule', ...LINKS.schedule },
    { text: 'CfP', ...LINKS.proposal },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Media', ...LINKS.gallery },
    { text: 'Team', ...LINKS.team },
    { text: 'Meetup', ...LINKS.meetup },
  ],
  footer: [
    { text: 'Code of Conduct', ...LINKS.conduct },
    { text: 'Team', ...LINKS.team },
    { text: 'Mission Statement', ...LINKS.mission },
    { text: 'Impressum & Data Privacy', ...LINKS.privacy },
  ],
  mobile: [
    // { text: 'Speakers', ...LINKS.speakers },
    // { text: 'Schedule', ...LINKS.schedule },
    // { text: 'Call for Speakers', ...LINKS.proposal },
    // { text: 'Workshops', ...LINKS.workshops },
    { text: 'Sponsors', ...LINKS.sponsors },
    { text: 'Image Gallery', ...LINKS.gallery },
  ],
};

export default MENUS;
