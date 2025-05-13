const EventCard = ({
  title = "Event Title",
  imageSrc = "",
  description = "Event description",
  date = "dd/mm/yy",
  instructor = "Instructor Name",
  readMoreLabel = "Learn More",
  descriptionHeading = "Event Description",
  dateHeading = "Date and Time",
  instructorHeading = "",
  onReadMore = () => {},
}) => {
  return (
    <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl  p-4 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="rounded-2xl object-cover w-full h-full max-h-80"
          />
        )}
        <h2 className="text-center text-2xl font-semibold mt-4">{title}</h2>
      </div>

      <div className="flex-1 flex flex-col justify-center px-4">
        <h3 className="text-xl font-semibold mb-2">{descriptionHeading}</h3>
        <p className="text-gray-500 mb-4">{description}</p>

        <div className="mb-4">
          <h4 className="text-lg font-semibold">{dateHeading}</h4>
          <p className="text-gray-600">{date}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold">
            {instructorHeading?.length > 1 && (
              <h4 className="text-lg font-semibold">{instructorHeading}</h4>
            )}
          </h4>
          <p className="text-gray-600">
            {instructorHeading?.length > 1 && (
              <h4 className="text-lg font-semibold">{instructor}</h4>
            )}
          </p>
        </div>

        <button
          onClick={onReadMore}
          className="bg-[#2D7FFF] hover:bg-blue-700 text-white py-2 px-6 rounded-2xl self-start"
        >
          {readMoreLabel}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
