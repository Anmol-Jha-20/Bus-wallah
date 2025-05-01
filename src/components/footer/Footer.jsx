import React from "react";
import RootLayout from "../../layout/RootLayout.jsx";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full h-auto bg-neutral-950 py-12">
      <RootLayout className="space-y-10">
        {/* Footer other content */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="col-span-2 space-y-8 md:pr-10 pr-0">
            <div className="space-y-3">
              <Link to="/" className="text-6xl text-primary font-bold">
                Bus Wallah
              </Link>

              <p className="text-sm text-neutral-500 font-normal">
                Bus wallah is all about booking ticket through online platform
                to make comfortable to the passenger.
              </p>
            </div>

            <div className="w-full flex items-center gap-x-5">
              <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                <FaInstagram className="w-5 h-5 text-neutral-50" />
              </div>
              <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                <FaFacebook className="w-5 h-5 text-neutral-50" />
              </div>
              <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                <FaYoutube className="w-5 h-5 text-neutral-50" />
              </div>
              <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                <FaXTwitter className="w-5 h-5 text-neutral-50" />
              </div>
            </div>
          </div>

          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold">
              Quick Links
            </h1>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                About Us
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                My Account
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Reserve your ticket
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Create your account
              </Link>
            </div>
          </div>
          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold">
              Top Reserved Routes
            </h1>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Kathmandu-Pokhara
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Pokhara-Mustang
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Kathmandu-chitwan
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Kathmandu-Lumbini
              </Link>
            </div>
          </div>

          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold">
              Support Links
            </h1>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Help & support center
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                FaQs
              </Link>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-neutral-800/50" />

        {/* Copyright */}
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-neutral-600 font-normal">
            Copyright &copy; 2024. All rights reserved.
          </p>

          <div className="flex items-center gap-x-2">
            <div>
              <img
                src="/mastercard.png"
                alt="mastercard image"
                className="w-fit h-9 object-contain object-center"
              />
            </div>
            <div>
              <img
                src="/paypal.png"
                alt="mastercard image"
                className="w-fit h-9 object-contain object-center"
              />
            </div>
            <div>
              <img
                src="/creditcard.png"
                alt="mastercard image"
                className="w-fit h-9 object-contain object-center"
              />
            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default Footer;
