export * from "./navOptions";

export const skills = [
  { text: "NextJs", value: 7 },
  { text: "Typescript", value: 7 },
  { text: "Redux", value: 6 },
  { text: "Javascript", value: 6 },
  { text: "SASS", value: 5 },
  { text: "TailwindCSS", value: 5 },
  { text: "MaterialUI", value: 4 },
  { text: "TailwindUI", value: 4 },
  { text: "Rechart", value: 4 },
  { text: "Storybook", value: 4 },
  { text: "Leadership", value: 5 },
  { text: "Communication", value: 5 },
  { text: "Problem-solving", value: 5 },
  { text: "Teamwork", value: 5 },
  { text: "Adaptability", value: 5 },
  { text: "NodeJS", value: 4 },
  { text: "Express", value: 4 },
  { text: "MongoDB", value: 4 },
  { text: "Graphql", value: 5 },
  { text: "Jest", value: 3 },
  { text: "Testing Library", value: 5 },
  { text: "Enzyme", value: 5 },
  { text: "Spanish", value: 5 },
  { text: "English", value: 5 },
  { text: "Kanban", value: 5 },
  { text: "Scrum", value: 5 },
];

export const skillsByGroup = {
  Frontend: [
    { name: "ReactJS", value: 5 },
    { name: "NextJs", value: 5 },
    { name: "Typescript", value: 5 },
    { name: "Redux", value: 5 },
    { name: "Javascript", value: 5 },
    { name: "SASS", value: 5 },
    { name: "TailwindCSS", value: 5 },
    { name: "MaterialUI", value: 5 },
    { name: "TailwindUI", value: 5 },
    { name: "Rechart", value: 5 },
    { name: "Storybook", value: 5 },
    { name: "And more...", value: 5 },
  ],
  "Soft skills": [
    { name: "Leadership", value: 5 },
    { name: "Communication", value: 5 },
    { name: "Problem-solving", value: 5 },
    { name: "Teamwork", value: 5 },
    { name: "Adaptability", value: 5 },
    { name: "Customer focus", value: 5 },
  ],
  Backend: [
    { name: "NodeJS", value: 4 },
    { name: "Express", value: 4 },
    { name: "MongoDB", value: 4 },
    { name: "Graphql", value: 5 },
  ],
  Testing: [
    { name: "Jest", value: 3 },
    { name: "Testing Library", value: 5 },
    { name: "Enzyme", value: 5 },
  ],
  Languages: [
    { name: "Spanish", value: 5 },
    { name: "English", value: 5 },
  ],
  "Agile Methodologies": [
    { name: "Kanban", value: 5 },
    { name: "Scrum", value: 5 },
  ],
};

