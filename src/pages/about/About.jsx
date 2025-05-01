import React from "react";

function About() {
  return (
    <div className="w-full bg-neutral-950 py-20 px-6 sm:px-10 lg:px-32">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-50 font-bold">
          About Our Bus Booking Platform
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
          Welcome to{" "}
          <span className="text-primary font-semibold">Bus Wallah</span>, your
          one-stop solution for hassle-free bus ticket booking across Nepal. Our
          mission is to make intercity travel easier, faster, and more reliable
          by connecting passengers with trusted bus operators through a seamless
          digital platform.
        </p>

        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
          Whether you're planning a trip to Pokhara, Chitwan, Pyuthan, or
          Kathmandu, we offer real-time seat availability, instant confirmation,
          digital invoices, and secure payment options. Our user-friendly
          interface ensures that booking your journey takes just a few clicks —
          anytime, anywhere.
        </p>

        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
          Trusted by thousands of travelers, we are committed to enhancing your
          travel experience with 24/7 customer support and a growing network of
          premium transport partners.
        </p>
      </div>
    </div>
  );
}

export default About;
