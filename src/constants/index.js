import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mvp,
  gdl,
  ab,
  nftmp,
  wp
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Block Chain Developer",
    company_name: "Metaverse Ventures",
    icon: mvp,
    iconBg: "#383E56",
    date: "December 2023 - Present",
    points: [
      "Employed Next.js to deliver a seamless and intuitive user experience, garnering a 90% positive feedback from users.",
      "Implemented Real Estate Decentralized Application with a 70% efficiency boost, enhancing transparency and security in property transactions.",
      "Executed smart contract development with a 80% adherence to security best practices, ensuring the safety of financial transactions and user data.",
      "Optimized smart contract performance, achieving a 70% reduction in gas fees, enhancing the overall efficiency of the decentralized application."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Green Dumbells",
    icon: gdl,
    iconBg: "#E6DEDD",
    date: "September 2023 - November  2023",
    points: [
      "Developed a high-performing responsive  e-commerce website utilizing MongoDB, Express.js, React.js, and Node.js,  with seamless management of 450+ products, 100+ users, and 70+ orders.",
      "Implemented an intuitive admin dashboard with advanced filtering capabilities, empowering administrators to analyze user behavior, track popular products, and optimize business strategies resulting in a 10x increase in revenue. ",
      "Leveraged Cloudinary for efficient image uploading, enhancing the website's visual appeal and user experience",
      "Enhanced security and user experience by implementing a password recovery system using Nodemailer, allowing users to reset passwords through a secure OTP sent to their email.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Green Dumbells",
    icon: gdl,
    iconBg: "#383E56",
    date: "July 2023 - August 2023",
    points: [
      "Engineered an intuitive admin dashboard enabling personalized user interactions, leading to a twofold increase in app ratings and a significant 70% surge in positive reviews.",
      "Implemented a dynamic content management system allowing admins to seamlessly add diverse meals, meditation audios, exercise photos, and personalized do's and don'ts, enhancing the app's offerings",
      "Developed a user-centric feature enabling admins to analyze user requirements and provide personalized suggestions for meals, exercises, stretchings, and meditations, fostering a more engaging user experience.",
      "Achieved a substantial 60% increase in app downloads by creating a feature-rich admin interface that facilitated better user engagement, positive feedback, and a more personalized app experience.",
    ],
  },
  {
    title: "Front end developer Intern",
    company_name: "Green Dumbells",
    icon: gdl,
    iconBg: "#E6DEDD",
    date: "May 2023 - June 2023",
    points: [
      "Designed and launched a promotional website showcasing the company's Android app and product offerings, resulting in a significant twofold increase in app ratings, a substantial 70% surge in positive reviews.",
      "Implemented responsive design and due to which the app received increased user engagement, positive feedback  and a substantial rise in the adoption of the Android app by a diverse user base ."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Airbnb Clone",
    description:
      "Developed an Airbnb clone with the capability to manage a diverse portfolio of 100 properties and cater to 100 users seamlessly. Implemented a user-friendly map feature, individuals can conveniently explore and select accommodations by both visually browsing on the map and typing specific locations. ",
    tags: [
      {
        name: "Next_js",
        color: "blue-text-gradient",
      },
      {
        name: "Postgres-SQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ab,
    source_code_link: "https://github.com/Jayasatwik123/airbnb/tree/master",
  },
  {
    name: "NFT Marketplace",
    description:
      " I conceptualized  an innovative NFT marketplace, empowering users to seamlessly create, auction, and sell their unique NFT tokens at self-determined prices. The platform not only facilitates a dynamic marketplace for digital assets but also provides users the flexibility to adjust their token prices as per market dynamics",
    tags: [
      {
        name: "Next_Js",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: nftmp,
    source_code_link: "https://github.com/Jayasatwik123/nftmp",
  },
  {
    name: "Chat App",
    description:
      "Created a comprehensive WhatsApp clone that mirrors the functionalities of the original application, including video and audio calls, real-time acknowledgment with blue ticks, multimedia sharing capabilities such as images, audio, and emojis, and an advanced search feature within messages. By incorporating Google Firebase for secure authentication",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: wp,
    source_code_link: "https://github.com/Jayasatwik123/airbnb/tree/master",
  },
];

export { services, technologies, experiences, testimonials, projects };
