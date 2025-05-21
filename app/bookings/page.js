"use client";
import { useEffect, useState } from "react";
import { getAllBookings } from "../_lib/booking-data-service";
import BookingsList from "../_components/BookingsList";
import { useAuth } from "../_context/AuthProvider";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();
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
  }, [isAuthenticated]);
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold px-4 mt-8 mb-4">My Bookings</h1>
      {loading ? (
        <p>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <BookingsList bookings={bookings} />
      )}
    </div>
  );
}
