import React from "react";
import { FaBus, FaCreditCard, FaMobileAlt, FaHeadset } from "react-icons/fa";

function Service() {
  return (
    <div className="w-full bg-white py-20 px-6 sm:px-10 lg:px-32">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
            Our Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            We offer a range of reliable and user-friendly services to make your
            bus travel experience smooth and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Service Card 1 */}
          <div className="flex flex-col items-center p-6 border border-neutral-200 rounded-2xl shadow hover:shadow-md transition">
            <FaBus className="text-primary text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-neutral-800">
              Wide Bus Network
            </h3>
            <p className="text-neutral-600 mt-2 text-sm text-center">
              Book buses to major cities across Nepal with trusted travel
              partners.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="flex flex-col items-center p-6 border border-neutral-200 rounded-2xl shadow hover:shadow-md transition">
            <FaCreditCard className="text-primary text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-neutral-800">
              Secure Payments
            </h3>
            <p className="text-neutral-600 mt-2 text-sm text-center">
              Multiple payment methods with fast and secure checkout.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="flex flex-col items-center p-6 border border-neutral-200 rounded-2xl shadow hover:shadow-md transition">
            <FaMobileAlt className="text-primary text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-neutral-800">
              Mobile Friendly
            </h3>
            <p className="text-neutral-600 mt-2 text-sm text-center">
              Book your tickets from any device, anytime, on the go.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="flex flex-col items-center p-6 border border-neutral-200 rounded-2xl shadow hover:shadow-md transition">
            <FaHeadset className="text-primary text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-neutral-800">
              24/7 Support
            </h3>
            <p className="text-neutral-600 mt-2 text-sm text-center">
              Dedicated customer service to assist you at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
