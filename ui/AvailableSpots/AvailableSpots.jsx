import "./available-spots.css";

const bookedClients = 1;

const AvailableSpots = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center text-sm sm:gap-4 w-fit mx-auto text-bg-dark bg-gradient-to-b from-red-200 to-red-300 mb-16 rounded-full px-6 py-2">
      <span>80% off for our next 5 clients</span>
      <div className="flex items-center gap-4">
        <span className="font-semibold">
          {5 - bookedClients} spot{5 - bookedClients > 1 && "s"} left
        </span>
        <div className="flex items-center gap-3">
          {[...Array(5).keys()].map((spot, spotIndex) => (
            <span
              key={spotIndex}
              className={`${
                spotIndex + 1 > bookedClients && "bg-transparent ping-animation"
              } h-2 w-2 rounded-full bg-bg-dark outline outline-1 outline-bg-dark outline-offset-2`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableSpots;
