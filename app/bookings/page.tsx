"use client";
import { useEffect, useState } from "react";
import { getAllBookings } from "../_lib/booking-data-service";
import BookingsList from "../_components/BookingsList";
import { useAuth } from "../_context/AuthProvider";
import { NextPage } from "next";
import { BookingDetailsDTO } from "../types/booking";

const BookingsPage: NextPage = () => {
  const [bookings, setBookings] = useState<BookingDetailsDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const { auth } = useAuth();
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getAllBookings();
        setBookings(res);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, [auth.isAuthenticated]);

  let content;
  if (loading) {
    content = <p>Loading bookings...</p>;
  } else if (bookings.length === 0) {
    content = <p>No bookings found.</p>;
  } else {
    content = <BookingsList bookings={bookings} />;
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold px-4 mt-8 mb-4">My Bookings</h1>
      {content}
    </div>
  );
};
export default BookingsPage;
