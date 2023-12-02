const background = [
  {
    eduCards: [
      {
        id: 0,
        title: 'Hazara University, Mansehra',
        degree: 'BS, Software Engineering',
        detail:
          "Bachelor's Degree in Software Engineering from Hazara University, Mansehra.",
        year: '2019-2023',
      },
      {
        id: 1,
        title: 'Punjab Group Of College',
        degree: 'HSSC, Pre Engineering',
        detail:
          'Completed FSC part 1 and part 2 in Pre-Engineering from Punjab Group Of College.',
        year: '2016-2018',
      },
      {
        id: 2,
        title: 'Hazara Convent Public School',
        degree: 'SSC, Science Subjects',
        detail:
          'Completed SSC part 1 and part 2 in Science subjects from Hazara Convent Public School Mansehra',
        year: '2014-2016',
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: 'Product Box',
        role: 'Associate Full Stack Engineer',
        url: 'https://productbox.dev',
        desc: '',
        year: '04/2023 - Present',
        location: 'Peshawar, Pakistan',
      },
      {
        id: 2,
        title: 'JMM Technologies',
        role: 'MERN Stack Developer',
        url: 'https://jmm.ltd/',
        desc: 'As a frontend developer, I use React, Next & Node to build  web applications.',
        year: '10/2022 - 04/2023',
        location: 'Peshawar, Pakistan',
      },
      {
        id: 3,
        title: 'D Five',
        role: 'Frontend Developer',
        url: '',
        desc: 'As a frontend developer, I use HTML,CSS,BOOTSTRAP,SASS & JavaScript to build user interfaces for web applications.',
        year: '03/2022 - 10/2022',
        location: 'Mansehra, Pakistan',
      },
    ],
  },
];


export default function handler(req, res) {
    res.status(200).json(background)
}
