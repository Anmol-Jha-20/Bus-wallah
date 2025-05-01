import React from "react";
import RootLayout from "../../../layout/RootLayout";
import TopLayout from "../../../layout/toppage/TopLayout";
import PassengerData from "./passengerdata/PassengerData";
import BookingStatus from "./bookingstatus/BookingStatus";

function Checkout() {
  return (
    <div className="w-full space-y-12 pb-16">
      <TopLayout
        bgImg={
          "https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"
        }
        title={"Checkout"}
      />

      <RootLayout className="space-y-12 w-full pb-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-7 items-start gap-10 lg:gap-20 relative">
          {/* Passenger Detail */}
          <div className="lg:col-span-4">
            <PassengerData />
          </div>

          {/* Ticket Report Status */}
          <div className="lg:col-span-3">
            <BookingStatus />
          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default Checkout;
