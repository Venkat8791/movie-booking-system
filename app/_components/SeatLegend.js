import React from "react";

function SeatLegend() {
  return (
    <>
      <div className="flex flex-col items-center mb-6 mt-4">
        <div className="w-60 h-2 bg-gray-300 rounded-full shadow-inner transform scale-x-110"></div>
        <span className="text-sm text-gray-600 uppercase tracking-wide mb-2">
          All eyes this way please
        </span>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
        {/* Available */}
        <div className="flex items-center gap-2">
          <button className="w-5 h-5 border-1 border-green-400 bg-white rounded-sm"></button>
          <span className="text-sm text-gray-700">Available</span>
        </div>

        {/* Selected */}
        <div className="flex items-center gap-2">
          <button className="w-5 h-5 border-1 border-green-400 bg-green-400 rounded-sm"></button>
          <span className="text-sm text-gray-700">Selected</span>
        </div>

        {/* Booked */}
        <div className="flex items-center gap-2">
          <button className="w-5 h-5 border-1 border-white bg-gray-400 cursor-not-allowed rounded-sm"></button>
          <span className="text-sm text-gray-700">Booked</span>
        </div>
      </div>
    </>
  );
}

export default SeatLegend;
