import React from "react";
import RootLayout from "../../../layout/RootLayout.jsx";
import TopSearchCard from "../../../components/topsearch/TopSearchCard.jsx";

function TopSearch() {
  return (
    <RootLayout className="space-y-12">
      <div className="w-full flex items-center justify-center text-center">
        <h1 className="text-3xl text-neutral-800 font-bold">
          Top Search <span className="text-primary">Routes</span>
        </h1>
      </div>

      {/* Top Search tickets routes card */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <TopSearchCard
          routeFrom={"Kathmandu"}
          routeTo={"Pyuthan"}
          timeDuration={"10 hrs"}
          price={1600}
        />
        <TopSearchCard
          routeFrom={"Pokhara"}
          routeTo={"Kamalamai"}
          timeDuration={"8 hrs"}
          price={1500}
        />
        <TopSearchCard
          routeFrom={"Kathmandu"}
          routeTo={"Lumbini"}
          timeDuration={"12 hrs"}
          price={2200}
        />
        <TopSearchCard
          routeFrom={"Kathmandu"}
          routeTo={"Chitwan"}
          timeDuration={"6 hrs"}
          price={1000}
        />
        <TopSearchCard
          routeFrom={"Pokhara"}
          routeTo={"Mustang"}
          timeDuration={"16 hrs"}
          price={2000}
        />
        <TopSearchCard
          routeFrom={"Pokhara"}
          routeTo={"Pyuthan"}
          timeDuration={"8 hrs"}
          price={1400}
        />
      </div>
    </RootLayout>
  );
}

export default TopSearch;
