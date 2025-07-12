import BackgroundVideo from "../assets/videos/backgroundVideo.mp4";
const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 z-[-1]"
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-white text-center p-5 bg-blue bg-opacity-50 rounded-lg max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 ">
          Empowering Developers and Fostering Innovation.
        </h1>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-l rounded-r text-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
