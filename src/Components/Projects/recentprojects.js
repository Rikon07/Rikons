 import DailyCommitBannerLight from '/public/Project Screenshots/DailyCommit Banner Light.png';
 import DCAllArticles from '/public/Project Screenshots/DC All Articles.jpeg';

 const projects = [
  {
     id: "the-dailycommit",
    name: "The DailyCommit",
    image: "https://i.ibb.co.com/bMBYqW82/The-Daily-Commit-Banner.png",
    screenshots: [
      "https://i.ibb.co.com/bMBYqW82/The-Daily-Commit-Banner.png",
      {DailyCommitBannerLight}, {DCAllArticles}

    ],
    live: "https://the-daily-commit-c5e84.web.app/",
    github: "https://github.com/Rikon07/The-DailyCommit",
    stack: ["React", "Tailwind", "Javascript", "Firebase", "Vercel", "ReactRouter", "Motion", "Mongo", "Express", "Nodejs", "Tanstack", "JWT", "Stripe"],
    description: "A modern, fullstack Computer Science news platform for developers, by developers.",
  },
  {
    name: "BooKitsu",
    id: "bookitsu",
    image: "https://i.ibb.co.com/1Jp34ryC/Boo-Kitsu-Banner-Dark.png",
     screenshots: [
      "https://i.ibb.co.com/1Jp34ryC/Boo-Kitsu-Banner-Dark.png",
    ],
    live: "https://bookitsu-library-007.web.app/",
    github: "https://github.com/Rikon07/BooKitsu",
    stack: ["React", "Tailwind", "Javascript", "Firebase", "ReactRouter", "Vercel", "Mongo", "Express", "Nodejs", "JWT"],
    description: "BooKitsu is a beautifully crafted frontend for a modern school library management system.",
  },
  {
    
    id: "rykhub",
    name: "RykHub",
    image: "https://i.ibb.co.com/YTZpPB8y/Ryk-Hub-Banner-dark.png",
    screenshots: [
      "https://i.ibb.co.com/YTZpPB8y/Ryk-Hub-Banner-dark.png",
    ],
    live: "https://rykhub-007.web.app/",
    github: "https://github.com/Rikon07/RykHub",
    stack: ["React", "Tailwind", "Javascript", "Firebase", "ReactRouter", "Vercel", "Aos", "Mongo", "Express", "Nodejs"],
    description: "RykHub is a full-stack freelance task marketplace web app where users can post, bid on, and manage tasks.",
  },
];
export default projects;