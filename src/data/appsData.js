const appsData = [
  {
    id: 1,
    image: "/assets/demo-app (1).webp",
    title: "Spotify - Music & Podcasts",
    companyName: "Spotify AB",
    description: "Spotify is a digital music service that gives you access to millions of songs. With Spotify, you can listen to music for free, or upgrade to Spotify Premium for an ad-free experience with better sound quality and the ability to download music for offline listening. Discover new music, create playlists, and share your favorite tracks with friends. Spotify also offers podcasts, audiobooks, and curated playlists tailored to your listening habits.",
    size: 45,
    reviews: 52340,
    ratingAvg: 4.5,
    downloads: 1500000,
    ratings: [
      { name: "1 star", count: 2500 },
      { name: "2 star", count: 3200 },
      { name: "3 star", count: 8100 },
      { name: "4 star", count: 15000 },
      { name: "5 star", count: 23540 }
    ]
  },
  {
    id: 2,
    image: "/assets/demo-app (2).webp",
    title: "WhatsApp Messenger",
    companyName: "Meta Platforms",
    description: "WhatsApp Messenger is a FREE messaging app available for smartphones. WhatsApp uses your phone's Internet connection to let you message and call friends and family. Switch from SMS to WhatsApp to send and receive messages, calls, photos, videos, documents, and Voice Messages. WhatsApp supports end-to-end encryption so your conversations remain private and secure.",
    size: 62,
    reviews: 98120,
    ratingAvg: 4.2,
    downloads: 5000000,
    ratings: [
      { name: "1 star", count: 8500 },
      { name: "2 star", count: 6200 },
      { name: "3 star", count: 12100 },
      { name: "4 star", count: 28000 },
      { name: "5 star", count: 43320 }
    ]
  },
  {
    id: 3,
    image: "/assets/demo-app (3).webp",
    title: "Instagram",
    companyName: "Meta Platforms",
    description: "Instagram is a photo and video sharing social networking service. It allows users to upload photos and videos, apply filters and effects, share them on their profile or via Stories and Reels, and interact with other users through likes, comments, and direct messages. Instagram also features a powerful Explore page to discover new content and creators.",
    size: 78,
    reviews: 134500,
    ratingAvg: 4.3,
    downloads: 3200000,
    ratings: [
      { name: "1 star", count: 12000 },
      { name: "2 star", count: 9800 },
      { name: "3 star", count: 18500 },
      { name: "4 star", count: 42000 },
      { name: "5 star", count: 52200 }
    ]
  },
  {
    id: 4,
    image: "/assets/demo-app (4).webp",
    title: "Notion - Notes & Projects",
    companyName: "Notion Labs Inc",
    description: "Notion is an all-in-one workspace for your notes, tasks, wikis, and databases. It combines note-taking, task management, and project planning into one powerful tool. Whether you are organizing personal goals, collaborating with a team, or building a knowledge base, Notion provides flexible building blocks to customize your workflow exactly the way you want.",
    size: 34,
    reviews: 28900,
    ratingAvg: 4.7,
    downloads: 890000,
    ratings: [
      { name: "1 star", count: 1200 },
      { name: "2 star", count: 1800 },
      { name: "3 star", count: 4500 },
      { name: "4 star", count: 9400 },
      { name: "5 star", count: 12000 }
    ]
  },
  {
    id: 5,
    image: "/assets/demo-app (5).webp",
    title: "Slack - Business Messaging",
    companyName: "Salesforce Inc",
    description: "Slack brings team communication and collaboration into one place so you can get more work done. It replaces email inside your company with a messaging platform that organizes conversations into channels. Share files, integrate with tools you already use, and search through everything with powerful built-in search. Slack connects teams with the information they need.",
    size: 52,
    reviews: 41200,
    ratingAvg: 4.4,
    downloads: 1200000,
    ratings: [
      { name: "1 star", count: 3100 },
      { name: "2 star", count: 4200 },
      { name: "3 star", count: 7800 },
      { name: "4 star", count: 12100 },
      { name: "5 star", count: 14000 }
    ]
  },
  {
    id: 6,
    image: "/assets/demo-app (6).webp",
    title: "Figma - Design Tool",
    companyName: "Figma Inc",
    description: "Figma is a collaborative interface design tool that enables teams to design, prototype, and gather feedback all in one place. With real-time collaboration, auto-layout, and a powerful component system, Figma streamlines the entire design process. Whether you are a solo designer or part of a large team, Figma helps you create beautiful, functional designs faster.",
    size: 41,
    reviews: 19800,
    ratingAvg: 4.8,
    downloads: 670000,
    ratings: [
      { name: "1 star", count: 800 },
      { name: "2 star", count: 1200 },
      { name: "3 star", count: 2800 },
      { name: "4 star", count: 6500 },
      { name: "5 star", count: 8500 }
    ]
  },
  {
    id: 7,
    image: "/assets/demo-app (1).webp",
    title: "YouTube Music",
    companyName: "Google LLC",
    description: "YouTube Music is a music streaming service developed by YouTube. It provides a tailored interface for the service oriented towards music streaming, allowing users to browse through songs and music videos on YouTube based on genres, playlists, and recommendations. It offers both a free ad-supported version and a premium subscription with offline playback and background listening.",
    size: 38,
    reviews: 67500,
    ratingAvg: 4.1,
    downloads: 2100000,
    ratings: [
      { name: "1 star", count: 7200 },
      { name: "2 star", count: 5800 },
      { name: "3 star", count: 11200 },
      { name: "4 star", count: 19800 },
      { name: "5 star", count: 23500 }
    ]
  },
  {
    id: 8,
    image: "/assets/demo-app (2).webp",
    title: "Telegram Messenger",
    companyName: "Telegram FZ-LLC",
    description: "Telegram is a cloud-based mobile and desktop messaging app with a focus on security and speed. It offers fast, reliable messaging with end-to-end encryption for secret chats, self-destructing messages, large group support up to 200,000 members, channels for broadcasting to unlimited audiences, and powerful file sharing capabilities with no size limits.",
    size: 55,
    reviews: 78400,
    ratingAvg: 4.6,
    downloads: 2800000,
    ratings: [
      { name: "1 star", count: 4500 },
      { name: "2 star", count: 5100 },
      { name: "3 star", count: 10200 },
      { name: "4 star", count: 24600 },
      { name: "5 star", count: 34000 }
    ]
  },
  {
    id: 9,
    image: "/assets/demo-app (3).webp",
    title: "TikTok - Videos & Trends",
    companyName: "ByteDance Ltd",
    description: "TikTok is the destination for short-form mobile videos. Its mission is to inspire creativity and bring joy. TikTok enables everyone to be a creator, and encourages users to share their passion and creative expression through their videos. The platform is built to help imaginations thrive with music, stickers, filters, and special effects.",
    size: 95,
    reviews: 189000,
    ratingAvg: 4.0,
    downloads: 4500000,
    ratings: [
      { name: "1 star", count: 22000 },
      { name: "2 star", count: 15800 },
      { name: "3 star", count: 28500 },
      { name: "4 star", count: 52000 },
      { name: "5 star", count: 70700 }
    ]
  },
  {
    id: 10,
    image: "/assets/demo-app (4).webp",
    title: "VS Code Editor",
    companyName: "Microsoft Corp",
    description: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes. VS Code offers intelligent code completion, debugging, Git integration, and terminal support all in one elegant package.",
    size: 28,
    reviews: 35600,
    ratingAvg: 4.9,
    downloads: 950000,
    ratings: [
      { name: "1 star", count: 900 },
      { name: "2 star", count: 1300 },
      { name: "3 star", count: 3800 },
      { name: "4 star", count: 11200 },
      { name: "5 star", count: 18400 }
    ]
  },
  {
    id: 11,
    image: "/assets/demo-app (5).webp",
    title: "Discord - Chat & Calls",
    companyName: "Discord Inc",
    description: "Discord is a VoIP and instant messaging social platform. Users have the ability to communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities called servers. Discord is popular among gaming communities but has expanded to education, business, and social communities worldwide.",
    size: 68,
    reviews: 56700,
    ratingAvg: 4.3,
    downloads: 1800000,
    ratings: [
      { name: "1 star", count: 5200 },
      { name: "2 star", count: 4800 },
      { name: "3 star", count: 9100 },
      { name: "4 star", count: 16800 },
      { name: "5 star", count: 20800 }
    ]
  },
  {
    id: 12,
    image: "/assets/demo-app (6).webp",
    title: "Canva - Design Anything",
    companyName: "Canva Pty Ltd",
    description: "Canva is a graphic design platform that is used to create social media graphics, presentations, posters, documents, and other visual content. It provides drag-and-drop tools, professional templates, and an extensive library of images, illustrations, and fonts. Canva makes it easy for anyone to create beautiful designs without needing professional design skills.",
    size: 43,
    reviews: 42300,
    ratingAvg: 4.6,
    downloads: 1350000,
    ratings: [
      { name: "1 star", count: 2800 },
      { name: "2 star", count: 3500 },
      { name: "3 star", count: 7200 },
      { name: "4 star", count: 13800 },
      { name: "5 star", count: 15000 }
    ]
  },
  {
    id: 13,
    image: "/assets/demo-app (1).webp",
    title: "Zoom Cloud Meetings",
    companyName: "Zoom Video Communications",
    description: "Zoom is the leader in modern enterprise video communications with a reliable and easy cloud platform for video and audio conferencing, chat, and webinars. Features include HD video and audio, cross-platform messaging, file sharing, screen sharing, recording, virtual backgrounds, and breakout rooms for effective collaboration.",
    size: 71,
    reviews: 88900,
    ratingAvg: 4.2,
    downloads: 3100000,
    ratings: [
      { name: "1 star", count: 8900 },
      { name: "2 star", count: 7200 },
      { name: "3 star", count: 14500 },
      { name: "4 star", count: 26300 },
      { name: "5 star", count: 32000 }
    ]
  },
  {
    id: 14,
    image: "/assets/demo-app (3).webp",
    title: "Trello - Project Manager",
    companyName: "Atlassian",
    description: "Trello is the visual tool that empowers your team to manage any type of project, workflow, or task tracking. Add files, checklists, or even automation: customize it all for how your team works best. Just sign up, create a board, and you are off! Trello uses boards, lists, and cards to help you organize and prioritize your projects in a fun and flexible way.",
    size: 29,
    reviews: 21400,
    ratingAvg: 4.5,
    downloads: 780000,
    ratings: [
      { name: "1 star", count: 1500 },
      { name: "2 star", count: 2100 },
      { name: "3 star", count: 3800 },
      { name: "4 star", count: 6500 },
      { name: "5 star", count: 7500 }
    ]
  },
  {
    id: 15,
    image: "/assets/demo-app (5).webp",
    title: "Netflix - Stream Movies",
    companyName: "Netflix Inc",
    description: "Netflix is the world's leading subscription streaming service offering a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial. There is always something new to discover and new TV shows and movies are added every week.",
    size: 88,
    reviews: 156000,
    ratingAvg: 4.4,
    downloads: 4200000,
    ratings: [
      { name: "1 star", count: 14000 },
      { name: "2 star", count: 11500 },
      { name: "3 star", count: 22000 },
      { name: "4 star", count: 48500 },
      { name: "5 star", count: 60000 }
    ]
  }
];

export default appsData;
