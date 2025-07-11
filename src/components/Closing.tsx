import UniversityImage from "../assets/images/university.png";
import ClosingRightShape from "../assets/images/closingRightshape.png";
const Closing = () => {
  return (
    <div className="bg-gray-50 ">
      <img
        className="absolute right-10 h-40 w-40 md:h-50 md:w-50"
        src={ClosingRightShape}
      />
      <img
        className="absolute left-10  rotate-180  h-40 w-40 md:h-50 md:w-50"
        src={ClosingRightShape}
      />
      <div className="flex-col items-center justify-center">
        <img className=" w-96 h-[160px] mx-auto" src={UniversityImage} />
        <p className="mt-3 text-gray-600 md:text-lg max-w-xl mx-auto">
          We appreciate you visiting. Stay connected with us on social media!
        </p>
      </div>
    </div>
  );
};

export default Closing;
