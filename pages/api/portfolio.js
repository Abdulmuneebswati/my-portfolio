const portfolio = [
  {
    id: 0,
    projectName: 'JMM Technologies',
    url: 'https://jmm.ltd/',
    image: 'projects/jmm.png',
    projectDetail:
      'JMM Technologies is a start-up turned technology company with extensive years of experience delivering digital solutions. As a fast-growing tech firm, we help diverse businesses and organizations. Our expertise in innovative, state-of-the-art digital services accelerates business growth and enhances customer impact.',
    technologiesUsed: [
      {
        tech: 'ReactJS',
      },
      {
        tech: 'Ant Design',
      },
      {
        tech: 'TailwindCSS',
      },
    ],
  },
  {
    id: 1,
    projectName: 'NewSeat',
    url: 'https://newseat.co/',
    image: 'projects/NewSeat.png',
    projectDetail:
      'Chatbot recruiting built for careers, not jobs Recruiting Chatbot for hiring Office Professionals using conversational AI ',
    technologiesUsed: [
      {
        tech: 'ReactJS',
      },
      {
        tech: 'Node JS',
      },
      {
        tech: 'Ant Design',
      },
      {
        tech: 'TailwindCSS',
      },
    ],
  },
  {
    id: 2,
    projectName: 'Author House',
    url: 'https://authorshouse.net/',
    image: 'projects/AuthorHouse.png',
    projectDetail:
      'Author House Project is a dynamic platform revolutionizing the literary landscape, offering a curated collection of books directly from diverse authors. With dedicated portals for both students and authors, it provides a seamless experience for book enthusiasts and aspiring writers alike. Authors can not only showcase their works but also engage with students through specialized classes, creating a vibrant community within the realms of literature and education.',
    technologiesUsed: [
      {
        tech: 'ReactJS',
      },
      {
        tech: 'Node JS',
      },
      {
        tech: 'Ant Design',
      },
      {
        tech: 'TailwindCSS',
      },
    ],
  },
  {
    id: 3,
    projectName: 'JMM ERP',
    url: 'https://jmmerp.com/userLogin',
    image: 'projects/ERP.png',
    projectDetail:
      "JMM ERP is the perfect all-in-one cloud-based ERP solution to automate your organization's data and connect all departments on a single platform. Our solution provides real-time, 24/7 technical support to manage enterprise functions and help businesses grow digitally.",
    technologiesUsed: [
      {
        tech: 'ReactJS',
      },
      {
        tech: 'Ant Design',
      },
      {
        tech: 'TailwindCSS',
      },
    ],
  },
//   {
//     id: 0,
//     projectName: 'Tojjar',
//     url: 'https://tojjar.jmmtest.com/',
//     image: 'projects/tojjar.png',
//     projectDetail:
//       'Tojjar is ecommerce website,  where you can open your own store and sell products of different brands!',
//     technologiesUsed: [
//       {
//         tech: 'Nextjs with SSR',
//       },
//       {
//         tech: 'Laravel',
//       },
//       {
//         tech: 'Ant Design',
//       },
//       {
//         tech: 'TailwindCSS',
//       },
//     ],
//   },
//   {
//     id: 1,
//     projectName: 'Otawix',
//     url: 'https://b2c.otawix.com/',
//     image: 'projects/otawix.png',
//     projectDetail:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!',
//     technologiesUsed: [
//       {
//         tech: 'NextJS',
//       },
//       {
//         tech: 'NodeJS',
//       },
//       {
//         tech: 'MUI',
//       },
//       {
//         tech: 'TailwindCSS',
//       },
//     ],
//   },
//   {
//     id: 2,
//     projectName: 'Spatay',
//     url: 'https://spatay.com/',
//     image: 'projects/spatay.png',
//     projectDetail:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!',
//     technologiesUsed: [
//       {
//         tech: 'ReactJS',
//       },
//       {
//         tech: 'NodeJS',
//       },
//       {
//         tech: 'Ant Design',
//       },
//       {
//         tech: 'TailwindCSS',
//       },
//     ],
//   },
  // {
  //     id: 2,
  //     projectName: "Culyte",
  //     url: "https://culyte.com",
  //     image: "projects/culyte.png",
  //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
  //     technologiesUsed: [
  //         {
  //             tech: "ReactJS"
  //         },
  //         {
  //             tech: "NodeJS"
  //         },
  //         {
  //             tech: "Ant Design"
  //         },
  //         {
  //             tech: "TailwindCSS"
  //         },
  //     ]
  // },
];
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
