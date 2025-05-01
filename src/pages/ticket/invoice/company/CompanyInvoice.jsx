import React from "react";
import { FaPhone } from "react-icons/fa6";

function CompanyInvoice() {
  return (
    <div className="w-full col-span-1 border-dashed border-1-2 border-neutral-400 relative">
      <div className="w-full bg-primary px-4 py-5 tounded-tr-3xl">
        <h1 className="text-2xl text-neutral-50 font-bold text-center">
          Bus Ticket
        </h1>
      </div>

      <div className="w-full px-4 py-7 space-y-1">
        <p className="text-sm text-neutral-600 font-normal">Bill No.465</p>
        <p className="text-sm text-neutral-600 font-normal">Date: 2024-10-31</p>
        <p className="text-sm text-neutral-600 font-normal">
          Name: Ram Bdr. Ghale
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          From Kathmandu <span className="text-xs">(buspark)</span>
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          From Pyuthan <span className="text-xs">(chakchake)</span>
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Dept. Time: 06:15 Pm
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Seat No.: A2, A3, A4, B6
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Total Passenger: 04 Only
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Total Price: NPR 6400
        </p>
      </div>

      {/* right Bottom Section */}
      <div className="w-full bg-primary absolute bottom-0 right-0 rounded-br-3xl flex items-center justify-center px-5 py-1.5">
        <div className="flex items-center gap-x-2">
          <FaPhone className="w-3 h-3 text-neutral-100" />
          <p className="text-sm text-neutral-100 font-light">
            +977-98765688799
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyInvoice;
