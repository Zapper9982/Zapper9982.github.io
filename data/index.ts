import { color } from "framer-motion";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    {name:"TechStack",link:"#tech"},
    { name: "Experience", link: "#experience" },
    {name:"PhotoWall",link:"#photowall"},
    { name: "GitHub PRs", link: "#github-prs" },
    { name: "Contact", link: "#contact" },
   
  ];


  
  export const gridItems = [
    {
      id: 1,
      title: "Speaker at <span class='text-orange-300'>DPG Dialogues</span> 2025",
      description: "Showcased my C4GT project (GenAI Test Suite) to industry leaders. Selected for Code4GovTech mentorship from 50,000+ applicants.",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full object-cover",
      titleClassName: "justify-end",
      img: "/dpg.png",
      spareImg: "",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7374397500935356416/",
      linkText: "LinkedIn Post"
    },
    {
      id: 2,
      title: "Competitive Programmer & <span class='text-emerald-300'>Hackathon Winner</span>",
      description: "1st place in 'Can You Hack It' (50+ teams). 600+ LeetCode problems. Codeforces Specialist (1430).",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
      link: "https://leetcode.com/Zapper9982/",
      linkText: "LeetCode Profile",
      link2: "https://codeforces.com/profile/Zapper9982",
      linkText2: "Codeforces Profile"
    },
    {
      id: 3,
      title: "My <span class='text-violet-400'>tech stack</span>",
      description: "Constantly improving",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Co-Coordinator of <span class='text-sky-400'>Shutterbox</span>",
      description: "Curated 15+ events including a photography exhibition, attracting 200+ attendees and fostering community engagement.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "w-full h-full",
      titleClassName: " flex flex-col justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
      link: "https://www.instagram.com/tanmay.9982/",
      linkText: "Visit Instagram"
    },
  
    {
      id: 5,
      title: "Open Source Contributor: <span class='text-rose-900'>12+ PRs merged</span>",
      description: "Contributing to Piramal Swasthya’s AMRIT project as contribution to C4GT open source program.",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 ",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
      link: "https://github.com/Zapper9982",
      linkText: "GitHub Profile"
    },
    {
      id: 6,
      title: "Do you want to start a <span class='text-fuchsia-400'>project</span> together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "An AI based Website Maintainance APP",
      des: "An application which allows you to analysis your website for your metadata, SEO score , as well are outdated Content and much more and then update those changes onto your code , with your permission seamlessly.",
      img: "/Agentxx.png",
      iconLists: ["/re.svg", "/nextjs.svg", "/Typescript.svg", "/mongodb-svgrepo-com.svg","/flask.svg"],
      link: "https://github.com/Zapper9982/agentxx",
      color:"text-blue-200"
    },
    {
      id: 2,
      title: "Stash- Windows Session Manager",
      des: "A project where you can manage your Windows application sessions. According to your comfort and workflows and also schedule when u want some apps to open all at one place. ",
      img: "/stash.png",
      iconLists: ["/node-js-seeklogo.svg", "/tail.svg", "/logo-javascript.svg", "/stream.svg", "/mongodb-svgrepo-com.svg"],
      link: "https://github.com/OVER-CODER/Stash",
      color:"text-green-200"
    },
    {
      id: 3,
      title: "Alive Docs - An realtime docs.",
      des: "An web application which allows users to work with each other on docs on realtime , its very useful for jotting down notes to coming up with workflows , with features to be able to comment on particular parts of lines , or even words. Making an immersive experience overall.",
      img: "/Alivedocs.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://alive-docs.vercel.app/",
      color:"text-red-200"  
    },
    {
      id: 4,
      title: "A location tracking App using Leaflet and Socket.io",
      des: "By using the Socket.io connection port and Leaflet API, I have created a location tracking app",
      img: "/locationtrack.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/ejs-svgrepo-com.svg", "/gsap.svg"],
      link: "https://github.com/Zapper9982/Live-Location-Tracker",
      color:"text-purple-200"
    },
  ];
  
 
  
  
  export const workExperience = [
    {
      id: 1,
      title: "GenAI + Backend Developer <span class='text-purple'>Intern</span>",
      org: "Piramal Swasthya (Code4GovTech)",
      desc: "• <b>Speaker at DPG Dialogues 2025:</b> Selected to showcase the project and its impact to industry leaders.<br/>• Pioneered a GenAI-powered Test Generation Suite using LangChain, RAG, and LLMs to produce JUnit5, Mockito, and MockMVC tests with 90%+ coverage.<br/>• Produced 92,000+ lines of automated test code for 4 microservices, reducing manual QA effort.<br/>• Automated test execution and coverage workflows via Maven, JaCoCo Reports and GitHub Actions.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
      date: "Jun 2025 – Aug 2025",
      techImages: ["/docker.png", "/github.png", "/postman.png", "/java.svg"]
    },
    {
      id: 2,
      title: "Open Source <span class='text-amber-300'>Maintainer</span>",
      org: "Bitbyte Summer of Code",
      desc: "• Architected full-stack matchmaking platform using React, Flask, and PostgreSQL/Supabase with automated cross-platform development environment managing 3+ concurrent services.<br/>• Established CI/CD workflows with Dockerized local development, Husky pre-commit hooks, Commitlint, and ESLint while coordinating 15+ contributors.<br/>• Authored comprehensive technical documentation covering Docker containerization, Supabase CLI integration, and JWT-based security.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
      date: "May 2025 – July 2025",
      techImages: ["/React.png", "/flask.svg", "/docker.png", "/tail.svg"]
    },
    {
      id: 3,
      title: "Independent Full-Stack Developer",
      org: "Self-Employed",
      desc: "Designed and developed multiple large-scale full-stack applications, demonstrating proficiency in modern web technologies and system architecture.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
      date: "Ongoing",
      techImages: ["/p1.svg", "/p2.svg", "/p3.svg"]
    },
    {
      id: 4,
      title: "Hackathon Competitor",
      org: "HackByte",
      desc: "Collaborated in a high-intensity 48-hour hackathon, successfully developing and presenting a functional prototype under strict deadlines.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
      date: "2024",
      techImages: ["/hackbyte.png"]
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      navigate:"https://github.com/Zapper9982"
    },
    {
      id: 2,
      img: "/instagram.jpg",
      navigate:"https://www.instagram.com/tanmay.9982/"
    },
    {
      id: 3,
      img: "/link.svg",
      navigate:"https://in.linkedin.com/in/tanmay-deobhan334werfefrfewrf"
    },
  ];


  export const photowall = [
    {
      id: 1,
      img: "/p1.svg",
    },
    {
      id: 2,
      img: "/p2.svg",
    },
    {
      id: 3,
      img: "/p3.svg",
    },
    {
      id: 4,
      img: "/p4.svg",
    },
    {
      id: 5,
      img: "/p5.svg",
    },
    {
      id: 6,
      img: "/p6.svg",
    },
  ];
  
  export  const  stack = [
    "/React.png",
    "/Mongod.png",
    "/Express1.png",
    "/Nest.png",
    "/Typescript.png",
    "/Javascript.png",
    "/Vuejs.png",
    "/Django.png",
    "/Vite.png",
    "/nojde.png",
    "/Tailwindcs.png",
    "/framer.png",
    "/svelte.png",
    "/Django.png",
    "/github.png",
    "/socketio.png",
    "/React.png",
    "/oracle.png",
    "/svelte.png",
    "/postman.png",
    "/Mongod.png",
    "/docker.png",
    "/Vuejs.png",
    "/mongoose.png",
    "/framer.png",
  ];
  
