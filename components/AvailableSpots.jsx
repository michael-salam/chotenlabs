const bookedClients = 0;

const AvailableSpots = () => {
  return (
    <div className="flex items-center gap-4 w-fit text-sm text-bg-dark bg-red-200 border-red-600 border mb-8 font-bold rounded-md px-4 py-2">
      <span>80% off for our next 5 clients</span>
      <div className="flex items-center gap-4">
        <span className="text-xs font-semibold">
          {5 - bookedClients} spot{5 - bookedClients > 1 && "s"} left
        </span>
        <div className="flex items-center gap-3">
          {[...Array(5).keys()].map((spot, spotIndex) => (
            <span
              key={spotIndex}
              className={`${
                spotIndex + 1 > bookedClients && "bg-transparent pulse"
              } h-2 w-2 rounded-full bg-bg-dark outline outline-1 outline-bg-dark outline-offset-2`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableSpots;
