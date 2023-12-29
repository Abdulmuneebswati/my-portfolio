// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Shahmir Minhas',
    image: 'images/shahmir.jfif',
    designation: 'React JS | NEXT JS | Node | GraphQL',
    view: 'Hey everyone! I wanted to take a moment to recommend Abdul Muneeb Swati for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Muneeb is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟',
    linkednURL: 'https://www.linkedin.com/in/shahmir-minhas/',
  },
  {
    id: 3,
    name: 'Muhammad Ullah',
    image: 'images/muhammad.jpeg',
    designation: 'MERN Stack Developer at Productbox',
    view: 'I highly recommend Muneeb  for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.',
    linkednURL: 'https://www.linkedin.com/in/muhammadullahafridi/',
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
