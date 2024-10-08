import { getPermalink } from './utils/permalinks';
import {useTranslations, LOCALES} from './i18n';
const t = useTranslations();

export const getStaticPaths = () =>
  Object.keys(LOCALES).map((lang) => ({
    params: { lang },
  }));

export const headerData = {
  links: [
    {
      text: 'Beyond Technology',
      href: 'https://beyondtechnology.net/',
      links: [{
        text: 'Partners',
        href: 'https://beyondtechnology.net/Partners', 
      },{
        text: 'Blog',
        href: 'https://beyondtechnology.net/blog',
      }]
    },
  ],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/BeyondTechnologyGlobal', },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/beyondtechnologyglobal/' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/beyondtechglobl' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/beyondtechnologyglobal' },
    { ariaLabel: 'Spotify', icon: 'tabler:brand-spotify', href: 'https://open.spotify.com/show/1NHFzYtUkfT9jY6UuwsXJt'},
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@beyondtechnologyglobal', target: '_blank'}

  ]
};
