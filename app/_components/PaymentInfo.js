import React from "react";

function PaymentInfo({ totalAmount }) {
  return (
    <div className="hidden md:block mt-1 p-2 shadow-[0_4px_4px_-2px_rgba(0,0,0,0.6)]">
      <p className="uppercase text-sm text-gray-400 font-semibold">
        Payment details
      </p>
      <div className="flex justify-between">
        <p>Sub Total</p>
        <p>$ {totalAmount}</p>
      </div>
      <div className="flex justify-between">
        <p>Grand Total</p>
        <p>$ {totalAmount}</p>
      </div>
    </div>
  );
}

export default PaymentInfo;
