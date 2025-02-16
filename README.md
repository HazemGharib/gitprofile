<br/>

<p align="center">
  <img src="https://user-images.githubusercontent.com/45073703/177566625-9b84e793-4559-4475-ba54-8d3d5f4123d4.png" width="35%">

  <h4 align="center">Easy to use automatic portfolio builder for every GitHub user!</h4>

  <p align="center">
    <a href="https://hazemgharib.github.io/gitprofile">View Demo</a>
  </p>
</p>

<p align="center">
  <a href="https://hazemgharib.github.io/gitprofile">
    <img src="https://github.com/hazemgharib/gitprofile/assets/45073703/eb6c38a4-ac92-4006-869b-e4e24f6f5cf6" alt="Preview" width="60%"/>
  </a>
  <br/>
  <a href="#hazemgharib"><img src="https://github.com/hazemgharib/gitprofile/assets/45073703/4d2ccd45-e566-4743-bf61-cadc03ece54c" width="50%" alt="Shadow"/></a>
</p>

**GitProfile** is a powerful portfolio builder that allows you to create a stunning and personalized portfolio site in minutes, even if you have no coding experience. Simply provide your GitHub username, and GitProfile will automatically generate a portfolio. Best of all, you can easily deploy your portfolio to GitHub Pages with just a few clicks, making it accessible to the world in no time.

To view a live example, **[click here](https://hazemgharib.github.io/gitprofile)**.

## 🛠 Installation & Setup

- Clone the project and change directory.

  ```shell
  git clone https://github.com/HazemGharib/gitprofile.git
  cd gitprofile
  ```

- Install dependencies.

  ```shell
  yarn
  ```

- Run dev server.

  ```shell
  yarn dev
  ```

- Finally, visit `http://localhost:5173/gitprofile/` from your browser.

> Alternatively, you can set up and run the project using Docker with **[Vail](https://github.com/hazemgharib/vail)**, a powerful tool for local development of JavaScript/TypeScript Apps.

## 🎨 Customization

All the magic happens in the file `gitprofile.config.ts`. Open it and modify it according to your preference.

You can leave most of the sections empty if you don't want to display them on your portfolio.

```ts
// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'HazemGharib', // Your GitHub org/user name. (This is the only required config)
  },
  ...
};

export default CONFIG;
```

### Themes

There are 33 themes available that can be selected from the dropdown.

The default theme can be specified.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  themeConfig: {
    defaultTheme: 'light',
    // ...
  },
};
```

You can create your own custom theme by modifying these values. Theme `procyon` will have the custom styles.

```ts
// gitprofile.config.ts
const CONFIG = {
  /**
   * Defines the custom theme colors and styles for the application.
   * The theme includes the following properties:
   * - `primary`: The primary color used throughout the application.
   * - `secondary`: The secondary color used for accents and highlights.
   * - `accent`: The accent color used for special elements.
   * - `neutral`: The neutral color used for backgrounds and text.
   * - `base-100`: The base background color.
   * - `--rounded-box`: The border radius for boxes and containers.
   * - `--rounded-btn`: The border radius for buttons.
   */
  themeConfig: {
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
};
```

### Google Analytics

**GitProfile** supports both GA3 and GA4. If you do not want to use Google Analytics, keep the `id` empty.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  googleAnalytics: {
    id: 'G-XXXXXXXXX',
  },
};
```

Besides tracking visitors, it will track `click events` on projects and blog posts, and send them to Google Analytics.

### Hotjar

**GitProfile** supports [hotjar](https://www.hotjar.com) to track visitor interaction and behavior. If you do not want to use Hotjar, keep the `id` empty.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
};
```

### SEO

You can customize the meta tags for SEO in `seo`.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  seo: {
    title: 'Portfolio of Hazem Gharib',
    description: '',
    imageURL: '',
  },
};
```

### PWA

GitProfile is PWA enabled. The site can be installed as a Progressive Web App. To turn it off, set `enablePWA` to `false`.

### Avatar and Bio

Your avatar and bio will be fetched from GitHub automatically.

### Social Links

You can link your social media services you're using, including LinkedIn, X, Mastodon, ResearchGate, Facebook, Instagram, Reddit, Threads, YouTube, Udemy, Dribbble, Behance, Medium, dev, Stack Overflow, Skype, Telegram, personal website, phone and email.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
};
```

### Skills

To showcase your skills provide them here.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  skills: ['JavaScript', 'React.js'],
};
```

Empty array will hide the skills section.

### Experience

Provide your job history in `experiences`.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
};
```

Empty array will hide the experience section.

### Education

Provide your education history in `educations`.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  educations: [
    {
      institution: 'Institution name 1',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution name 2',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
  ],
};
```

Empty array will hide the education section.

### Certifications

Provide your industry certifications in `certifications`.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
};
```

Empty array will hide the certifications section.

### Projects

#### Github Projects

- **Automatic Mode:** Seamlessly showcase your top GitHub projects based on stars or last updated date.
- **Manual Mode:** Choose specific repositories to highlight.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['hazemgharib/my-project1', 'hazemgharib/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['hazemgharib/gitprofile', 'hazemgharib/zudo'], // List of repository names to display. example: ['hazemgharib/my-project1', 'hazemgharib/my-project2']
      },
    },
  },
};
```

#### External Projects

- **Highlight Projects Beyond GitHub:** Feature projects hosted on other platforms or personal websites.
- **Control over Content:** Provide custom titles, descriptions, images, and links for each external project.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  projects: {
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
};
```

### Publications

Provide your academic publishing in `publications`.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  publications: [
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    },
  ],
};
```

Empty array will hide the publications section.

### Blog Posts

If you have [medium](https://medium.com) or [dev](https://dev.to) account, you can show your recent blog posts in here just by providing your medium/dev username. You can limit how many posts to display (Max is `10`).

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  blog: {
    source: 'dev',
    username: 'hazem-gharib',
    limit: 5,
  },
};
```

The posts are fetched by [blog.js](https://github.com/arifszn/blog.js).

## 💖 Support

<p>You can show your support by starring this project. ★</p>
<a href="https://github.com/hazemgharib/gitprofile/stargazers">
  <img src="https://img.shields.io/github/stars/hazemgharib/gitprofile?style=social" alt="Github Star">
</a>

## 📄 License

[MIT](https://github.com/hazemgharib/gitprofile/blob/main/LICENSE)
