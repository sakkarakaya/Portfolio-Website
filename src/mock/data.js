import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mehmet S. Karakaya',
  subtitle: "I'm a web developer. ",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'a.jpeg',
  paragraphOne: 'I design and create websites beautifully that are fast, easy to use, and built with best practices and love what I do.',
  paragraphTwo: 'Powered by Wordpress or ReactJS, VS Code and coffee.',
  paragraphThree: 'I’m naturally curious and perpetually working on improving my skills.',
  resume: 'https://drive.google.com/file/d/1BWpQ35tpNdDsGAWks1uJBFswL5AALNPE/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'SKS Leben',
    info: 'Multilingual E-Commerce Website',
    info2: '',
    url: 'https://sksleben.de',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Juwelier Hanan',
    info: '',
    info2: '',
    url: 'https://juwelierhanan.de',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sakkarakaya@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sakkarakaya',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
