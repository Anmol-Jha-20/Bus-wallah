import React from "react";
import TopLayout from "../../../layout/toppage/TopLayout.jsx";
import RootLayout from "../../../layout/RootLayout";
import { Link } from "react-router-dom";
import WarningAlert from "../../../components/alertmessage/WarningAlert.jsx";
import BusSeat from "./seat/busseat/BusSeat.jsx";
import ToggleBtn from "../../../components/togglebtn/ToggleBtn.jsx";
import Amenities from "./amenities/Amenities.jsx";
import ReservationPolicy from "./reservationpolicy/ReservationPolicy.jsx";
import BusImage from "./busimage/BusImage.jsx";

function Detail() {
  const message = (
    <>
      One individual only can book 10 seats. If you want to book more than 10
      seats, Please{" "}
      <Link to={"/support-team"} className="text-yellow-700 font-medium">
        Contact our support team.
      </Link>
    </>
  );
  return (
    <div className="w-full space-y-12 pb-16">
      <TopLayout
        bgImg={
          "https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"
        }
        title={"Bus Details"}
      />

      <RootLayout className="space-y-12 w-full pb-16">
        {/* Seat layout and selection action detail */}
        <div className="w-full space-y-8">
          <WarningAlert message={message} />

          {/* Seat Layout */}
          <BusSeat />
        </div>

        {/* Bus Detail */}
        <div className="w-full flex items-center justify-center flex-col gap-8 text-center"></div>

        {/* Short description about the bus */}
        <p className="text-base text-neutral-500 font-normal text-justify">
          This is just a sample text for the demo purpose. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Voluptatibus doloremque magnam
          rerum omnis voluptatum necessitatibus quidem officia quam asperiores?
          Sequi maxime sed vel.{" "}
          <span className="text-lg text-neutral-600 font-medium ml-2">
            Want to see more about the bus?
          </span>
        </p>

        {/* Buttons */}
        <div className="w-full flex items-center justify-center gap-6 flex-col px-2">
          <ToggleBtn
            buttonText={"See Bus Details"}
            buttonTextHidden={"Hide Bus Details"}
          >
            <div className="w-full space-y-10">
              {/* reservation policy and amenities */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                {/* Amenities */}
                <Amenities />
                {/* Reservation policy */}
                <ReservationPolicy />
              </div>

              <BusImage />
            </div>
          </ToggleBtn>
        </div>
      </RootLayout>
    </div>
  );
}

export default Detail;
