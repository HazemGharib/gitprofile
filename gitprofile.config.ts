// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'HazemGharib', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [],
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Hazem Gharib',
    description:
      'Senior Software Engineer, Full-Stack Developer, and Open Source Contributor',
    imageURL: '',
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
      to: 'June 2023',
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
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
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
