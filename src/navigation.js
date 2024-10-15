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
      text: 'Beyond',
      href: 'https://google.com'
    },{
      text: 'Partners',
      href: 'https://beyondtechnology.net/partners',
    },{
      text: 'Blog',
      href: 'https://beyondtechnology.net/blog',
    },{
      text: 'Contact',
      href: 'https://beyondtechnology.net/contact-digital-transformation/'
    }
  ],
};

export const footerData = {
  secondaryLinks: [
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Privacy Policy', href: 'https://beyondtechnology.net/privacy-policy/'},
    
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/BeyondTechnologyGlobal', },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/beyondtechnologyglobal/' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/beyondtechglobl' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/beyondtechnologyglobal' },
    { ariaLabel: 'Spotify', icon: 'tabler:brand-spotify', href: 'https://open.spotify.com/show/1NHFzYtUkfT9jY6UuwsXJt'},
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@beyondtechnologyglobal',}

  ]
};
