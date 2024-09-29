import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "Aantakshri Assistant",
    desc: "Find properties For Sale and Rent, The Platform offering reliable real estate brokerage services.",
    img: "https://play-lh.googleusercontent.com/sYcAG3VsLx2OvoC9LDtRMCWDtsQfeUTCXW5Wqt5qBX4bRzYyiFQjwHSZJ42ZHbIXJ4hv=w240-h480-rw",
    link: "https://github.com/amankumar1804/Antakshri_assistant",
    tags: ["React", "Flask", "CSS", "Context", "Socket.io","Firebase","Google Auth"]
  }
  ,
  {
    id: 1,
    title: "customized password generator",
    desc: "Healthcare near you, World's first Digital Healthcare Marketplace! If you own a healthcare establishment, you can claim your business for free",
    img: "https://www.dashlane.com/_next/image?url=https://ripleyprd.wpengine.com/wp-content/uploads/2021/03/Password-Generator.png&w=3840&q=75",
    link: "https://github.com/amankumar1804/passwordGenerator",
    tags: [
      "React",
      "Context",
      "HTML",
      "CSS",
      "Javascript",
      "Custom Hooks",
      
    ]
  },
  {
    id: 2,
    title: "music player",
    desc: "Buy & Sell Digital Assets in minutes",
    img: "https://play-lh.googleusercontent.com/uMjojHmwZVc2EraB-3pc7GmVF38Uiiq0f6uicRWTKNOciMr8cellg8McoUDs1RcrfYc",
    link: "https://github.com/amankumar1804/music_player",
    tags: ["HTML","Css","Javascript"]
  },
  {
    id: 3,
    title: "theme changer",
    desc: "Macwin Solar PV Module is the flagship company of Unique Sun Power LLP, which supplies solar panels used for green energy generation",
    img: "https://cdn.shopify.com/app-store/listing_images/4206f24d70dd40969f6dc04a3ae6164b/icon/CPGN5eP0lu8CEAE=.jpg",
    link: "https://github.com/amankumar1804/themechanger",
    tags: ["React", "TailwindCSS", "Javascript"]
  },
  {
    id: 4,
    title: "music next",
    desc: "Newnex is the end-to-end platform for fundraising and investing in startups, co-investments and venture capital funds for GPs and LPs.",
    img: "https://t3.ftcdn.net/jpg/02/77/62/38/360_F_277623835_6ZvmP8pf4IvjMPslhCRvalQFzxe3tkTq.jpg",
    link: "https://github.com/amankumar1804/music_nextJs",
    tags: ["React", "NextJs", "Javascript"]
  },
 
];

export const allTags = [];

projects.forEach(project => {
  project.tags.forEach(tag => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default projects;
