import MissionSection from "../components/MissionSection";

const VisionAndMission = () => {
  return (
    <div>
      <section className="bg-gray-50">
        <h2 className=" px-4 py-4 text-center bg-gray-50 font-semibold text-black-700 text-2xl lg:text-4xl z-10 ">
          <span className="text-[#4285F4] font-bold">GDG ASU </span>
          Mission and Vision
        </h2>
        <h5 className=" text-center mt-3 text-gray-600 text-base sm:text-s md:text-lg max-w-2xl mx-auto">
          Here's how we bring our passion to life, especially when preparing for our exciting events and study jams:
        </h5>
        <div className="pl-50 pr-50 bg-gray-50">
          <MissionSection />
        </div>
      </section>
    </div>
  );
};

export default VisionAndMission;
