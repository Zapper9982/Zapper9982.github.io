import { color } from "framer-motion";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    {name:"TechStack",link:"#tech"},
    { name: "Experience", link: "#experience" },
    {name:"PhotoWall",link:"#photowall"},
    { name: "Contact", link: "#contact" },
   
  ];


  
  export const gridItems = [
    {
      id: 1,
      title: " I prioritize getting the work done by fostering <span class='text-orange-300'>open communication</span>"
       ,
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/2112.i301.031.S.m004.c13.UI and UX designers concepts isometric composition.jpg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Building my linguistic skills for <span class='text-emerald-300'>global communication</span>",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My <span class='text-violet-400'>tech stack</span>",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: " I am a <span class='text-sky-400'>Tech enthusiast</span> with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "w-full h-full",
      titleClassName: " flex flex-col justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on a project to Schedule a <span class='text-rose-900'>doctors appointment</span>",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 ",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
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
      title: "A personal NoteIt App",
      des: "A simple notes App for ur complex workflow , with provision to Pin notes and adding Tags",
      img: "/personal-NoteIt.png",
      iconLists: ["/re.svg", "/tail.svg", "/logo-javascript.svg", "/mongodb-svgrepo-com.svg", "/node-js-seeklogo.svg"],
      link: "https://personal-noteit-frontend.onrender.com",
      color:"text-blue-200"
    },
    {
      id: 2,
      title: "A hotel Booking App",
      des: "A project to book hotels with the provision to book hotel and advanced City search Algorithm",
      img: "/hotel-booking.png",
      iconLists: ["/node-js-seeklogo.svg", "/tail.svg", "/logo-javascript.svg", "/stream.svg", "/mongodb-svgrepo-com.svg"],
      link: "https://github.com/Zapper9982/Hotel-Bookingsapp",
      color:"text-green-200"
    },
    {
      id: 3,
      title: "A Confession Page using college Confession API ",
      des: "A website where people can confess their sins to each other anonymously! using my colleges personal API",
      img: "/confession.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "no link available",
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
      title: "<span class='text-purple'>Frontend</span> Enhancements",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity and responsiveness .",
      className: "md:col-span-2",
      thumbnail: "/frontend.png",
    },
    {
      id: 2,
      title: "<span class='text-amber-300'>Backend</span> Developement",
      desc: "Developed and maintained server-side logic using Node.js, Express.js, and MongoDB.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/backend.jpg",
    },
    {
      id: 3,
      title: "<span class='text-blue-500'>Personal</span> OnGoing projects",
      desc: "Working and done with currently 5+ mega projects and a couple of mini projects ",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "<span class='text-red-300'>Hackathon</span> Participation",
      desc: "Participated in a 48-hour hackathon with my teammates and succesfull presented our project.",
      className: "md:col-span-2",
      thumbnail: "/hackbyte.png",
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
      navigate:"https://in.linkedin.com/in/tanmay-deobhankar-3997a228a"
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
  