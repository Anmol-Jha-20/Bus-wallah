import React, { useState } from "react";
import PaymentMethod from "./payment/PaymentMethod";

function PassengerData() {
  const [pickupStation, setPickupStation] = useState("");
  return (
    <div className="w-full col-span-4 py-4 space-y-6">
      <h1 className="text-xl text-neutral-700 font-semibold">
        Passenger Information
      </h1>

      <div className="space-y-7">
        <div className="w-full space-y-2">
          <label
            htmlFor="fullname"
            className="text-sm text-neutral-500 font-medium"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="e.g. Anmol Jha"
            className="md:w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          />
        </div>

        <div className="w-full space-y-2">
          <label
            htmlFor="email"
            className="text-sm text-neutral-500 font-medium"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="Anmol@example.com"
            className="md:w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          />
        </div>

        <div className="w-full space-y-2">
          <label
            htmlFor="phone"
            className="text-sm text-neutral-500 font-medium"
          >
            Phone Number
          </label>
          <input
            type="number"
            placeholder="e.g. +91- 9999999999"
            className="md:w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          />
        </div>

        <div className="w-full space-y-2">
          <label
            htmlFor="altphone"
            className="text-sm text-neutral-500 font-medium"
          >
            Alternative Phone Number
          </label>
          <input
            type="number"
            placeholder="e.g. +91- 9999999999"
            className="md:w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          />
        </div>

        <div className="w-full space-y-2">
          <label className="text-sm text-neutral-500 font-medium">
            Pickup Station
          </label>

          <select
            value={pickupStation}
            onChange={(e) => setPickupStation(e.target.value)}
            className="md:w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          >
            <option value="" disabled>
              Choose Your Nearest Pickup Station
            </option>
            <option value="balaju">Balaju</option>
            <option value="swoyambhu">Swoyambhu</option>
            <option value="kanaki">Kanaki</option>
            <option value="checkpost">Checkpost</option>
          </select>
        </div>
      </div>

      {/* Payment method */}
      <PaymentMethod />
    </div>
  );
}

export default PassengerData;
