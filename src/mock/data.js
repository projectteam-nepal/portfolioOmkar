import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Omkar Chaudhary', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Omkar  Chaudhary',
  subtitle: 'Full Stack Developer',
  cta: 'Find out more about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'I am an undergrad student at Cluster Innovation Centre, University of Delhi pursuing B.Tech in Information Technology and Mathematical Innovation with Management as minor subject.',
  paragraphTwo:
    'I would love to work on projects related to security and cloud computing for large scale systems.',
  paragraphThree: 'Currently I work as ',
  resume: 'https://drive.google.com/file/d/1Gswu2-OV4_DYmcl2NlqPItb9JFSDVLzk/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cic_web.jpg',
    title: 'CICWEB',
    info:
      'CICWEB is web based framework to manage all the system at CIC with virtual machine and container support. Admin can create, manage and wipe the system remotely using the interface. User can create virtual machine and containers which can be accessed anywhere in the CIC permises.',
    info2: '',
    url:
      'https://docs.google.com/presentation/d/1R0GdJB3PK-KAcOSLmVrryj_eSpFLfQgwcrY9DDmhz9Y/edit?usp=sharing',
    repo: 'https://github.com/samspei0l/webcic', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'A Predictive Framework for Cyber Security Attack Graphs',
    info: '',
    info2: '',
    url:
      'https://docs.google.com/presentation/d/1yaqr0aIwjH3kuqVTG585GPNzJdwh1UfHepsIAtjuIXE/edit?usp=sharing',
    repo: 'https://github.com/samspei0l/attack-graphs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cluster.png',
    title: 'High Performance Clusters',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/samspei0l/hpc-ducc', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'music.png',
    title: 'Music Generation',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/samspei0l/lyrics-generation',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'omkaryash123@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/o2mark2',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/omkarchaudhary/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/samspei0l',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
