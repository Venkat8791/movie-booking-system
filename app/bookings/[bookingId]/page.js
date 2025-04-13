import { getBooking } from "@/app/_lib/booking-data-service";
import { MessageCircle, XCircle } from "lucide-react";
import Image from "next/image";

export default async function page({ params }) {
  const { bookingId } = await params;
  const bookingDetails = await getBooking(bookingId);
  const daytime = parseInt(
    bookingDetails?.showDetailsDTO?.showTimeName.split(":")[0]
  );
  return (
    <div>
      <div className="bg-green-100 flex items-center justify-center p-4  rounded">
        <p className="text-green-500 text-3xl"> Thank you for your booking!</p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl ">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3 mb-4 sm:mb-0">
            <Image
              alt={bookingDetails?.movie?.title}
              src={bookingDetails?.movie?.posterUrl}
              width={100}
              height={400}
              className="object-cover rounded"
            />
          </div>
          <div className="sm:w-2/3 sm:pl-6 flex flex-col justify-start">
            <div>
              <p className="text-xl font-bold">
                {bookingDetails?.movie?.title}
              </p>
              <p className="text-gray-600 mt-1">
                {bookingDetails?.movie?.language}
              </p>
              <p className="text-gray-600 mt-1">
                {bookingDetails?.showDetailsDTO?.showTimeName}{" "}
                {daytime < 12 ? "AM" : "PM"}
              </p>
              <p className="text-sm text-gray-500">
                {bookingDetails?.showDetailsDTO?.cinemaName},{" "}
                {bookingDetails?.showDetailsDTO?.location}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-lg uppercase font-semibold">
                {bookingDetails?.showDetailsDTO?.screenName}
              </p>
              <p className="font-semibold">Seats:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {bookingDetails?.seatNumbers?.map((seatNumber) => (
                  <span
                    key={seatNumber}
                    className="border border-gray-300 px-3 py-1 rounded-md text-sm bg-gray-100"
                  >
                    {seatNumber}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-6 pt-4 flex justify-between items-center">
          <span className="text-lg font-medium">Total Amount</span>
          <span className="text-xl font-bold text-green-600">
            ₹{bookingDetails?.totalPrice}
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl flex sm:flex-row flex-col ">
        <div className="w-full sm:w-1/2 flex justify-center">
          <button className="flex items-center text-red-500 hover:text-red-700">
            <XCircle className="w-5 h-5 mr-1" />
            Cancel Booking
          </button>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center">
          <button className="flex items-center text-blue-500 hover:text-blue-700">
            <MessageCircle className="w-5 h-5 mr-1" />
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
