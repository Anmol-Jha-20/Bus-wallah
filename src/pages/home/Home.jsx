import React from "react";
import Hero from "./hero/Hero.jsx";
import Services from "./services/Services.jsx";
import TopSearch from "./topsearch/TopSearch.jsx";

function Home() {
  return (
    <div className="space-y-16 w-full min-h-screen pb-16">
      <Hero />

      {/* Services */}
      <Services />

      {/* Top Search */}
      <TopSearch />
    </div>
  );
}

export default Home;
