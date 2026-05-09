import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Ticket } from "lucide-react";

const Decouvrir = ({ children, className = "",}) => {

  return (
    <Link 
      to='/presentation-festival'
      className={`w-fit px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all ${className} `}
    >
      {children || 'Decouvrir le Festival'}
    </Link>
  );
};

export default Decouvrir;
