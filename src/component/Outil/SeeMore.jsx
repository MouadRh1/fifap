import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TfiArrowTopRight } from "react-icons/tfi";

export default function SeeMore({ className, children, onclick, path }) {
  return (
    // <motion.div
    //   className={`${className} max-w-sm border-2 border-[#ac5f2d] bg-transparent py-2 px-4 rounded-lg flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-[#ac5f2d] hover:text-white`}
    //   whileHover={{ scale: 1.03 }}
    //   whileTap={{ scale: 0.9 }}
    // >
      <Link 
        to={`/${path}`}   
        className={`${className} max-w-sm border-2 border-[#ac5f2d] hover:text-white bg-transparent py-2 px-4 rounded-full flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-[#ac5f2d] hover:text-white`} 
        onClick={onclick}
      >
          <p className="text-black font-semibold text-lg hover:text-white tracking-wide">
            {children || 'Learn More'}
          </p>
          <span className="text-black hover:text-white"><TfiArrowTopRight size={20}/></span>
      </Link>
    // </motion.div>
  );
}

