import FirstImage from "../assets/images/1.png";
import SecondImage from "../assets/images/2.png";
import ThirdImage from "../assets/images/3.png";
import FourthImage from "../assets/images/4.png";
import FifthImage from "../assets/images/5.png";
import SixthImage from "../assets/images/6.png";
import SeventhImage from "../assets/images/7.png";
import EighthImage from "../assets/images/8.png";

const dataSetone = [
  {
    imageSrc: FirstImage,
    heading: "Building Our Team:",
    paragraph:
      "It all begins with people! We carefully form a skilled team comprised of individuals who are not only eager to learn and grow but are also deeply committed to leaving a good impact in the community. Our diverse talents and shared enthusiasm are the backbone of everything we do.",
  },
  {
    imageSrc: SecondImage,
    heading: "Brainstorming Brilliance:",
    paragraph:
      "For every event or study jam, the journey kicks off with an energetic brainstorming session. This is our creative hub where we gather, share, and discuss a multitude of ideas. No idea is too big or too small – we believe in collaborative ideation to spark innovation.",
  },
  {
    imageSrc: ThirdImage,
    heading: "Refining Our Vision: ",
    paragraph:
      "Once the ideas are flowing, we get down to business. Our team dedicates hours to finalize these ideas and choose the best fit. This involves careful consideration, research, and collaborative decision-making to ensure our events are impactful and relevant.",
  },
  {
    imageSrc: FourthImage,
    heading: "Listening to Our Community: ",
    paragraph:
      "Were always tuned in! A crucial step in our planning is to actively see what the community around us is willing to learn and what the latest technologies are. This ensures our content is always fresh, in-demand, and truly valuable to our audience.",
  },
];
const dataSettwo =[
  {
    imageSrc: FifthImage,
    heading: "Team Alignment & Synergy:",
    paragraph:
      "After gathering insights and shaping our ideas, we meet with the team to share ideas comprehensively. This ensures everyone is on the same page, understands their roles, and is excited about the upcoming initiatives. Team synergy is key to our success!",
  },
  {
    imageSrc: SixthImage,
    heading: "Connecting & Engaging Online: ",
    paragraph:
      "We love to connect! We put a lot of effort into making social media engagement branding stories and posts to engage the community and students across our universities and from other universities as well. Our aim is to create buzz, inform, and invite everyone to join our learning journey.",
  },
  {
    imageSrc: SeventhImage,
    heading: "Our Discord Hub:",
    paragraph:
      "Support & Resources. We believe in continuous support. That is why we maintain an active Discord server for help, resources, and to share the materials of our study jams and events. It is a friendly space where participants can ask questions, find additional learning materials, and connect with peers and mentors.",
  },
  {
    imageSrc: EighthImage,
    heading: "Comprehensive & Rewarding Study Jams: ",
    paragraph:
      "Our pride and joy are our comprehensive Study Jams with specific topics and activities. These are not just passive learning experiences; they are designed to be interactive and engaging, offering hands-on learning and practical application. The best part? They often end up having a certificate, and we ensure everyone enjoys their journey through learning, making it a truly rewarding experience for all participants.",
  },
]
const MissionSection = () => {
  return (
    <div>
      {dataSetone.map((item, index) => (
        <div key={index} className="flex items-center space-between transform transition-transform duration-300 hover:scale-104">
          <img
            className="flex h-45 w-45"
            src={item.imageSrc}
            alt={`Team item ${index}`}
          />
          <div className="px-6">
            <h3 className="pb-6 pu-6 text-gray-700 text-xl font-bold ">
              {item.heading}
            </h3>
            <p className="text-gray-700">{item.paragraph}</p>
          </div>
        </div>
      ))}
      {dataSettwo.map((item, index) => (
        <div key={index} className="flex items-center space-between transform transition-transform duration-300 hover:scale-104">
         
          <div className="px-6">
            <h3 className="pb-6 pu-6 text-gray-700 text-xl font-bold ">
              {item.heading}
            </h3>
            <p className="text-gray-700">{item.paragraph}</p>
          </div>
           <img
            className="flex h-45 w-45"
            src={item.imageSrc}
            alt={`Team item ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default MissionSection;
