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
    info2:
      'Distributive Computing is very hard for various institutions. Using limited resources to maximize the work is very hard to achieve. Nowadays, Computers are critical part of education system.Institutions have various lab and computer system to help students perform high end task hassle free to get correct output in minimum time. Various institutions have large servers as well as high end computing system but when it comes to mass distribution among student it becomes difficult for institutions and computer to manage such large scale high performance data and users action. To overcome this issue we have created a Admin Graphical Interface (AGI) that can help both institution and computer to properly manage the user activity and store them without any errors. Using this interface we can do all sort of admin roles from creation to deletion of users, data management and security, process handling and servicing as well as many others benefits.',
    url:
      'https://docs.google.com/presentation/d/1R0GdJB3PK-KAcOSLmVrryj_eSpFLfQgwcrY9DDmhz9Y/edit?usp=sharing',
    repo: 'https://github.com/samspei0l/webcic', // if no repo, the button will not show uphttps://omkarc.tech
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'A Predictive Framework for Cyber Security Attack Graphs',
    info:
      'With the large scale expansion of network connectivity, there has been a rapid increase in the number of cyber-attacks on corporations and government offices resulting in disruptions to business operations, damaging the reputation as well as financial stability of these corporations.',
    info2: '',
    url:
      'https://docs.google.com/presentation/d/1yaqr0aIwjH3kuqVTG585GPNzJdwh1UfHepsIAtjuIXE/edit?usp=sharing',
    repo: 'https://github.com/samspei0l/attack-graphs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cluster.png',
    title: 'High Performance Clusters',
    info:
      'Nowadays we are advancing more and more in the technological sector, we are exploring various fields like, Machine Learning, Big Data. So computations in sectors like Machine Learning requires a lot of computational processing power and resources. ',
    info2:
      'Now every individual doesn’t have very high level machines, they mostly work on their personal computers which have limited resources and processing power. In most of the colleges and universities high performance computer labs are available where all the systems are (or can be) connected in a network. It can be a solution to the limited resources problem of the students. Out of the working hours these systems are left idle leaving the CPU unutilized. In such a time a cluster of all the systems sharing all of their processors and memory can form a High Performance Computer Cluster. The student can make use of this Clustered System.',
    url: '',
    repo: 'https://github.com/samspei0l/hpc-ducc', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'music.png',
    title: 'Music Generation',
    info:
      'Data sciences have called the requirement for an adjustment in our point of view to take a gander at data. With this data being made and handled at rates past figuring, endless conceivable outcomes have emerged with respect to what all should be possible through this. The outcomes drawn through control of data consequently, demonstrate to us how unsurprising practices and people and machines, all in all, can get.',
    info2:
      'Our undertaking plans to take a shot at and utilize the RNN and LSTM models of Neural Network and along these lines execute them to produce rap verses. In conduct and phrasing, rap verses have made a notoriety of utilizing specific sort of content more regularly than others - an idea which makes rap all in all more unsurprising than different types of aesthetic data.',
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
