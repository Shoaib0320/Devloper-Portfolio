// index.js
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
  pixelhouse,
  strugbits,
  davinci,
  carrent,
  jobit,
  tripguide,
  threejs,
  foodeiz,
  foodwala,
  ecommerceWebsiteStore,
  attariCollection,
  clickShopStore,
  nasirCollection,
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
  // {
  //   id: "project",
  //   title: "Project",
  // },
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
    title: "WordPress Developer",
    company_name: "Pixel House Technologies Pvt Ltd.",
    icon: pixelhouse,
    iconBg: "#383E56",
    date: "June 2023 - Current",
    points: [
      "Spearheaded the development of a new software module, reducing processing time by 30% and increasing overall system efficiency",
      "Implemented best practices in software testing, resulting in a 20% reduction in bug incidents and improving product quality.",
      "Played a key role in client onboarding and support activities, ensuring smooth implementation and customer satisfaction.",
    ],
  },
  {
    title: "WordPress Developer intern",
    company_name: "Strugbits",
    icon: strugbits,
    iconBg: "#E6DEDD",
    date: "FEBUARY 2023 – MAY 2023",
    points: [
      "Developed custom WordPress themes and plugins tailored to client requirements, resulting in enhanced website functionality and user experience.",
      "Implemented responsive design principles, ensuring seamless compatibility across various devices and screen sizes.",
      "Optimized website performance by leveraging caching techniques, image optimization, and code minification, resulting in improved loading times and user engagement",
      "Optimized website performance by leveraging caching techniques, image optimization, and code minification, resulting in improved loading times and user engagement.",
    ],
  },
  {
    title: "WordPress Developer",
    company_name: "Da Vinci Solutions",
    icon: davinci,
    iconBg: "#383E56",
    date: "AUGUST 2022 – NOVEMBER 2022",
    points: [
      "Actively engaged in ongoing learning and skill development, staying updated with the latest WordPress trends, plugins, and best practices to enhance technical proficiency.",
      "Collaborated with designers and content creators to integrate multimedia elements and dynamic content into WordPress websites, enhancing visual appeal and user engagement",
      "Provided support to clients and end-users, addressing technical inquiries and troubleshooting issues to ensure positive client relationships and satisfaction.",
      "Demonstrated a strong work ethic, adaptability, and a willingness to take on new challenges, contributing to a positive and productive work environment at Da-Vinci Solution.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Attari Collection",
    description:
      "Attari Collection is a modern web application designed for managing and displaying products with an elegant user experience. Built using Next.js, MongoDB, shadcn UI components, and Cloudinary, the app allows administrators to manage products and orders easily, while offering users a dynamic shopping experience.",
    tags: [
      {
        name: "Mern Stack ",
        color: "pink-text-gradient",
      },
      {
        name: "MangoDB",
        color: "green-text-gradient",
      },
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "yellow-text-gradient",
      },
    ],
    image: attariCollection,
    source_code_link: "https://github.com/Shoaib0320/Attari-Collection",
  },
  {
    name: "Nasir Collection",
    description:
      "Features: User Authentication: Secure login and registration process. Product Management: View and manage a variety of products. Shopping Cart: Add, remove, and update products in the cart. Responsive Design: Optimized for various screen sizes. Modern UI: Utilizes the latest web technologies for a seamless user experience.",
    tags: [
      {
        name: "React js",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "blue-text-gradient",
      },
    ],
    image: nasirCollection,
    source_code_link: "https://github.com/Shoaib0320/Nasir-Collection",
  },

  {
    name: "Click Shop Store",
    description:
    "Click Shop Store is a modern e-commerce platform designed to provide users with a seamless shopping experience. Built using React.js, Firebase, and Ant Design, the app allows administrators to manage products and orders easily, while offering users a dynamic shopping experience.",
    tags: [
      {
        name: "React js",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Ant Design",
        color: "blue-text-gradient",
      },
    ],
    image: clickShopStore,
    source_code_link: "https://github.com/Shoaib0320/Foodiez-Food-Delivery-App",
  },

  {
    name: "Foodeiz (Food Delivery)",
    description:
      "Key Features of Foodiez Food Delivery App User-Friendly Design: Intuitive interface for easy navigation. Secure Authentication: User and restaurant login via Firebase. Restaurant Browsing: Explore restaurants and their menus. Add to Cart: Simple cart management and checkout. Order Tracking: Track order status in real-time.",
    tags: [
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: foodeiz,
    source_code_link: "https://github.com/Shoaib0320/Foodiez-Food-Delivery-App",
  },
  {
    name: "Food Wala",
    description:
    "Food Wala is an intuitive and visually appealing online food delivery platform designed to provide users with a seamless experience for browsing, ordering, and tracking food orders from a variety of restaurants. Key Functionalities: Restaurant Listings: Users can explore a diverse range of restaurants, each offering a selection of dishes.",
    tags: [
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: foodwala,
    source_code_link: "https://github.com/Shoaib0320/Food-Wala-Food-Delivery-App-",
  },

  {
    name: "E-Commrece Website Store",
    description:
    "This repository contains an E-Commerce website built with React. The application features a user-friendly interface that allows users to browse products, add items to their cart, and manage their orders. Key functionalities include user authentication, product listings, and a responsive design to enhance the shopping experience on both desktop and mobile devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Metarial Ui",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerceWebsiteStore,
    source_code_link: "https://github.com/Shoaib0320/E-Commerce-Website-For-React-",
  },

  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/shoaib0320",
  },

  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/shoaib0320",
  },

  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/shoaib0320",
  },
];

export { services, technologies, experiences, testimonials, projects };
