import React, { useRef } from "react";
import TopLayout from "../../../layout/toppage/TopLayout.jsx";
import RootLayout from "../../../layout/RootLayout.jsx";
import PassengerInvoice from "./passengerinvoice/PassengerInvoice.jsx";
import CompanyInvoice from "./company/CompanyInvoice.jsx";
import { toPng } from "html-to-image";
import download from "downloadjs";

function Invoice() {
  const invoiceRef = useRef(null);
  const handleDownload = async () => {
    if (invoiceRef.current === null) return;

    try {
      //convert the invoice car to an image
      const dataUrl = await toPng(invoiceRef.current);

      //download the image
      download(dataUrl, "invoice-report.png");
    } catch (error) {
      console.error("Error while downloading the invoice", error);
    }
  };
  return (
    <div className="w-full space-y-12 pb-16">
      <TopLayout
        bgImg={
          "https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"
        }
        title={"Collect your invoice"}
      />

      <RootLayout className="space-y-12 w-full pb-16">
        <div className="w-full flex items-center justify-center">
          {/* invoice card */}
          <div
            ref={invoiceRef}
            className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 bg-white rounded-3xl border border-neutral-200 shadow-sm relative"
          >
            {/* left side (for passenger) */}
            <PassengerInvoice />

            {/* Right side (for company) */}
            <CompanyInvoice />

            {/* Cut circle */}
            <div className="hidden lg:block absolute -top-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border"></div>
            <div className="hidden lg:block absolute -bottom-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border"></div>
          </div>
        </div>
        {/* download invoice card button */}
        <div className="w-full flex justify-center items-center">
          <button
            onClick={handleDownload}
            className="w-fit px-8 h-14 bg-primary text-neutral-50 font-bold text-lg rounded-lg"
          >
            Download Invoice
          </button>
        </div>
      </RootLayout>
    </div>
  );
}

export default Invoice;
