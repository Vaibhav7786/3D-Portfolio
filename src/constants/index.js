import {
    mobile,
    backend,
    creator,
    web,
    java,
    mern,
    sql,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    infobeans,
    guru,
    tomato,
    portfolio,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "certificate",
      title: "Certificates'",
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
      title: "Java Developer",
      icon: creator,
    },
  ];

  const certificates = [
    {
      title: "Java Programming",
      icon: java,
      link:"https://drive.google.com/file/d/1O3ZCciU9AwKJwjOeuNcMJt9OhLh5_XKg/view"
    },
    {
      title: "JavaScript (Basic)",
      icon: javascript,
      link:"https://drive.google.com/file/d/1EF3hWtl4OaVWUl3D18_ZeLMIVGB6fd9P/view"
    },
    {
      title: "MERN Stack Fundamentals",
      icon: mern,
      link:"https://drive.google.com/file/d/1FIJSKDQ2e-bEvHvSj5aIaJnO2gBLRiMC/view"
    },
    {
      title: "SQL Projects for Beginners",
      icon: sql,
      link:"https://drive.google.com/file/d/1oSrgcjP7EuQ5cr2MPjdOp52OSOvZURRV/view"
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },

    {
      name: "React JS",
      icon: reactjs,
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
  ];
  
  const experiences = [
    {
      title: "Java Developer",
      company_name: "Infobeans Foundation",
      icon: infobeans,
      iconBg: "#ffffff",
      date: "Jan 2023 - Aug 2023",
      points: [
        "Developing and maintaining web applications using Java and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Guru Sampoorna Taaja",
      icon: guru,
      iconBg: "#ffffff",
      date: "Sep 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "The project’s responsive design have played a key role in enhancing the online shopping experience for our customers.",
        "The project stands out for its responsive design and flawless performance across all browsers.",
        "Sales of Guru organic products have significantly increased, and customer connected to the brand than ever before.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought creating a website as compact as our product would be complex, but Vaibhav proved me wrong.",
      name: "Dipesh Dabi",
      designation: "SDE",
      company: "Samyotech Solutions",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGdMfp-fVvcag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720271563470?e=1735171200&v=beta&t=c7EJA66GkepEJIyS8mrhA2c9XGBs5c3JMJFZP_o19-Q",
    },
    {
      testimonial:
        "Vaibhav is a rare find among web developers, truly committed to ensuring his clients succeed.",
      name: "Madhav Patidar",
      designation: "FOUNDER",
      company: "Guru Sampoorna Taaja",
      image: "https://i.ytimg.com/vi/PvEsNYSheGc/mqdefault.jpg",
    },
    {
      testimonial:
        "After Vaibhav optimized our SEO, our website traffic increased by 50%. We can't thank him enough!",
      name: "Gaurav Kothari",
      designation: "TECHNICAL TRAINER",
      company: "InfoBeans Foundation",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEXSq1e6SI3dQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1674383171494?e=1735171200&v=beta&t=_k-FaFq--HVYKVMW4TaSmkv5-0VS9cLUwI2OddkLidc",
    },
  ];
  
  const projects = [
    {
      name: "Tomato",
      description:
        "A web-based platform that enables users to browse, order, and manage food items from a variety of restaurants. The project combines React, MongoDB, Express, and Node.js to create an efficient, user-friendly food ordering solution.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mongo DB",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Node JS",
          color: "orange-text-gradient",
        },
      ],
      image: tomato,
      source_code_link: "https://github.com/Vaibhav7786/FOOD_DEL",
    },
    {
      name: "3D Portfolio",
      description:
        "A visually engaging web-based platform that showcases a personal portfolio in 3D. This project enhances user experience by utilizing modern design and interactivity, making it an effective tool for personal branding and showcasing skills.",
      tags: [
        {
          name: "React Fiber",
          color: "blue-text-gradient",
        },
        {
          name: "Rest Api",
          color: "green-text-gradient",
        },
        {
          name: "Three.js",
          color: "pink-text-gradient",
        },
        {
          name: "Vue",
          color: "orange-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Vaibhav7786/3d-Portfolio",
    },
  ];
  
  export { services, certificates, technologies, experiences, testimonials, projects };
  