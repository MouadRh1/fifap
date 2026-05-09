import React, { useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
import { Ticket } from "lucide-react";
import { motion } from "framer-motion";
const WhatsAppButton = () => {

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center"
    >
      {/* WhatsApp Button */}
      <motion.a
        href="https://www.ticket.ma" // Replace with your WhatsApp number
        target="_blank"
        whileHover={{scale:1.07}}
        whileTap={{scale:.9}}
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full shadow-lg transition transform hover:shadow-xl duration-300"
      >
        <Ticket size={28} />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
