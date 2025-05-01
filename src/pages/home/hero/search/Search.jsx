// import React from "react";
// import { motion } from "framer-motion";
// import { TbArrowsExchange } from "react-icons/tb";
// // import { FaMapMarkedAlt } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";

// function Search() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -800 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -800 }}
//       transition={{ duration: 1.5, ease: "easeOut" }}
//       className="w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-5"
//     >
//       <div className="w-full flex items-center gap-5 justify-between">
//         {/* From and to input section */}
//         <div className="w-[60%] flex items-center gap-5 relative">
//           {/* From */}
//           <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg">
//             <input
//               type="text"
//               placeholder="From"
//               className="flex-1 h-full border-none bg-transparent focus:outline-none"
//             />
//             <div className="w-5 h-5 text-neutral-400">
//               {/* <FaMapMarkedAlt className="w-full h-full" /> */}
//               <FaLocationDot className="w-full h-full" />
//             </div>
//           </div>

//           {/* To */}
//           <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg">
//             <input
//               type="text"
//               placeholder="To"
//               className="flex-1 h-full border-none bg-transparent focus:outline-none"
//             />
//             <div className="w-5 h-5 text-neutral-400">
//               {/* <FaMapMarkedAlt className="w-full h-full" /> */}
//               <FaLocationDot className="w-full h-full" />
//             </div>
//           </div>

//           {/* Exchange button */}
//           <button className="absolute w-11 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-primary ">
//             <TbArrowsExchange className="w-6 h-6 text-neutral-50" />
//           </button>
//         </div>

//         {/* date and button section */}
//         <div className="flex-1 h-14 flex items-center gap-5">
//           {/* Date */}
//           <div className="flex-1 h-full border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg">
//             <input
//               type="date"
//               className="flex-1 h-full border-none bg-transparent focus:outline-none"
//             />
//           </div>

//           {/* Search button */}
//           <button className="w-fit px-5 h-full bg-primary hover:bg-transparent border-2 border-primary hover:border-primary rounded-xl text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 hover:text-primary ease-in-out duration-300">
//             <FaSearch />
//             Search
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Search;

import React from "react";
import { motion } from "framer-motion";
import { TbArrowsExchange } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -800 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -800 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-4 md:p-5"
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-5 justify-between">
        {/* From and To Section */}
        <div className="w-full md:w-[60%] flex flex-col sm:flex-row items-center gap-4 relative">
          {/* From */}
          <div className="w-full sm:w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-4 flex items-center gap-x-1 rounded-lg">
            <input
              type="text"
              placeholder="From"
              className="flex-1 h-full border-none bg-transparent focus:outline-none"
            />
            <FaLocationDot className="w-5 h-5 text-neutral-400" />
          </div>

          {/* To */}
          <div className="w-full sm:w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-4 flex items-center gap-x-1 rounded-lg">
            <input
              type="text"
              placeholder="To"
              className="flex-1 h-full border-none bg-transparent focus:outline-none"
            />
            <FaLocationDot className="w-5 h-5 text-neutral-400" />
          </div>

          {/* Exchange button */}
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:translate-x-0 sm:translate-y-0 sm:static sm:mt-0 w-10 h-10 rounded-full flex items-center justify-center bg-primary">
            <TbArrowsExchange className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Date and Search Button */}
        <div className="w-full md:flex-1 flex flex-col sm:flex-row items-center gap-4 h-full">
          <div className="w-full sm:flex-1 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-4 flex items-center gap-x-1 rounded-lg">
            <input
              type="date"
              className="flex-1 h-full border-none bg-transparent focus:outline-none"
            />
          </div>

          <button className="w-full sm:w-fit px-5 h-14 bg-primary hover:bg-transparent border-2 border-primary hover:border-primary rounded-xl text-base font-medium text-neutral-50 hover:text-primary flex items-center justify-center gap-x-2 transition-all duration-300">
            <FaSearch />
            Search
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Search;