export const experiences = [
  {
    title: "Politicians daily game by score",
    titleH: "Politicians [daily game] by score",
    description:
      "I was part of a team where the objective was create from scratch a full functional game with groups, login, achievements, tables, graphs, users. I took the role of frontend architect, leading the frontend side I made technologies decisions, I guided the team through forward the objectives.",
    descriptionH:
      "I was part of a team where the objective was create [from scratch] a full functional game with groups, login, achievements, tables, graphs, users. [I took the role of frontend architect], leading the frontend side I made technologies decisions, I guided the team through forward the objectives.",
    from: "",
    to: "",
    technologies: [
      "Nextjs",
      "Redux",
      "TailwindCSS",
      "storybook",
      "Typescript",
      "TailwindUI",
      "react-testing library",
    ],
    tasks: [
      "I selected the libraries to use based on weekly downloads, github stars, community behind and other metrics.",
      "I created the architecture of the project, deciding the folder structure, the way to communicate between components, the way to handle the state, the way to handle the side effects, the way to handle the styles, the way to handle the tests.",
      "I created the first components, the first pages, the first tests, the first styles.",
      "I created the first documentation, the first storybook, the first design system.",
    ],
  },
  {
    title: "Daily turn based strategy gladiators game",
    titleH: "Daily [turn based strategy] gladiators [game]",
    description:
      "This personal project was born out of an idea we had with two friends of mine. They were in charge of all the designs and I was in charge of the development side of the game. I coded the whole project with the MERN stack. Developed from scratch, I made entire pages, a Rest API, deployment, and more, so much more.",
    descriptionH:
      "This personal project was born out of an idea we had with two friends of mine. They were in charge of all the designs and I was in charge of the development side of the game. [I coded] the whole project [with the MERN stack]. Developed [from scratch], I made entire pages, a Rest API, deployment, and more, so much more.",
    from: "",
    to: "",
    technologies: [
      "ReactJS",
      "Redux",
      "Redux-Thunk",
      "Sass",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    title: "Onboarding guided tours for a well-known real estate company",
    titleH: "[Onboarding guided tours] for a well-known real estate company",
    description:
      "This project's goal was to create and maintain a set of components and hooks which guided users through the pages of a real estate company's website. I worked on this project as a full-stack developer for a five-month period, developing the required UI over different micro-frontends. I collaborated with other teams to integrate our code to their repositories.",
    descriptionH:
      "This project's goal was to [create and maintain a set of components and hooks] which guided users through the pages of a real estate company's website. I worked on this project as a full-stack developer for a five-month period, developing the required UI over different micro-frontends. I collaborated with other teams to integrate our code to their repositories.",
    from: "",
    to: "",
    technologies: [
      "ReactJS",
      "Redux",
      "Redux-thunk",
      "PropTypes",
      "Next.js",
      "Sass",
      "docz",
      "Node.js",
      "Express",
      "GraphQL",
      "Enzyme",
      "react-testing library",
    ],
  },
  {
    title: "Students and teachers react native App",
    titleH: "Students and teachers [react native App]",
    description:
      "The objective in this project was migrate the content of a web page to an app adding some changes.\nI worked as a consultant here, solving doubts about programming and talking with the client about the requirement and possibilities.",
    descriptionH:
      "[The objective] in this project [was migrate the content of a web page to an app] adding some changes.\nI worked as a consultant here, solving doubts about programming and talking with the client about the requirement and possibilities.",
    from: "",
    to: "",
    technologies: ["React Native", "Graphql"],
  },
  {
    title:
      "Machine learning features handler page for an important software factory",
    titleH:
      "[Machine learning features handler page] for an important software factory",
    description:
      "This product was in constant delivery and it was focused on making the machine learning functionalities as user friendly as possible.\n With a lot of UI components and a lot of processes involved, I had to make the API calls as a backend developer and entire pages as frontend developer. I was the only frontend developer working on this project, being part of a mixed team with other co-workers like data scientist, backend, sales, and more.",
    descriptionH:
      "[This product was in constant delivery] and it was focused on making the machine learning functionalities as user friendly as possible.\n [With a lot of UI components and a lot of processes involved], I had to make the API calls as a backend developer and entire pages as frontend developer. I was the only frontend developer working on this project, being part of a mixed team with other co-workers like data scientist, backend, sales, and more.",
    from: "",
    to: "",
    technologies: [
      "ReactJS",
      "Redux",
      "Redux-Thunk",
      "Sass",
      " D3.js",
      "Recharts",
      "Node.js",
      "Enzyme",
      "Jest",
      "react-testing library",
    ],
  },
];

export const colors = {
  red: "#f50537",
  black: "#000000",
  white: "#FFFFFF",
  primary: {
    1: "#1a1a1a",
    2: "#333333",
    3: "#4c4c4c",
    4: "#666666",
    5: "#808080",
    6: "#999999",
    7: "#b3b3b3",
    8: "#cccccc",
    9: "d9d9d9",
    10: "#e5e5e5",
    11: "f2f2f2",
  },
};

export const aboutMe = "Hi! I'm Martin, I'm from Argentina. I'm an experienced developer in ReactJS.I'm passionate about technology and I'malways looking for new challenges. When Ihad to take a fullstack profile I usually used the MERN combo.I'm a goal-oriented team player who enjoys learning newtech skills and keeping my team and myself up to date with thelatest trends. I love working in teams and I believe I have theright set of soft skills to balance my technical skills andbring value to the projects I'm entrusted with.";