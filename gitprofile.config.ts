// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'HazemGharib', // Your GitHub org/user name. (required config)
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Set false to hide this section
      header: 'Github Projects',
      mode: 'manual', // 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // 'stars' or 'updated'
        limit: 4,
        exclude: {
          forks: true,
          projects: [],
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'HazemGharib/gitprofile',
          'HazemGharib/zudo-v2',
          'HazemGharib/aws-site-deploy',
          'HazemGharib/ad-skipper',
        ],
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'SmartHire',
          description:
            'Find your next great hire fast. SmartHire combines our world-leading AI matching technology, #1 candidate audience, and market expertise.',
          imageUrl:
            'https://github.com/user-attachments/assets/aa9f467a-02ea-4a93-a59c-6f6154fbad1d',
          link: 'https://my.employer.seek.com/products/smarthire',
        },
        {
          title: 'Security & Encryption for Confluence Cloud',
          description:
            'A Confluence Cloud app to securely store secrets (passwords, bank accounts, credit card numbers, API tokens, etc.) using a macro in Confluence to encrypt and decrypt, store, manage and audit access to all of that.',
          imageUrl:
            'https://github.com/user-attachments/assets/646076bd-2528-484e-9e50-27c2d855cdb8',
          link: 'https://devpost.com/software/security-encryption-for-confluence-cloud',
        },
        {
          title: 'Linking for Confluence Cloud',
          description:
            'A Confluence Cloud app that provides macros to create one-click links that generate structured content via templates, create naming conventions for your content, and manage connections between pages.',
          imageUrl:
            'https://github.com/user-attachments/assets/67322cd5-ba2d-4d8b-9799-99d04984bc46',
          link: 'https://marketplace.atlassian.com/apps/166/linking-for-confluence?hosting=cloud',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Hazem Gharib',
    description:
      'Senior Software Engineer, Full-Stack Developer, and Open Source Contributor',
    imageURL: 'https://avatars.githubusercontent.com/u/12936006?v=4',
  },
  social: {
    linkedin: 'hazemgharib',
    email: 'hazem.gharib.8@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Next.js',
    'Vue.js',
    'Nuxt.js',
    'Node.js',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
    'AWS',
  ],
  experiences: [
    {
      company: 'SEEK Asia',
      position: 'Senior Software Engineer',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://seekasia.com/',
    },
    {
      company: 'ServiceRocket',
      position: 'Software Engineer',
      from: 'October 2018',
      to: 'July 2023 (4 years 10 months)',
      companyLink: 'https://www.servicerocket.com/',
    },
    {
      company: 'KloudyNet',
      position: 'SSO Consultant',
      from: 'November 2017',
      to: 'October 2018 (1 year)',
      companyLink: 'https://www.servicerocket.com/',
    },
    {
      company: 'Nabda Care',
      position: 'Junior .Net Developer',
      from: 'October 2015',
      to: 'October 2017 (2 years)',
      companyLink: 'https://www.servicerocket.com/',
    },
  ],
  educations: [
    {
      institution: 'Information Technology Institute - ITI Egypt',
      degree: '9-Month Diploma in Full-Stack Web Development',
      from: '2014',
      to: '2015',
    },
    {
      institution: 'Suez Canal University',
      degree:
        'Bachelor of Electrical Engineering in Computer and Control Systems',
      from: '2009',
      to: '2014',
    },
  ],
  googleAnalytics: {
    id: 'G-GZGN0TBBNW', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '5306247',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      // 'light',
      // 'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'dim',
      'nord',
      // 'sunset',
      // 'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `Made with <a 
      class="text-primary" href="https://github.com/HazemGharib/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
